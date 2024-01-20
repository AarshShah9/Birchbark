import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
import { MenuItemModel } from "@syncfusion/ej2-react-navigations";

const exportItems: ItemModel[] = [
  { text: "iCalendar", iconCss: "e-icons e-export" },
  { text: "Excel", iconCss: "e-icons e-export-excel" },
];

const contextMenuItems: MenuItemModel[] = [
  { text: "New Appointment", iconCss: "e-icons e-plus", id: "Add" },
  {
    text: "New Recurring Appointment",
    iconCss: "e-icons e-repeat",
    id: "AddRecurrence",
  },
  { text: "Today", iconCss: "e-icons e-timeline-today", id: "Today" },
  { text: "Edit Appointment", iconCss: "e-icons e-edit", id: "Save" },
  { text: "Delete Appointment", iconCss: "e-icons e-trash", id: "Delete" },
  {
    text: "Delete Appointment",
    id: "DeleteRecurrenceEvent",
    iconCss: "e-icons e-trash",
    items: [
      { text: "Delete Occurrence", id: "DeleteOccurrence" },
      { text: "Delete Series", id: "DeleteSeries" },
    ],
  },
  {
    text: "Edit Appointment",
    id: "EditRecurrenceEvent",
    iconCss: "e-icons e-edit",
    items: [
      { text: "Edit Occurrence", id: "EditOccurrence" },
      { text: "Edit Series", id: "EditSeries" },
    ],
  },
];

const calendarCollections: Record<string, string | number>[] = [
  {
    CalendarText: "Confirmed Appointments",
    CalendarId: 1,
    CalendarColor: "#0084FF",
  }, // Pick color here
  { CalendarText: "Unconfirmed", CalendarId: 2, CalendarColor: "#7d7d7d" },
];

export { exportItems, contextMenuItems, calendarCollections };
