const appointmentsList = [
  {
    Id: 1,
    Subject: "TEST Appointment 1",
    StartTime: new Date(2023, 10, 10, 13, 0),
    EndTime: new Date(2023, 10, 10, 15, 0),
    Location: "123 Main St, Atlanta, GA 30303",
    Description: "Appointment regarding patient checkup and health status",
    RecurrenceRule: "",
    IsAllDay: false,
    IsReadonly: false,
    CalendarId: 1,
    DoctorID: 1, // THIS WILL BE THE DOCTORS ID
    Patient: "Adam Johnson",
  },
  {
    Id: 2,
    Subject: "TEST Appointment 2",
    StartTime: new Date(2023, 10, 11, 10, 0),
    EndTime: new Date(2023, 10, 11, 12, 0),
    Location: "123 Main St, Atlanta, GA 30303",
    Description: "Appointment regarding patient checkup and health status",
    RecurrenceRule: "",
    IsAllDay: false,
    IsReadonly: false,
    CalendarId: 2,
    DoctorID: 1, // THIS WILL BE THE DOCTORS ID
  },
];

export default appointmentsList;
