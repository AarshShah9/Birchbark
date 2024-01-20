// "use client";
import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

let localData: EventSettingsModel = {
  dataSource: [
    {
      Id: 1,
      End: new Date(2023, 7, 11, 6, 30),
      Start: new Date(2023, 7, 11, 4, 0),
      Summary: "Meeting",
      IsReadonly: true,
    },
    {
      Id: 2,
      End: new Date(2023, 7, 10, 6, 30),
      Start: new Date(2023, 7, 10, 4, 0),
      Summary: "Doctor Appointment with Dr. Smith",
      RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10",
    },
  ],
  fields: {
    subject: { name: "Summary", default: "No title is provided" },
    startTime: { name: "Start" },
    endTime: { name: "End" },
  },
};

const Calendar: React.FC = () => {
  return (
    <div>
      <ScheduleComponent
        currentView="Week"
        eventSettings={localData}
        // eventSettings={{dataSource: remoteData}}
        // selectedDate={new Date(2017, 5, 5)}
      >
        <Inject services={[Day, Week, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
