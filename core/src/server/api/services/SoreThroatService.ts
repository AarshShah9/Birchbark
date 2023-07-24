// core/src/server/api/services/SoreThroatsService.ts

import { createRouter } from 'trpc';
import { z } from 'zod';
import { SoreThroatData, DiagnosisResult } from '../types';
import { calculatePneumoniaProbability, calculateAsthmaProbability } from '../utils/probabilityCalculations';

type GraphNode = {
  type: 'Main Symptom' | 'Severity Assessment';
  name: string;
  question: string;
  severityLevels?: number[];
  mainSymptom?: string;
};

type Graph = {
  startNode: GraphNode;
  nodes: GraphNode[];
  edges: Record<string, string[]>;
};

function constructDiagnosticGraph(): Graph {
  const graph: Graph = {
    startNode: {
      type: 'Main Symptom',
      name: 'age',
      question: 'What is your age?',
    },
    nodes: [
      {
        type: 'Main Symptom',
        name: 'gender',
        question: 'What is your gender?',
      },
      {
        type: 'Main Symptom',
        name: 'existingMedicalConditions',
        question: 'Do you have any existing medical conditions? If yes, please specify.',
      },
      // Add more nodes for other main symptoms
      // ...
      {
        type: 'Severity Assessment',
        name: 'feverSeverity',
        mainSymptom: 'hasFever',
        question: 'On a scale of 1 to 10, how severe is your fever?',
        severityLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      // Add more nodes for severity assessments
      // ...
    },
    edges: {
      // Define the edges between nodes based on your graph structure
      // For example:
      age: ['gender', 'existingMedicalConditions'],
      gender: ['hasFever'],
      existingMedicalConditions: ['hasFever'],
      hasFever: ['feverSeverity'],
      feverSeverity: ['hasCough', 'hasFatigue'],
      // Add more edges between nodes
      // ...
    },
  };

  return graph;
}

async function askYesNoQuestion(question: string): Promise<boolean> {
  // Implement the logic to ask the question on the frontend and get the response
  // For this example, we'll use a dummy implementation that returns true
  return true;
}

async function askSeverityLevel(question: string, severityLevels: number[]): Promise<number> {
  // Implement the logic to ask the severity level question on the frontend and get the response
  // For this example, we'll use a dummy implementation that returns the maximum severity level
  return Math.max(...severityLevels);
}

function getConditionAssessment(severityAssessmentNode: GraphNode, symptomSeverity: number): any {
  // Implement the logic to calculate the condition assessment based on symptom severity
  // For this example, we'll return a dummy condition assessment
  return { assessment: 'Assessment based on severity level: ' + symptomSeverity };
}

function getNextNode(graph: Graph, currentNode: GraphNode, patientDetails: any): GraphNode | null {
  // Implement the logic to determine the next node to traverse based on patientDetails and the graph structure
  // For this example, we'll choose the next node in the nodes array as the next node to traverse

  const currentNodeIndex = graph.nodes.findIndex((node) => node.name === currentNode.name);
  const nextNodeIndex = currentNodeIndex + 1;

  return nextNodeIndex < graph.nodes.length ? graph.nodes[nextNodeIndex] : null;
}

const SoreThroatsService = createRouter()
  .mutation('diagnose', {
    input: z.object({
      age: z.number(),
      gender: z.string(),
      existingMedicalConditions: z.string(),
      hasFever: z.boolean(),
      feverSeverity: z.number(),
      hasCough: z.boolean(),
      coughDescription: z.string(),
      hasFatigue: z.boolean(),
      hasShortnessOfBreath: z.boolean(),
      hasChestPain: z.boolean(),
      hasSputum: z.boolean(),
      sputumDescription: z.string(),
      hasWheezing: z.boolean(),
      troubleSleeping: z.boolean(),
      respiratoryExposure: z.string(),
      // Add more fields for other symptoms and severity levels
    }),
    output: z.object({
      result: z.object({
        diagnosis: z.string(),
        response: z.string(),
        pneumoniaProbability: z.number(),
        asthmaProbability: z.number(),
      }),
    }),
    async resolve({ input }): Promise<DiagnosisResult> {
      const data: SoreThroatData = input;

      const diagnosisResult: DiagnosisResult = {
        diagnosis: '',
        response: '',
        pneumoniaProbability: 0,
        asthmaProbability: 0,
      };

      // Initialize patientDetails
      const patientDetails: any = {
        age: data.age,
        gender: data.gender,
        existingMedicalConditions: data.existingMedicalConditions,
        hasFever: data.hasFever,
        feverSeverity: data.feverSeverity,
        hasCough: data.hasCough,
        coughDescription: data.coughDescription,
        hasFatigue: data.hasFatigue,
        hasShortnessOfBreath: data.hasShortnessOfBreath,
        hasChestPain: data.hasChestPain,
        hasSputum: data.hasSputum,
        sputumDescription: data.sputumDescription,
        hasWheezing: data.hasWheezing,
        troubleSleeping: data.troubleSleeping,
        respiratoryExposure: data.respiratoryExposure,
        // Add more fields for other symptoms and severity levels
      };

      // Get the diagnostic graph
      const graph = constructDiagnosticGraph();

      // Start traversing the graph
      let currentNode: GraphNode | null = graph.startNode;

      // Loop through the main symptom questions and store patient responses in patientDetails
      while (currentNode) {
        if (currentNode.type === 'Main Symptom') {
          const presentSymptom = await askYesNoQuestion(currentNode.question);

          if (presentSymptom) {
            if (currentNode.severityLevels) {
              const severityLevel = await askSeverityLevel(currentNode.question, currentNode.severityLevels);
              patientDetails[currentNode.name] = { presentSymptom, severityLevel };
            } else {
              patientDetails[currentNode.name] = { presentSymptom, severityLevel: null };
            }
          } else {
            patientDetails[currentNode.name] = { presentSymptom, severityLevel: null };
          }
        } else if (currentNode.type === 'Severity Assessment') {
          const symptomSeverity = patientDetails[currentNode.mainSymptom]?.severityLevel || 0;
          const conditionAssessment = getConditionAssessment(currentNode, symptomSeverity);
          patientDetails[currentNode.name] = conditionAssessment;
        }

        currentNode = getNextNode(graph, currentNode, patientDetails);
      }

      // Calculate the probabilities for Pneumonia and Asthma
      const pneumoniaProbability = calculatePneumoniaProbability(patientDetails);
      const asthmaProbability = calculateAsthmaProbability(patientDetails);

      const threshold = 0.5; // Example threshold value, adjust as needed

      // Determine the final diagnosis based on probabilities and set the response
      if (pneumoniaProbability >= threshold && asthmaProbability >= threshold) {
        diagnosisResult.diagnosis = 'Both Pneumonia and Asthma';
        diagnosisResult.response =
          'Based on your symptoms, there is a high probability of having both Pneumonia and Asthma. It is essential to consult a healthcare professional for a detailed evaluation and treatment.';
      } else if (pneumoniaProbability >= threshold) {
        diagnosisResult.diagnosis = 'Pneumonia';
        diagnosisResult.response =
          'Based on your symptoms, there is a high probability of having Pneumonia. It is crucial to seek immediate medical attention for a proper diagnosis and treatment.';
      } else if (asthmaProbability >= threshold) {
        diagnosisResult.diagnosis = 'Asthma';
        diagnosisResult.response =
          'Based on your symptoms, there is a high probability of having Asthma. It is important to consult a healthcare professional to manage and control your symptoms effectively.';
      } else {
        diagnosisResult.diagnosis = 'No Respiratory Condition';
        diagnosisResult.response =
          'Based on your symptoms, there is no significant indication of a respiratory condition. However, if your symptoms persist or worsen, it is advisable to seek medical advice.';
      }

      // Set the probabilities in the diagnosisResult
      diagnosisResult.pneumoniaProbability = pneumoniaProbability;
      diagnosisResult.asthmaProbability = asthmaProbability;

      return { result: diagnosisResult };
    },
  });

export default SoreThroatsService;
