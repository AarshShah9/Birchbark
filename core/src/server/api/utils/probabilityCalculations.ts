// core/src/server/api/utils/probabilityCalculations.ts

// Probability calculation functions based on medical research and risk factors
export function calculatePneumoniaProbability(patientDetails: any): number {
  const age = patientDetails.age;
  const feverSeverity = patientDetails.feverSeverity;
  const coughDescription = patientDetails.coughDescription;
  const hasChestPain = patientDetails.hasChestPain;
  const hasSputum = patientDetails.hasSputum;

  let probability = 0.0;

  // Calculate probability based on age (example logic, should be based on real research)
  if (age > 65) {
    probability += 0.3;
  } else if (age >= 50) {
    probability += 0.2;
  } else {
    probability += 0.1;
  }

  // Calculate probability based on fever severity (example logic, should be based on real research)
  if (feverSeverity >= 7) {
    probability += 0.2;
  } else if (feverSeverity >= 5) {
    probability += 0.1;
  }

  // Calculate probability based on cough description (example logic, should be based on real research)
  if (coughDescription.toLowerCase().includes("productive")) {
    probability += 0.1;
  }

  // Calculate probability based on chest pain presence (example logic, should be based on real research)
  if (hasChestPain) {
    probability += 0.1;
  }

  // Calculate probability based on sputum presence (example logic, should be based on real research)
  if (hasSputum) {
    probability += 0.1;
  }

  return probability;
}

export function calculateAsthmaProbability(patientDetails: any): number {
  const age = patientDetails.age;
  const hasWheezing = patientDetails.hasWheezing;
  const respiratoryExposure = patientDetails.respiratoryExposure;

  let probability = 0.0;

  // Calculate probability based on age (example logic, should be based on real research)
  if (age > 65) {
    probability += 0.1;
  } else if (age >= 50) {
    probability += 0.05;
  }

  // Calculate probability based on wheezing presence (example logic, should be based on real research)
  if (hasWheezing) {
    probability += 0.2;
  }

  // Calculate probability based on respiratory exposure (example logic, should be based on real research)
  if (respiratoryExposure.toLowerCase().includes("dusty environment")) {
    probability += 0.1;
  }

  return probability;
}
