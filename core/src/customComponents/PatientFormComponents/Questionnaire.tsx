import React from "react";
import { questionnaireResources } from "~/resources/questionnaire";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { formProps } from "~/pages/app/patient/patient-form";

const Questionnaire = ({ next }: formProps) => {
  const {
    register,
    formState: { errors, isValid },
    setValue,
  } = useFormContext();

  var today = new Date();
  var dd = today.getDate().toString();
  var mm = (today.getMonth() + 1).toString(); //January is 0!
  var yyyy = today.getFullYear().toString();

  if (Number(dd) < 10) {
    dd = "0" + dd;
  }

  if (Number(mm) < 10) {
    mm = "0" + mm;
  }
  var strToday: string = yyyy + "-" + mm + "-" + dd;

  return (
    <>
      <div className="w-full bg-[#232627]">
        <div className="ml-12 flex h-[10vh] flex-initial p-6">
          <img
            className="h-full"
            alt="Birchbark Health Logo"
            src="/images/BirchbarkLogo3.svg"
          />
        </div>
        <div className="flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
          <h1 className="mb-8 text-center text-7xl font-bold text-white md:text-4xl">
            {questionnaireResources.title.English}
          </h1>

          <div className="flex w-[65%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-lg text-black lg:w-[95%] lg:p-8 md:text-sm">
            <div className="w-full">
              {/*<div className="flex flex-row p-5">*/}
              {/*  <input*/}
              {/*    type="checkbox"*/}
              {/*    {...register("confirmAppointment", { required: true })}*/}
              {/*    className="border-w mr-4 h-8 w-8 cursor-pointer border-2 accent-blue-400 dark:bg-white"*/}
              {/*    aria-invalid={*/}
              {/*      errors.confirmAppointment ? "true" : "false"*/}
              {/*    }*/}
              {/*  />*/}

              {/*  <label className="flex">*/}
              {/*    <span className="font-bold">*/}
              {/*      {questionnaireResources.confirmAppointment.English}*/}
              {/*    </span>*/}
              {/*  </label>*/}
              {/*</div>*/}
              {/*{errors.confirmAppointment?.type === "required" && (*/}
              {/*  <p className="text-sm text-red-500" role="alert">*/}
              {/*    Please confirm your appointment booking*/}
              {/*  </p>*/}
              {/*)}*/}
              <div className="flex flex-row lg:flex-col">
                <div className="flex w-1/2 flex-col p-5 lg:w-full">
                  <label>{questionnaireResources.firstName.English}</label>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                    placeholder="First Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  {errors.firstName?.type === "required" && (
                    <p className="text-sm text-red-500" role="alert">
                      First name is required
                    </p>
                  )}
                </div>
                <div className="flex w-1/2 flex-col p-5 lg:w-full">
                  <label>{questionnaireResources.lastName.English}</label>
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                    placeholder="Last Name"
                    aria-invalid={errors.lastName ? "true" : "false"}
                  />
                  {errors.lastName?.type === "required" && (
                    <p className="text-sm text-red-500" role="alert">
                      Last name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row lg:flex-col">
                <div className="flex w-1/2 flex-col p-5 lg:w-full">
                  <label>{questionnaireResources.birthday.English}</label>
                  <input
                    id="birthday"
                    max={strToday}
                    type="date"
                    {...register("birthday", { required: true })}
                    className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                    aria-invalid={errors.birthday ? "true" : "false"}
                  />
                  {errors.birthday?.type === "required" && (
                    <p className="text-sm text-red-500" role="alert">
                      Birthday is required
                    </p>
                  )}
                </div>
                <div className="flex w-1/2 flex-col p-5 lg:w-full">
                  <label>{questionnaireResources.status.English}</label>
                  <input
                    type="text"
                    {...register("status", { required: true })}
                    className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                    placeholder="xxx-xxx-xxx"
                    aria-invalid={errors.status ? "true" : "false"}
                  />
                  {errors.status?.type === "required" && (
                    <p className="text-sm text-red-500" role="alert">
                      Status is required
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col p-5">
                <label>{questionnaireResources.reasonOfVisit.English}</label>
                <textarea
                  {...register("reasonOfVisit", { required: true })}
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                  rows={4}
                  placeholder="Please enter your reason for visiting here."
                  aria-invalid={errors.reasonOfVisit ? "true" : "false"}
                />
                {errors.reasonOfVisit?.type === "required" && (
                  <p className="text-sm text-red-500" role="alert">
                    Reason of visit is required
                  </p>
                )}
              </div>
              <div className="flex flex-col p-5">
                <label>{questionnaireResources.medicalIssue.English}</label>
                <textarea
                  {...register("medicalIssue", { required: true })}
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                  rows={4}
                  placeholder="Please enter your medical issue here."
                  aria-invalid={errors.medicalIssue ? "true" : "false"}
                />
                {errors.medicalIssue?.type === "required" && (
                  <p className="text-sm text-red-500" role="alert">
                    Medical issue is required
                  </p>
                )}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex w-[150px] items-center justify-center rounded-full bg-[#4CA9EE] p-2 text-white"
              onClick={next}
            >
              Next
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
