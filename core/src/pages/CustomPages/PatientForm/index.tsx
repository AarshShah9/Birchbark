"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

import ClinicLandingPage from "../ClinicLandingPage/index";
import ClinicLandingPage2 from "../ClinicLandingPage2/index";
import Questionnaire from "../QuestionnairePage/index";
import Booking from "../BookingPortalPageFailed/index";

type patientInputs = {
  confirmAppointment: boolean;
  firstName: string;
  lastName: string;
  birthday: Date;
  status: number;
  reasonOfVisit: string;
  medicalIssue: string;
};

const steps = [
  {
    id: "Step 1",
    name: "Clinic Landing Page",
    fields: ["Wellness Content", "Chat with a Doctor"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { id: "Step 3", name: "Complete" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<patientInputs>({});

  const processForm: SubmitHandler<patientInputs> = (data) => {
    console.log(data);
    reset();
  };

  type FieldName = keyof patientInputs;

  const next = async () => {
    const fields = steps[currentStep]?.fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
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
    <div className="relative min-h-screen w-full bg-[#232627]">
      {/* Form */}
      <form className="" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && <ClinicLandingPage />}

        {currentStep === 1 && <ClinicLandingPage2 />}

        {currentStep === 2 && <Questionnaire />}

        {currentStep === 3 && <Booking />}

        {currentStep === 4 && <h1>Complete</h1>}

        {/* <div className="flex justify-end">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div> */}
      </form>

      {/* Navigation */}
      <div className="fixed bottom-4 left-4">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
