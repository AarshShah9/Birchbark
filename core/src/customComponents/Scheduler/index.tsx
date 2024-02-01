import * as React from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  ChangeEventArgs,
  MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";
import { SelectedEventArgs } from "@syncfusion/ej2-react-inputs";
import {
  BeforeOpenCloseMenuEventArgs,
  ClickEventArgs,
  ContextMenuComponent,
  ItemDirective,
  ItemsDirective,
  MenuEventArgs as ContextMenuEventArgs,
  ToolbarComponent,
} from "@syncfusion/ej2-react-navigations";
import {
  Agenda,
  CellClickEventArgs,
  Day,
  Inject,
  Month,
  ResourceDirective,
  ResourcesDirective,
  ResourcesModel,
  ScheduleComponent,
  Timezone,
  View,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
  Year,
  ExcelExport,
} from "@syncfusion/ej2-react-schedule";
import {
  DropDownButtonComponent,
  MenuEventArgs,
} from "@syncfusion/ej2-react-splitbuttons";
import {
  addClass,
  closest,
  extend,
  Internationalization,
  isNullOrUndefined,
  remove,
  removeClass,
  L10n,
} from "@syncfusion/ej2-base";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { api } from "~/utils/api";
import styled from "styled-components";
import { ActionEventArgs } from "@syncfusion/ej2-schedule/src/schedule/base/interface";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {
  calendarCollections,
  contextMenuItems,
  exportItems,
} from "~/customComponents/Scheduler/assets";
import { Appointment } from "@prisma/client";

const Overview = () => {
  const [currentView, setCurrentView] = useState<View>("Week");
  const [isTimelineView, setIsTimelineView] = useState<boolean>(false);
  let scheduleObj = useRef<ScheduleComponent>(null);
  let contextMenuObj = useRef<ContextMenuComponent>(null);
  let timeBtn = useRef<HTMLElement>(null);
  let selectedTarget: Element;
  let intl: Internationalization = new Internationalization();
  let workWeekObj = useRef<MultiSelectComponent>(null);
  let resourceObj = useRef<MultiSelectComponent>(null);
  let liveTimeInterval: NodeJS.Timeout | number;

  const { data, error, isLoading } =
    api.appointment.getAllAppointments.useQuery();

  const [stateData, setStateData] = useState(data);

  // Get all the appointment data from the database
  const createMutation = api.appointment.createAppointmentDoctor.useMutation();
  const updateMutation = api.appointment.updateAppointment.useMutation();
  const removeMutation = api.appointment.removeAppointment.useMutation();

  // Live time counter
  const updateLiveTime = (): void => {
    let scheduleTimezone: string = scheduleObj?.current?.timezone || "Etc/GMT";
    let liveTime;
    if (scheduleObj?.current?.isAdaptive) {
      liveTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: scheduleTimezone,
      });
    } else {
      liveTime = new Date().toLocaleTimeString("en-US", {
        timeZone: scheduleTimezone,
      });
    }
    if (timeBtn.current) {
      timeBtn.current.innerHTML = liveTime ?? "";
    }
  };

  const onImportClick = (args: SelectedEventArgs): void => {
    scheduleObj?.current?.importICalendar(
      ((args.event.target as HTMLInputElement).files as any)[0]
    );
  };

  const onPrint = (): void => {
    scheduleObj?.current?.print();
  };

  const onExportClick = (args: MenuEventArgs): void => {
    if (args.item.text === "Excel") {
      let exportDatas: Record<string, any>[] = [];
      let eventCollection: Record<string, any>[] =
        scheduleObj?.current?.getEvents() ?? new Array<Record<string, any>>();
      let resourceCollection: ResourcesModel[] =
        scheduleObj?.current?.getResourceCollections() ??
        new Array<ResourcesModel>();
      let resourceData: Record<string, any>[] = resourceCollection[0]
        ?.dataSource as Record<string, any>[];
      for (let resource of resourceData) {
        let data: Record<string, any>[] = eventCollection.filter(
          (e: Record<string, any>) => e.CalendarId === resource.CalendarId
        );
        exportDatas = exportDatas.concat(data as Record<string, any>[]);
      }
      scheduleObj?.current?.exportToExcel({
        exportType: "xlsx",
        customData: exportDatas,
        fields: ["Id", "Subject", "StartTime", "EndTime", "CalendarId"],
      });
    } else {
      scheduleObj?.current?.exportToICalendar();
    }
  };

  const getEventData = (): Record<string, any> => {
    const date: Date = scheduleObj?.current?.selectedDate ?? new Date();
    return {
      Id: scheduleObj?.current?.getEventMaxID(),
      Subject: "",
      StartTime: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        new Date().getHours(),
        0,
        0
      ),
      EndTime: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        new Date().getHours() + 1,
        0,
        0
      ),
      Location: "",
      Description: "",
      IsAllDay: false,
      CalendarId: 1,
    };
  };

  const onToolbarItemClicked = (args: ClickEventArgs): void => {
    switch (args.item.text) {
      case "Day":
        setCurrentView(isTimelineView ? "TimelineDay" : "Day");
        break;
      case "Week":
        setCurrentView(isTimelineView ? "TimelineWeek" : "Week");
        break;
      case "WorkWeek":
        setCurrentView(isTimelineView ? "TimelineWorkWeek" : "WorkWeek");
        break;
      case "Month":
        setCurrentView(isTimelineView ? "TimelineMonth" : "Month");
        break;
      case "Year":
        setCurrentView(isTimelineView ? "TimelineYear" : "Year");
        break;
      case "Agenda":
        setCurrentView("Agenda");
        break;
      case "New Appointment":
        const eventData: Record<string, any> = getEventData();
        scheduleObj?.current?.openEditor(eventData, "Add", true);
        break;
    }
  };

  useEffect(() => {
    let updatedView: View = currentView;
    switch (currentView) {
      case "Day":
      case "TimelineDay":
        updatedView = isTimelineView ? "TimelineDay" : "Day";
        break;
      case "Week":
      case "TimelineWeek":
        updatedView = isTimelineView ? "TimelineWeek" : "Week";
        break;
      case "WorkWeek":
      case "TimelineWorkWeek":
        updatedView = isTimelineView ? "TimelineWorkWeek" : "WorkWeek";
        break;
      case "Month":
      case "TimelineMonth":
        updatedView = isTimelineView ? "TimelineMonth" : "Month";
        break;
      case "Year":
      case "TimelineYear":
        updatedView = isTimelineView ? "TimelineYear" : "Year";
        break;
      case "Agenda":
        updatedView = "Agenda";
        break;
    }
    if (scheduleObj.current) {
      scheduleObj.current.currentView = updatedView;
    }
  }, [isTimelineView]);

  const getDateHeaderDay = (value: Date): string => {
    return intl.formatDate(value, { skeleton: "E" });
  };
  const getDateHeaderDate = (value: Date): string => {
    return intl.formatDate(value, { skeleton: "d" });
  };

  const dateHeaderTemplate = (props: { date: Date }) => {
    return (
      <Fragment>
        <div>{getDateHeaderDay(props.date)}</div>
        <div>{getDateHeaderDate(props.date)}</div>
      </Fragment>
    );
  };

  const btnClick = () => {
    let settingsPanel: Element = document.querySelector(
      ".overview-content .right-panel"
    ) as Element;
    if (settingsPanel.classList.contains("hide")) {
      removeClass([settingsPanel], "hide");
      workWeekObj?.current?.refresh();
      resourceObj?.current?.refresh();
    } else {
      addClass([settingsPanel], "hide");
    }
    scheduleObj?.current?.refreshEvents();
  };

  const contextMenuOpen = (args: BeforeOpenCloseMenuEventArgs) => {
    let newEventElement: HTMLElement = document.querySelector(
      ".e-new-event"
    ) as HTMLElement;
    if (newEventElement) {
      remove(newEventElement);
      removeClass(
        [document.querySelector(".e-selected-cell") as Element],
        "e-selected-cell"
      );
    }
    scheduleObj?.current?.closeQuickInfoPopup();
    let targetElement: HTMLElement = args.event.target as HTMLElement;
    if (closest(targetElement, ".e-contextmenu")) {
      return;
    }
    selectedTarget = closest(
      targetElement,
      ".e-appointment,.e-work-cells,.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells"
    );
    if (isNullOrUndefined(selectedTarget)) {
      args.cancel = true;
      return;
    }
    if (selectedTarget.classList.contains("e-appointment")) {
      let eventObj: Record<string, any> = scheduleObj?.current?.getEventDetails(
        selectedTarget
      ) as Record<string, any>;
      if (eventObj.RecurrenceRule) {
        contextMenuObj?.current?.showItems(
          ["EditRecurrenceEvent", "DeleteRecurrenceEvent"],
          true
        );
        contextMenuObj?.current?.hideItems(
          ["Add", "AddRecurrence", "Today", "Save", "Delete"],
          true
        );
      } else {
        contextMenuObj?.current?.showItems(["Save", "Delete"], true);
        contextMenuObj?.current?.hideItems(
          [
            "Add",
            "AddRecurrence",
            "Today",
            "EditRecurrenceEvent",
            "DeleteRecurrenceEvent",
          ],
          true
        );
      }
      return;
    } else if (
      (selectedTarget.classList.contains("e-work-cells") ||
        selectedTarget.classList.contains("e-all-day-cells")) &&
      !selectedTarget.classList.contains("e-selected-cell")
    ) {
      removeClass(
        [].slice.call(
          scheduleObj?.current?.element.querySelectorAll(".e-selected-cell")
        ),
        "e-selected-cell"
      );
      selectedTarget.setAttribute("aria-selected", "true");
      selectedTarget.classList.add("e-selected-cell");
    }
    contextMenuObj?.current?.hideItems(
      ["Save", "Delete", "EditRecurrenceEvent", "DeleteRecurrenceEvent"],
      true
    );
    contextMenuObj?.current?.showItems(["Add", "AddRecurrence", "Today"], true);
  };

  const contextMenuSelect = (args: ContextMenuEventArgs) => {
    let selectedMenuItem: string = args.item.id as string;
    let eventObj: Record<string, any> = {};
    if (selectedTarget && selectedTarget.classList.contains("e-appointment")) {
      eventObj = scheduleObj?.current?.getEventDetails(
        selectedTarget
      ) as Record<string, any>;
    }
    switch (selectedMenuItem) {
      case "Today":
        if (scheduleObj.current) {
          scheduleObj.current.selectedDate = new Date();
        }
        break;
      case "Add":
      case "AddRecurrence":
        let selectedCells: Element[] =
          scheduleObj?.current?.getSelectedElements() ?? [];
        let activeCellsData: CellClickEventArgs | undefined =
          scheduleObj?.current?.getCellDetails(
            selectedCells.length > 0 ? selectedCells : selectedTarget
          );

        if (selectedMenuItem === "Add" && activeCellsData) {
          scheduleObj?.current?.openEditor(activeCellsData, "Add");
        } else {
          if (activeCellsData) {
            scheduleObj?.current?.openEditor(activeCellsData, "Add", false, 1);
          }
        }
        break;
      case "Save":
      case "EditOccurrence":
      case "EditSeries":
        if (selectedMenuItem === "EditSeries") {
          let query: Query = new Query().where(
            scheduleObj?.current?.eventFields.id as string,
            "equal",
            eventObj.RecurrenceID as string | number
          );
          eventObj = new DataManager(
            scheduleObj?.current?.eventsData
          ).executeLocal(query)[0] as Record<string, any>;
        }
        scheduleObj?.current?.openEditor(eventObj, selectedMenuItem);
        break;
      case "Delete":
        scheduleObj?.current?.deleteEvent(eventObj);
        break;
      case "DeleteOccurrence":
      case "DeleteSeries":
        scheduleObj?.current?.deleteEvent(eventObj, selectedMenuItem);
        break;
    }
  };

  const timezoneChange = (args: ChangeEventArgs) => {
    if (scheduleObj.current) {
      scheduleObj.current.timezone = args.value as string;
    }
    updateLiveTime();
    (
      document.querySelector(".schedule-overview #timezoneBtn") as HTMLElement
    ).innerHTML =
      '<span class="e-btn-icon e-icons e-time-zone e-icon-left"></span>' +
      args.itemData.text;
  };

  let pushAppointmentData = (): Record<string, any>[] => {
    let eventData: Record<string, any>[] = [];
    let weekDate: Date = new Date(
      new Date().setDate(new Date().getDate() - new Date().getDay())
    ); // This gets the current date

    // Check if the data is there
    if (stateData) {
      // For each appointment, push the data to the eventData array
      stateData.forEach((currentAppointment) => {
        if (currentAppointment.statusM === "Confirmed") {
          eventData.push({
            Id: currentAppointment.id,
            Subject: currentAppointment.subject,
            StartTime: currentAppointment.startTime ?? new Date(0, 0, 1),
            EndTime: currentAppointment.endTime,
            Description: currentAppointment.description,
            RecurrenceRule: "",
            IsAllDay: false,
            IsReadonly: false,
            CalendarId: 1,
            DoctorID: currentAppointment.doctorId,
            Patient: {
              name: currentAppointment.patient.name,
              id: currentAppointment.patient.id,
            },
          });
        }
      });
    }

    // Create a deep copy of the eventData array with an array of objects with keys of type string and values of type Date
    let overviewEvents: { [key: string]: Date }[] = extend(
      [],
      eventData,
      undefined,
      true
    ) as { [key: string]: Date }[];
    let timezone: Timezone = new Timezone(); // Create a new time zone
    let currentTimezone: never = timezone.getLocalTimezoneName() as never; // Get the current time zone

    return overviewEvents;
  };

  const onActionComplete = async (args: ActionEventArgs) => {
    console.log(args, "action complete");
    let data;
    if (args.requestType === "eventCreated" && args.addedRecords) {
      const record = args.addedRecords[0];
      if (record) {
        data = {
          startTime: (record.StartTime as Date) ?? new Date(0, 0, 1),
          endTime: record.EndTime as Date,
          subject: record.Subject as string,
          description: record.Description || "",
          isAllDay: record.IsAllDay || false,
          isReadOnly: false,
          patientId: record.PatientId,
        };
      }
      if (data != null) {
        createMutation.mutate(data);
      }
    } else if (args.requestType === "eventChanged" && args.changedRecords) {
      const changedRecord = args.changedRecords[0];
      if (changedRecord) {
        data = {
          appointmentId: changedRecord.Id,
          startTime: changedRecord.StartTime as Date,
          endTime: changedRecord.EndTime as Date,
          subject: changedRecord.Subject as string,
          description: changedRecord.Description || "",
          isAllDay: changedRecord.IsAllDay || false,
          patientId: changedRecord.PatientId,
        };
        updateMutation.mutate(data);
      }
    } else if (args.requestType === "eventRemoved" && args.deletedRecords) {
      const removedRecord = args.deletedRecords[0];
      if (removedRecord)
        removeMutation.mutate({
          appointmentId: removedRecord.Id,
        });
    }
  };

  const onActionFailure = (args: ActionEventArgs) => {
    // Handle any errors during CRUD actions
    console.error("CRUD action failed", args.event);
  };

  // This is the custom editor
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div
          className="flex h-8 w-8 animate-spin items-center justify-center rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!-m-px flex !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
        <div className="content-wrapper">
          <div className="schedule-overview">
            {/* We may need this later */}
            {/* <AppBarComponent colorMode="Primary"> */}

            <div className="m-5 hidden flex-row justify-between bg-n-6">
              <div className=" flex w-48 justify-center ">
                <div className="flex w-56 items-center justify-center rounded-lg border-2 border-n-4">
                  <span id="timezoneBtn" className="time pr-2">
                    UTC
                  </span>
                  <span className="time e-icons e-clock "></span>
                  <span
                    id="timeBtn"
                    className="time current-time p-1"
                    ref={timeBtn}
                  ></span>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex items-center justify-center rounded-lg border-2 border-n-4 p-3">
                  <div className="control-panel calendar-export">
                    <ButtonComponent
                      id="printBtn"
                      cssClass="title-bar-btn e-inherit"
                      iconCss="e-icons e-print"
                      onClick={onPrint}
                      content="Print"
                    />
                  </div>
                  <div className="control-panel calendar-export">
                    <DropDownButtonComponent
                      id="exportBtn"
                      content="Export"
                      cssClass="title-bar-btn e-inherit"
                      items={exportItems}
                      select={onExportClick}
                      className="bg-white"
                    />
                  </div>
                  <ButtonComponent
                    id="settingsBtn"
                    cssClass="overview-toolbar-settings e-inherit"
                    iconCss="e-icons e-settings"
                    iconPosition="Top"
                    content=""
                    onClick={btnClick}
                  />
                </div>
              </div>
            </div>

            {/* </AppBarComponent> */}
            <ToolbarComponent
              id="toolbarOptions"
              cssClass="overview-toolbar"
              width="100%"
              height={40}
              overflowMode="Scrollable"
              scrollStep={100}
              created={() =>
                (liveTimeInterval = setInterval(() => {
                  updateLiveTime();
                }, 1000))
              }
              clicked={onToolbarItemClicked}
            >
              <ItemsDirective>
                <ItemDirective
                  prefixIcon="e-icons e-plus"
                  tooltipText="New Appointment"
                  text="New Appointment"
                  tabIndex={0}
                />
              </ItemsDirective>
            </ToolbarComponent>

            <div className="overview-content">
              <div className="left-panel">
                <div className="overview-scheduler">
                  <CalendarC>
                    <ScheduleComponent
                      id="scheduler"
                      cssClass="schedule-overview"
                      ref={scheduleObj}
                      width="100%"
                      height="100%"
                      currentView={currentView}
                      group={{ resources: ["Calendars"] }}
                      timezone="UTC"
                      // THIS IS WHERE THE DATA IS PASSED TO THE CALENDAR
                      eventSettings={{ dataSource: pushAppointmentData() }}
                      allowDragAndDrop={false}
                      allowResizing={false}
                      dateHeaderTemplate={dateHeaderTemplate}
                      // Data is updated here
                      actionComplete={onActionComplete}
                      actionFailure={onActionFailure}
                      showQuickInfo={false}
                      editorTemplate={editorTemplate.bind(this)}
                    >
                      <ResourcesDirective>
                        <ResourceDirective
                          field="CalendarId"
                          title="Calendars"
                          name="Calendars"
                          dataSource={calendarCollections}
                          query={new Query().where("CalendarId", "equal", 1)}
                          textField="CalendarText"
                          idField="CalendarId"
                          allowMultiple={true}
                          colorField="CalendarColor"
                        />
                      </ResourcesDirective>

                      {/* Adds the different views */}
                      <ViewsDirective>
                        <ViewDirective
                          option="Day"
                          startHour="07:00"
                          endHour="20:00"
                        />
                        <ViewDirective
                          option="Week"
                          startHour="07:00"
                          endHour="20:00"
                        />
                        <ViewDirective
                          option="WorkWeek"
                          startHour="07:00"
                          endHour="20:00"
                        />
                        <ViewDirective option="Month" />
                        <ViewDirective option="Year" />
                        <ViewDirective option="Agenda" />
                      </ViewsDirective>

                      {/* Inject different things */}
                      <Inject
                        services={[Day, Week, WorkWeek, Month, Year, Agenda]}
                      />
                    </ScheduleComponent>
                  </CalendarC>

                  <ContextMenuComponent
                    id="overviewContextMenu"
                    cssClass="schedule-context-menu"
                    ref={contextMenuObj}
                    target=".e-schedule"
                    items={contextMenuItems}
                    beforeOpen={contextMenuOpen}
                    select={contextMenuSelect}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const editorTemplate = (props: any) => {
  const { data } = api.patient.getDoctorsPatients.useQuery();
  const [description, setDescription] = useState<string>(props.Description);
  //
  let patientDataFlattened: { [key: string]: Object }[] = [];
  if (data) {
    patientDataFlattened = data.map((patient) => ({
      name: patient.name,
      id: patient.id,
    }));
  }
  //
  const fields = { text: "name", value: "id" };

  // All Inputs have to have 'e-field', also make sure that they all have 'data-name attribute'
  return (
    <table className="custom-event-editor w-full">
      <tbody>
        <tr>
          <td className="e-textlabel">Subject</td>
          <td colSpan={4}>
            <label htmlFor="Subject" className="e-textlabel hidden">
              Subject
            </label>
            <input
              id="Subject"
              className="e-field e-input"
              type="text"
              name="Subject"
              defaultValue={props.Subject}
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Patient</td>
          <td colSpan={4}>
            <DropDownListComponent
              id="PatientId"
              placeholder="Choose Patient"
              data-name="PatientId"
              className="e-field"
              fields={fields} // Specify which fields to use for display text and value
              dataSource={patientDataFlattened}
              value={props.Patient || null}
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">From</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              format="dd/MM/yy hh:mm a"
              id="StartTime"
              data-name="StartTime"
              value={new Date(props.startTime || props.StartTime)} // Need to fix here
              className="e-field"
            ></DateTimePickerComponent>
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">To</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              format="dd/MM/yy hh:mm a"
              id="EndTime"
              data-name="EndTime"
              value={new Date(props.endTime || props.EndTime)} // Need to fix here
              className="e-field"
            ></DateTimePickerComponent>
          </td>
        </tr>

        <tr>
          <td className="e-textlabel">Description</td>
          <td colSpan={4}>
            <label htmlFor="Description" className="e-textlabel hidden">
              Description
            </label>
            <textarea
              id="Description"
              className="e-field e-input"
              name="Description"
              rows={3}
              cols={50}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const CalendarC = styled.div`
  height: calc(
    100vh - 120px
  ); /* Adjust 120px based on the actual height of your header and toolbar */
  overflow: auto;
`;

export default Overview;
