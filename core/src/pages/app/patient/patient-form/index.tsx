"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

// ITL Texts
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import LandingPage1 from "~/customComponents/PatientFormComponents/LandingPage1";
import LandingPage2 from "~/customComponents/PatientFormComponents/LandingPage2";
import Questionnaire from "~/customComponents/PatientFormComponents/Questionnaire";
import AppointmentBooking from "~/customComponents/PatientFormComponents/AppointmentBooking";

type patientInputs = {
  firstName: string;
  lastName: string;
  birthday: string;
  status: string;
  reasonOfVisit: string;
  medicalIssue: string;
  bookingDay: string;
  bookingTime: {
    startTime: string;
    endTime: string;
  };
  needCounsellor: boolean;
  needDoctor: boolean;
  needPsychologist: boolean;
  clickedWellness: boolean;
  clickedChatWithDoctor: boolean;
};

const steps = [
  {
    id: "Step 1",
    name: "Clinic Landing Page 1",
    fields: ["How can we help you?"],
  },
  {
    id: "Step 2",
    name: "Clinic Landing Page 2",
    fields: ["Who would you like to see?"],
  },
  {
    id: "Step 3",
    name: "Questionnaire",
    fields: [
      "Confirm Booking",
      "Patient First Name",
      "Patient Last Name",
      "Birthday (yyyy-mm-dd)",
      "Status Number",
      "Why are you coming in today?",
      "Please tell us about your medical issue.",
    ],
  },
  { id: "Step 4", name: "Booking", fields: "Booking Time" },
];

export type formProps = {
  next: () => void;
  language: string;
  setLanguage: (l: string) => void;
};

type FieldName = keyof patientInputs;

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState("English");
  const methods = useForm<patientInputs>({});
  const { handleSubmit, reset, trigger } = methods;
  const router = useRouter();

  const mutate = api.appointmentPatient.createNewAppointment.useMutation();

  const processForm: SubmitHandler<patientInputs> = (data) => {
    mutate.mutate(data);
    router.push("/app/patient/dashboard");
  };

  const next = async () => {
    const fields = steps[currentStep]?.fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="relative min-h-screen w-full bg-[#232627]">
        {/* Form */}
        <form onSubmit={handleSubmit(processForm)}>
          {/* Clinic Landing Page 1 */}
          {currentStep === 0 && (
            <LandingPage1
              next={next}
              language={language}
              setLanguage={setLanguage}
            ></LandingPage1>
          )}

          {/* Clinic Landing Page 2 */}
          {currentStep === 1 && (
            <LandingPage2
              next={next}
              language={language}
              setLanguage={setLanguage}
            ></LandingPage2>
          )}

          {/* Questionnaire */}
          {currentStep === 2 && (
            <Questionnaire
              next={next}
              language={language}
              setLanguage={setLanguage}
            ></Questionnaire>
          )}

          {/* Booking Component */}
          {currentStep === 3 && (
            <AppointmentBooking
              next={next}
              language={language}
              setLanguage={setLanguage}
            ></AppointmentBooking>
          )}

          {currentStep === 4 && <h1>Complete</h1>}
        </form>

        {/* Navigation */}
        <div className="fixed bottom-[50%] left-8 lg:bottom-4">
          <div className="flex justify-between">
            <motion.button
              type="button"
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={currentStep === 0}
              className="mt-4 flex w-[100px] items-center justify-center rounded-full bg-[#4CA9EE] p-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </motion.button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
