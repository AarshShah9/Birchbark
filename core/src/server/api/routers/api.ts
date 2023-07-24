import { createRouter, z } from 'trpc';

const router = createRouter();

const immuneApplicableConditions = ['sore_throat', 'cough'];

router.query('getQuestions', {
  async resolve() {
    const questions = [
      {
        id: 'followUpAppointment',
        question: 'Is this a follow-up appointment?',
        type: 'boolean',
      },
      {
        id: 'ageSexGender',
        question: 'Please enter your age, sex, and gender',
        type: 'object',
        properties: {
          age: {
            type: 'integer',
            minimum: 0,
          },
          sex: {
            type: 'integer',
            enum: [0, 1],
          },
          gender: {
            type: 'string',
            enum: ['binary', 'non-binary'],
          },
        },
      },
      {
        id: 'smoke',
        question: 'Do you smoke?',
        type: 'boolean',
      },
      {
        id: 'smokeDetails',
        question: 'How long have you been smoking (in years)?',
        type: 'integer',
        condition: (data) => data.smoke === true,
      },
      {
        id: 'smokeAmount',
        question: 'How much do you smoke (number of packs)?',
        type: 'integer',
        condition: (data) => data.smoke === true,
      },
      {
        id: 'smokeFrequency',
        question: 'How often do you smoke?',
        type: 'string',
        enum: ['daily', 'every few days', 'weekly', 'more than a week'],
        condition: (data) => data.smoke === true,
      },
      {
        id: 'drink',
        question: 'Do you drink?',
        type: 'boolean',
      },
      {
        id: 'drinkFrequency',
        question: 'How frequently do you drink?',
        type: 'string',
        enum: ['daily', 'every few days', 'weekly', 'infrequently'],
        condition: (data) => data.drink === true,
      },
      {
        id: 'drinkAmount',
        question: 'How much do you drink at a time?',
        type: 'string',
        enum: ['one glass/beer', 'less than 5', 'more than 5'],
        condition: (data) => data.drink === true,
      },
      {
        id: 'prescriptionMeds',
        question: 'Please list any prescription medications you take',
        type: 'string',
      },
      {
        id: 'reasonForVisit',
        question: 'What brought you here today?',
        type: 'string',
      },
      {
        id: 'isImmunocompromised',
        question: 'Are you immunocompromised?',
        type: 'boolean',
        condition: (data) => data.immuneApplicability === 1,
      },
      {
        id: 'medicalCondition',
        question: 'Enter your medical condition',
        type: 'string',
        condition: (data) => data.isImmunocompromised === true,
      },
    ];

    return questions;
  },
});

router.query('submitAnswers', {
  input: z.array(
    z.object({
      questionId: z.string(),
      answer: z.any(),
    })
  ),
  async resolve({ input }) {
    const answers = {};

    input.forEach((item) => {
      answers[item.questionId] = item.answer;
    });

    const immuneApplicability =
      immuneApplicableConditions.includes(answers.reasonForVisit) ? 1 : 0;

    const nextQuestions = [];

    const getCondition = (condition, data) =>
      condition ? (typeof condition === 'function' ? condition(data) : condition) : true;

    const processQuestion = (question) => {
      const condition = question.condition;
      if (getCondition(condition, answers)) {
        nextQuestions.push(question);
      }
    };

    const questionMapping = {
      followUpAppointment: () => {},
      ageSexGender: () => {},
      smoke: () => {
        processQuestion(questions.find((q) => q.id === 'smokeDetails'));
        processQuestion(questions.find((q) => q.id === 'smokeAmount'));
        processQuestion(questions.find((q) => q.id === 'smokeFrequency'));
      },
      smokeDetails: () => {},
      smokeAmount: () => {},
      smokeFrequency: () => {},
      drink: () => {
        processQuestion(questions.find((q) => q.id === 'drinkFrequency'));
        processQuestion(questions.find((q) => q.id === 'drinkAmount'));
      },
      drinkFrequency: () => {},
      drinkAmount: () => {},
      prescriptionMeds: () => {},
      reasonForVisit: () => {
        const immuneApplicability = immuneApplicableConditions.includes(answers.reasonForVisit)
          ? 1
          : 0;
        answers.immuneApplicability = immuneApplicability;
        processQuestion(questions.find((q) => q.id === 'isImmunocompromised'));
      },
      isImmunocompromised: () => {
        processQuestion(questions.find((q) => q.id === 'medicalCondition'));
      },
      medicalCondition: () => {},
    };

    const processNextQuestion = (questionId) => {
      const questionHandler = questionMapping[questionId];
      if (questionHandler) {
        questionHandler();
      }
    };

    for (const answer of input) {
      const questionId = answer.questionId;
      answers[questionId] = answer.answer;
      processNextQuestion(questionId);
    }

    return nextQuestions;
  },
});

export default router;
