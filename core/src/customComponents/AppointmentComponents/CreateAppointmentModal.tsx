// Component for Modal for creating an appointment
import React, { SetStateAction } from "react";
import Modal from "~/components/Modal";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";

type Form = {
  subject: string;
  patientId: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  description: string;
};

const CreateAppointmentModal = ({
  createAppointmentModal,
  setCreateAppointmentModal,
}: {
  createAppointmentModal: boolean;
  setCreateAppointmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { handleSubmit, register } = useForm<Form>();
  const { data: patients } = api.patient.getAllPatients.useQuery();
  const { mutate: createAppointment } =
    api.appointment.createAppointmentDoctor.useMutation();

  const onSubmit = (data: Form) => {
    console.log(data);
    setCreateAppointmentModal(false);
    createAppointment(data);
  };

  return (
    <Modal
      visible={createAppointmentModal}
      onClose={() => setCreateAppointmentModal(false)}
      className="flex h-full w-full items-center justify-center"
    >
      <Dialog.Title className={"px-20 pt-8 text-center font-bold"}>
        Create a new appointment
      </Dialog.Title>

      <div className="flex w-full items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="table-auto border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="subject">Subject:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <input
                    className="w-full px-3 py-2"
                    type="text"
                    placeholder="Enter subject"
                    {...register("subject")}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="patient">Patient:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <select
                    className="w-full px-3 py-2"
                    title="Select patient"
                    {...register("patientId")}
                  >
                    {patients?.map((patient, index) => (
                      <option key={index} value={patient.id}>
                        {patient.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="startDate">Start Date:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <input
                    className="w-full px-3 py-2"
                    type="date"
                    title="Start Date"
                    placeholder="Select start date"
                    {...register("startDate")}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="startTime">Start Time:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <input
                    className="w-full px-3 py-2"
                    type="time"
                    title="Start Time"
                    placeholder="Select start time"
                    {...register("startTime")}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="endDate">End Date:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <input
                    className="w-full px-3 py-2"
                    type="date"
                    title="End Date"
                    placeholder="Select end date"
                    {...register("endDate")}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="endTime">End Time:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <input
                    className="w-full px-3 py-2"
                    type="time"
                    title="End Time"
                    placeholder="Select end time"
                    {...register("endTime")}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="description">Description:</label>
                </td>
                <td className="px-4 py-1 font-normal">
                  <textarea
                    className="w-full px-3 py-2"
                    placeholder="Enter description"
                    {...register("description")}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-full flex-row justify-center">
            <motion.button
              whileHover={{ scale: 0.9 }}
              className="m-1 flex h-12 w-28 items-center justify-center rounded-full bg-[#4CA9EE] p-4"
              type="submit"
            >
              Save
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.9 }}
              className="m-1 flex h-12 w-28 items-center justify-center rounded-full bg-red-500 p-4"
              onClick={() => setCreateAppointmentModal(false)}
              type="button"
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateAppointmentModal;
