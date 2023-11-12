import * as React from 'react';
import appointmentsList from "~/data/appointments";
import {Fragment, useEffect, useRef, useState} from 'react';
import {ButtonComponent, ChangeEventArgs as SwitchEventArgs, CheckBoxComponent} from '@syncfusion/ej2-react-buttons';
import {ChangeEventArgs, MultiSelectChangeEventArgs, MultiSelectComponent} from '@syncfusion/ej2-react-dropdowns';
import {SelectedEventArgs} from '@syncfusion/ej2-react-inputs';
import {
  BeforeOpenCloseMenuEventArgs,
  ClickEventArgs,
  ContextMenuComponent,
  ItemDirective,
  ItemsDirective,
  MenuEventArgs as ContextMenuEventArgs,
  MenuItemModel,
  ToolbarComponent
} from '@syncfusion/ej2-react-navigations';
import {
  Agenda,
  CellClickEventArgs,
  Day,
  DragAndDrop,
  ExcelExport,
  ICalendarExport,
  ICalendarImport,
  Inject,
  Month,
  Print,
  Resize,
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
  Year
} from '@syncfusion/ej2-react-schedule';
import {DropDownButtonComponent, ItemModel, MenuEventArgs} from '@syncfusion/ej2-react-splitbuttons';
import {
  addClass,
  closest,
  compile,
  extend,
  Internationalization,
  isNullOrUndefined,
  remove,
  removeClass
} from '@syncfusion/ej2-base';
import {DataManager, Predicate, Query} from '@syncfusion/ej2-data';
import { api } from "~/utils/api";

const Overview = () => {
    const [currentView, setCurrentView] = useState<View>('Week');
    const [isTimelineView, setIsTimelineView] = useState<boolean>(false);
    let scheduleObj = useRef<ScheduleComponent>(null);
    let contextMenuObj = useRef<ContextMenuComponent>(null);
    let timeBtn = useRef<HTMLElement>(null);
    let selectedTarget: Element;
    let intl: Internationalization = new Internationalization();
    let workWeekObj = useRef<MultiSelectComponent>(null);
    let resourceObj = useRef<MultiSelectComponent>(null);
    let liveTimeInterval: NodeJS.Timeout | number;

    const weekDays: Record<string, any>[] = [
        {text: 'Sunday', value: 0},
        {text: 'Monday', value: 1},
        {text: 'Tuesday', value: 2},
        {text: 'Wednesday', value: 3},
        {text: 'Thursday', value: 4},
        {text: 'Friday', value: 5},
        {text: 'Saturday', value: 6}
    ];

    const exportItems: ItemModel[] = [
        {text: 'iCalendar', iconCss: 'e-icons e-export'},
        {text: 'Excel', iconCss: 'e-icons e-export-excel'}
    ];

    const contextMenuItems: MenuItemModel[] = [
        {text: 'New Appointment', iconCss: 'e-icons e-plus', id: 'Add'},
        {text: 'New Recurring Appointment', iconCss: 'e-icons e-repeat', id: 'AddRecurrence'},
        {text: 'Today', iconCss: 'e-icons e-timeline-today', id: 'Today'},
        {text: 'Edit Appointment', iconCss: 'e-icons e-edit', id: 'Save'},
        {text: 'Delete Appointment', iconCss: 'e-icons e-trash', id: 'Delete'},
        {
            text: 'Delete Appointment', id: 'DeleteRecurrenceEvent', iconCss: 'e-icons e-trash',
            items: [
                {text: 'Delete Occurrence', id: 'DeleteOccurrence'},
                {text: 'Delete Series', id: 'DeleteSeries'}
            ]
        },
        {
            text: 'Edit Appointment', id: 'EditRecurrenceEvent', iconCss: 'e-icons e-edit',
            items: [
                {text: 'Edit Occurrence', id: 'EditOccurrence'},
                {text: 'Edit Series', id: 'EditSeries'}
            ]
        }
    ];

    const calendarCollections: Record<string, any>[] = [
        {CalendarText: 'Dr. Smith Appointments', CalendarId: 1, CalendarColor: '#0084FF'}, // Pick color here
        {CalendarText: 'Unconfirmed', CalendarId: 2, CalendarColor: '#7d7d7d'},
        {CalendarText: 'Dr. Smith', CalendarId: 3, CalendarColor: '#AF27CD'},
        {CalendarText: 'Dr. Adam', CalendarId: 4, CalendarColor: '#808000'}
    ];

    const timezoneData: Record<string, any>[] = [
        {text: 'UTC -12:00', value: 'Etc/GMT+12'},
        {text: 'UTC -11:00', value: 'Etc/GMT+11'},
        {text: 'UTC -10:00', value: 'Etc/GMT+10'},
        {text: 'UTC -09:00', value: 'Etc/GMT+9'},
        {text: 'UTC -08:00', value: 'Etc/GMT+8'},
        {text: 'UTC -07:00', value: 'Etc/GMT+7'},
        {text: 'UTC -06:00', value: 'Etc/GMT+6'},
        {text: 'UTC -05:00', value: 'Etc/GMT+5'},
        {text: 'UTC -04:00', value: 'Etc/GMT+4'},
        {text: 'UTC -03:00', value: 'Etc/GMT+3'},
        {text: 'UTC -02:00', value: 'Etc/GMT+2'},
        {text: 'UTC -01:00', value: 'Etc/GMT+1'},
        {text: 'UTC +00:00', value: 'Etc/GMT'},
        {text: 'UTC +01:00', value: 'Etc/GMT-1'},
        {text: 'UTC +02:00', value: 'Etc/GMT-2'},
        {text: 'UTC +03:00', value: 'Etc/GMT-3'},
        {text: 'UTC +04:00', value: 'Etc/GMT-4'},
        {text: 'UTC +05:00', value: 'Etc/GMT-5'},
        {text: 'UTC +05:30', value: 'Asia/Calcutta'},
        {text: 'UTC +06:00', value: 'Etc/GMT-6'},
        {text: 'UTC +07:00', value: 'Etc/GMT-7'},
        {text: 'UTC +08:00', value: 'Etc/GMT-8'},
        {text: 'UTC +09:00', value: 'Etc/GMT-9'},
        {text: 'UTC +10:00', value: 'Etc/GMT-10'},
        {text: 'UTC +11:00', value: 'Etc/GMT-11'},
        {text: 'UTC +12:00', value: 'Etc/GMT-12'},
        {text: 'UTC +13:00', value: 'Etc/GMT-13'},
        {text: 'UTC +14:00', value: 'Etc/GMT-14'}
    ];
    const majorSlotData: Record<string, any>[] = [
        {Name: '1 hour', Value: 60},
        {Name: '1.5 hours', Value: 90},
        {Name: '2 hours', Value: 120},
        {Name: '2.5 hours', Value: 150},
        {Name: '3 hours', Value: 180},
        {Name: '3.5 hours', Value: 210},
        {Name: '4 hours', Value: 240},
        {Name: '4.5 hours', Value: 270},
        {Name: '5 hours', Value: 300},
        {Name: '5.5 hours', Value: 330},
        {Name: '6 hours', Value: 360},
        {Name: '6.5 hours', Value: 390},
        {Name: '7 hours', Value: 420},
        {Name: '7.5 hours', Value: 450},
        {Name: '8 hours', Value: 480},
        {Name: '8.5 hours', Value: 510},
        {Name: '9 hours', Value: 540},
        {Name: '9.5 hours', Value: 570},
        {Name: '10 hours', Value: 600},
        {Name: '10.5 hours', Value: 630},
        {Name: '11 hours', Value: 660},
        {Name: '11.5 hours', Value: 690},
        {Name: '12 hours', Value: 720}
    ];
    const minorSlotData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const timeFormatData: Record<string, any>[] = [
        {Name: "12 hours", Value: "hh:mm a"},
        {Name: "24 hours", Value: "HH:mm"}
    ];
    const weekNumberData: Record<string, any>[] = [
        {Name: 'Off', Value: 'Off'},
        {Name: 'First Day of Year', Value: 'FirstDay'},
        {Name: 'First Full Week', Value: 'FirstFullWeek'},
        {Name: 'First Four-Day Week', Value: 'FirstFourDayWeek'}
    ];
    const tooltipData: Record<string, any>[] = [
        {Name: 'Off', Value: 'Off'},
        {Name: 'On', Value: 'On'}
    ];

    const importTemplateFn = (data: Record<string, any>): NodeList => {
        const template: string = '<div class="e-template-btn"><span class="e-btn-icon e-icons e-upload-1 e-icon-left"></span>${text}</div>';
        return compile(template.trim())(data) as NodeList;
    }

    const updateLiveTime = (): void => {
        let scheduleTimezone: string = scheduleObj?.current?.timezone || 'Etc/GMT';
        let liveTime;
        if (scheduleObj?.current?.isAdaptive) {
            liveTime = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: scheduleTimezone
            });
        } else {
            liveTime = new Date().toLocaleTimeString('en-US', {timeZone: scheduleTimezone});
        }
        if (timeBtn.current) {
            timeBtn.current.innerHTML = liveTime ?? "";
        }

    };

    const onImportClick = (args: SelectedEventArgs): void => {
        scheduleObj?.current?.importICalendar(((args.event.target as HTMLInputElement).files as any)[0]);
    }

    const onPrint = (): void => {
        scheduleObj?.current?.print();
    }

    const onExportClick = (args: MenuEventArgs): void => {
        if (args.item.text === 'Excel') {
            let exportDatas: Record<string, any>[] = [];
            let eventCollection: Record<string, any>[] = scheduleObj?.current?.getEvents() ?? new Array<Record<string, any>>();
            let resourceCollection: ResourcesModel[] = scheduleObj?.current?.getResourceCollections() ?? new Array<ResourcesModel>();
            let resourceData: Record<string, any>[] = resourceCollection[0]?.dataSource as Record<string, any>[];
            for (let resource of resourceData) {
                let data: Record<string, any>[] = eventCollection.filter((e: Record<string, any>) => e.CalendarId === resource.CalendarId);
                exportDatas = exportDatas.concat(data as Record<string, any>[]);
            }
            scheduleObj?.current?.exportToExcel({
                exportType: 'xlsx',
                customData: exportDatas,
                fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'CalendarId']
            });
        } else {
            scheduleObj?.current?.exportToICalendar();
        }
    }

    const getEventData = (): Record<string, any> => {
        const date: Date = scheduleObj?.current?.selectedDate ?? new Date();
        return {
            Id: scheduleObj?.current?.getEventMaxID(),
            Subject: '',
            StartTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours(), 0, 0),
            EndTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours() + 1, 0, 0),
            Location: '',
            Description: '',
            IsAllDay: false,
            CalendarId: 1
        };
    }

    const onToolbarItemClicked = (args: ClickEventArgs): void => {
        switch (args.item.text) {
            case 'Day':
                setCurrentView(isTimelineView ? 'TimelineDay' : 'Day');
                break;
            case 'Week':
                setCurrentView(isTimelineView ? 'TimelineWeek' : 'Week');
                break;
            case 'WorkWeek':
                setCurrentView(isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek');
                break;
            case 'Month':
                setCurrentView(isTimelineView ? 'TimelineMonth' : 'Month');
                break;
            case 'Year':
                setCurrentView(isTimelineView ? 'TimelineYear' : 'Year');
                break;
            case 'Agenda':
                setCurrentView('Agenda');
                break;
            
                // This is what happend when the New Appointment button is created
            case 'New Appointment':
                const eventData: Record<string, any> = getEventData();
                scheduleObj?.current?.openEditor(eventData, 'Add', true);
                break;
            case 'New Recurring Appointment':
                const recEventData: Record<string, any> = getEventData();
                scheduleObj?.current?.openEditor(recEventData, 'Add', true, 1);
                break;
        }
    }

    useEffect(() => {
        let updatedView: View = currentView;
        switch (currentView) {
            case 'Day':
            case 'TimelineDay':
                updatedView = isTimelineView ? 'TimelineDay' : 'Day';
                break;
            case 'Week':
            case 'TimelineWeek':
                updatedView = isTimelineView ? 'TimelineWeek' : 'Week';
                break;
            case 'WorkWeek':
            case 'TimelineWorkWeek':
                updatedView = isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                break;
            case 'Month':
            case 'TimelineMonth':
                updatedView = isTimelineView ? 'TimelineMonth' : 'Month';
                break;
            case 'Year':
            case 'TimelineYear':
                updatedView = isTimelineView ? 'TimelineYear' : 'Year';
                break;
            case 'Agenda':
                updatedView = 'Agenda';
                break;
        }
        if (scheduleObj.current) {
            scheduleObj.current.currentView = updatedView;
        }
    }, [isTimelineView]);

    const onChange = (args: SwitchEventArgs) => {
        if (args.checked) {
            setIsTimelineView(args.checked);
        }
    }

    const timelineTemplate = () => {
        return (
            <div className='template'>
                <div className='icon-child'>
                    <CheckBoxComponent id='timeline_views' checked={false} change={onChange}/>
                </div>
                <div className='text-child'>Timeline Views</div>
            </div>
        );
    }

    const groupTemplate = () => {
        return (
            <div className='template'>
                <div className='icon-child'>
                    <CheckBoxComponent id='grouping' checked={true} change={(args: SwitchEventArgs) => {
                        if (scheduleObj.current) {
                            scheduleObj.current.group.resources = args.checked ? ['Calendars'] : [];
                        }
                    }}/>
                </div>
                <div className='text-child'>Grouping</div>
            </div>
        );
    }

    const gridlineTemplate = () => {
        return (
            <div className='template'>
                <div className='icon-child'>
                    <CheckBoxComponent id='timeSlots' checked={true} change={(args: SwitchEventArgs) => {
                        if (scheduleObj.current) {
                            scheduleObj.current.timeScale.enable = args.checked as boolean;
                        }
                    }}/>
                </div>
                <div className='text-child'>Gridlines</div>
            </div>
        );
    }

    const autoHeightTemplate = () => {
        return (
            <div className='template'>
                <div className='icon-child'>
                    <CheckBoxComponent id='row_auto_height' checked={false} change={(args: SwitchEventArgs) => {
                        if (scheduleObj.current) {
                            scheduleObj.current.rowAutoHeight = args.checked as boolean;
                        }
                    }}/>
                </div>
                <div className='text-child'>Row Auto Height</div>
            </div>
        );
    }

    const getDateHeaderDay = (value: Date): string => {
        return intl.formatDate(value, {skeleton: 'E'});
    }
    const getDateHeaderDate = (value: Date): string => {
        return intl.formatDate(value, {skeleton: 'd'});
    }

    const dateHeaderTemplate = (props: { date: Date; }) => {
        return (
            <Fragment>
                <div>{getDateHeaderDay(props.date)}</div>
                <div>{getDateHeaderDate(props.date)}</div>
            </Fragment>
        );
    }

    const onResourceChange = (args: MultiSelectChangeEventArgs): void => {
        let resourcePredicate: Predicate & any;
        for (let value of args.value) {
            if (resourcePredicate) {
                resourcePredicate = resourcePredicate.or(new Predicate('CalendarId', 'equal', value));
            } else {
                resourcePredicate = new Predicate('CalendarId', 'equal', value);
            }
        }
        if (scheduleObj.current?.resources[0]) {
            scheduleObj.current.resources[0].query = resourcePredicate ? new Query().where(resourcePredicate) : new Query().where('CalendarId', 'equal', 1);
        }
    }

    // THIS GENERATES THE DUMMY DATA FOR THE CALENDAR SEE pushAppointmentData() for custom dummy events
    let generateEvents = (): Record<string, any>[] => {
        let eventData: Record<string, any>[] = [];
        let eventSubjects: string[] = [
            'Doctor Appointment'
        ];
        let weekDate: Date = new Date(new Date().setDate(new Date().getDate() - new Date().getDay()));
        let startDate: Date = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 10, 0);
        let endDate: Date = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 11, 30);
        eventData.push({
            Id: 1,
            Subject: eventSubjects[0],
            StartTime: startDate,
            EndTime: endDate,
            Location: '',
            Description: 'Event Scheduled',
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1;COUNT=10;',
            IsAllDay: false,
            IsReadonly: false,
            CalendarId: 1
        });
        for (let a: number = 0, id: number = 2; a < 500; a++) {
            let month: number = Math.floor(Math.random() * (11 - 0 + 1) + 0);
            let date: number = Math.floor(Math.random() * (28 - 1 + 1) + 1);
            let hour: number = Math.floor(Math.random() * (23 - 0 + 1) + 0);
            let minutes: number = Math.floor(Math.random() * (59 - 0 + 1) + 0);
            let start: Date = new Date(new Date().getFullYear(), month, date, hour, minutes, 0);
            let end: Date = new Date(start.getTime());
            end.setHours(end.getHours() + 2);
            let startDate: Date = new Date(start.getTime());
            let endDate: Date = new Date(end.getTime());
            eventData.push({
                Id: id,
                Subject: eventSubjects[Math.floor(Math.random() * (24 - 0 + 1) + 0)],
                StartTime: startDate,
                EndTime: endDate,
                Location: '',
                Description: 'Event Scheduled',
                IsAllDay: id % 10 === 0,
                IsReadonly: endDate < new Date(),
                CalendarId: (a % 4) + 1
            });
            id++;
        }

        let overviewEvents: { [key: string]: Date }[] = extend([], eventData, undefined, true) as {
            [key: string]: Date
        }[];
        let timezone: Timezone = new Timezone();
        let currentTimezone: never = timezone.getLocalTimezoneName() as never;
        for (let event of overviewEvents) {
            if (event.StartTime && event.EndTime) {
                event.StartTime = timezone.convert(event.StartTime, 'UTC', currentTimezone);
                event.EndTime = timezone.convert(event.EndTime, 'UTC', currentTimezone);
            }
        }
        return overviewEvents;
    };

    const createUpload = () => {
        const element = document.querySelector('.calendar-import .e-css.e-btn');
        element?.classList.add('e-inherit');
    }

    const btnClick = () => {
        let settingsPanel: Element = document.querySelector('.overview-content .right-panel') as Element;
        if (settingsPanel.classList.contains('hide')) {
            removeClass([settingsPanel], 'hide');
            workWeekObj?.current?.refresh();
            resourceObj?.current?.refresh();
        } else {
            addClass([settingsPanel], 'hide');
        }
        scheduleObj?.current?.refreshEvents();
    }

    const contextMenuOpen = (args: BeforeOpenCloseMenuEventArgs) => {
        let newEventElement: HTMLElement = document.querySelector('.e-new-event') as HTMLElement;
        if (newEventElement) {
            remove(newEventElement);
            removeClass([document.querySelector('.e-selected-cell') as Element], 'e-selected-cell');
        }
        scheduleObj?.current?.closeQuickInfoPopup();
        let targetElement: HTMLElement = args.event.target as HTMLElement;
        if (closest(targetElement, '.e-contextmenu')) {
            return;
        }
        selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
        if (isNullOrUndefined(selectedTarget)) {
            args.cancel = true;
            return;
        }
        if (selectedTarget.classList.contains('e-appointment')) {
            let eventObj: Record<string, any> = scheduleObj?.current?.getEventDetails(selectedTarget) as Record<string, any>;
            if (eventObj.RecurrenceRule) {
                contextMenuObj?.current?.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                contextMenuObj?.current?.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
            } else {
                contextMenuObj?.current?.showItems(['Save', 'Delete'], true);
                contextMenuObj?.current?.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
            }
            return;
        } else if ((selectedTarget.classList.contains('e-work-cells') || selectedTarget.classList.contains('e-all-day-cells')) &&
            !selectedTarget.classList.contains('e-selected-cell')) {
            removeClass([].slice.call(scheduleObj?.current?.element.querySelectorAll('.e-selected-cell')), 'e-selected-cell');
            selectedTarget.setAttribute('aria-selected', 'true');
            selectedTarget.classList.add('e-selected-cell');
        }
        contextMenuObj?.current?.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
        contextMenuObj?.current?.showItems(['Add', 'AddRecurrence', 'Today'], true);
    }

    const contextMenuSelect = (args: ContextMenuEventArgs) => {
        let selectedMenuItem: string = args.item.id as string;
        let eventObj: Record<string, any> = {};
        if (selectedTarget && selectedTarget.classList.contains('e-appointment')) {
            eventObj = scheduleObj?.current?.getEventDetails(selectedTarget) as Record<string, any>;
        }
        switch (selectedMenuItem) {
            case 'Today':
                if (scheduleObj.current) {
                    scheduleObj.current.selectedDate = new Date();
                }
                break;
            case 'Add':
            case 'AddRecurrence':
                let selectedCells: Element[] = scheduleObj?.current?.getSelectedElements() ?? [];
                let activeCellsData: CellClickEventArgs | undefined = scheduleObj?.current?.getCellDetails(selectedCells.length > 0 ? selectedCells : selectedTarget);

                if (selectedMenuItem === 'Add' && activeCellsData) {
                    scheduleObj?.current?.openEditor(activeCellsData, 'Add');
                } else {
                    if (activeCellsData) {
                        scheduleObj?.current?.openEditor(activeCellsData, 'Add', false, 1);
                    }
                }
                break;
            case 'Save':
            case 'EditOccurrence':
            case 'EditSeries':
                if (selectedMenuItem === 'EditSeries') {
                    let query: Query = new Query().where(scheduleObj?.current?.eventFields.id as string, 'equal', eventObj.RecurrenceID as string | number);
                    eventObj = new DataManager(scheduleObj?.current?.eventsData).executeLocal(query)[0] as Record<string, any>;
                }
                scheduleObj?.current?.openEditor(eventObj, selectedMenuItem);
                break;
            case 'Delete':
                scheduleObj?.current?.deleteEvent(eventObj);
                break;
            case 'DeleteOccurrence':
            case 'DeleteSeries':
                scheduleObj?.current?.deleteEvent(eventObj, selectedMenuItem);
                break;
        }
    }

    const timezoneChange = (args: ChangeEventArgs) => {
        if (scheduleObj.current) {
            scheduleObj.current.timezone = args.value as string;
        }
        updateLiveTime();
        (document.querySelector('.schedule-overview #timezoneBtn') as HTMLElement).innerHTML = '<span class="e-btn-icon e-icons e-time-zone e-icon-left"></span>' + args.itemData.text;
    }

    const weekNumberChange = (args: ChangeEventArgs) => {
        if (args.value == "Off" && scheduleObj.current) {
            scheduleObj.current.showWeekNumber = false;
        } else {
            if (scheduleObj.current) {
                scheduleObj.current.showWeekNumber = true;
                scheduleObj.current.weekRule = args.value as any;
            }
        }
    }

    const tooltipChange = (args: ChangeEventArgs) => {
        if (args.value === "Off" && scheduleObj.current) {
            scheduleObj.current.eventSettings.enableTooltip = false;
        } else {
            if (scheduleObj.current) {
                scheduleObj.current.eventSettings.enableTooltip = true;
            }
        }
    }

    // Get all the appointment data from the database
    const { data, error } = api.appointment.getAllAppointments.useQuery()
    if(error){
        console.log("TRPC CALL ERROR: " + error)
    }
    if(!error){
        console.log("TRPC CALL DATA: " + data)
    }

    // Get all the appointment patients names from the database
    function getNames(patientId:number){
        const { data: patientName, error: patientError } = api.appointment.getPatient.useQuery({input: patientId})
        if(patientError){
        console.log("TRPC CALL ERROR: " + patientError)
        }
    }


    let pushAppointmentData = (): Record<string, any>[] => {
        let eventData: Record<string, any>[] = [];
        let weekDate: Date = new Date(new Date().setDate(new Date().getDate() - new Date().getDay())); // THis gets the current date
        


        // Example of how to push an appointment
        // eventData.push(
        //     {
        //         Id: 1,
        //         Subject: 'TEST SUBJECT',
        //         StartTime: new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 10, 0),
        //         EndTime: new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 11, 30),
        //         Location: '123 Main St, Atlanta, GA 30303',
        //         Description: 'Appointment regarding patient checkup and health status',
        //         RecurrenceRule: '',
        //         IsAllDay: false,
        //         IsReadonly: false,
        //         CalendarId: 1,
        //         DoctorID: 1 // THIS WILL BE THE DOCTORS ID
        //     }
        // );



        if(data){
            data.map((currentAppointment, index) => {
                console.log(JSON.stringify(currentAppointment));
                eventData.push(
                    {
                        Id: currentAppointment.id,
                        Subject: currentAppointment.patientId.toString(),
                        StartTime: currentAppointment.startTime,
                        EndTime: currentAppointment.endTime,
                        // Location: currentAppointment.location,
                        Description: currentAppointment.subject,
                        RecurrenceRule: '',
                        IsAllDay: false,
                        IsReadonly: false,
                        CalendarId: 1,
                        DoctorID: currentAppointment.doctorId
                    }
                )
            })
        }
        

        // for (let i: number = 0; i < appointmentsList.length; i++) {
        //     const appointment = appointmentsList[i];
        //     if (appointment !== undefined) {
        //         eventData.push(appointment);
        //     }
        // }

        
          

        let overviewEvents: { [key: string]: Date }[] = extend([], eventData, undefined, true) as {
            [key: string]: Date
        }[];
        let timezone: Timezone = new Timezone();
        let currentTimezone: never = timezone.getLocalTimezoneName() as never;
        for (let event of overviewEvents) {
            if (event.StartTime && event.EndTime) {
                event.StartTime = timezone.convert(event.StartTime, 'UTC', currentTimezone);
                event.EndTime = timezone.convert(event.EndTime, 'UTC', currentTimezone);
            }
        }
        return overviewEvents;
    };


    return (
        <div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='content-wrapper'>
                    <div className='schedule-overview'>
                        {/* We may need this later */}
                        {/* <AppBarComponent colorMode="Primary"> */}


                        <div className='flex-row justify-between bg-n-6 m-5 hidden'>
                            <div className=' flex justify-center w-48 '>
                                <div className='rounded-lg border-2 border-n-4 flex justify-center items-center w-56'>
                                    <span id="timezoneBtn" className="time pr-2">UTC</span>
                                    <span className="time e-icons e-clock "></span>
                                    <span id="timeBtn" className="time current-time p-1" ref={timeBtn}></span>
                                </div>
                            </div>

                            <div className='flex flex-row'>
                                <div className='rounded-lg border-2 border-n-4 flex justify-center items-center p-3'>
                                    <div className='control-panel calendar-export'>
                                        <ButtonComponent id='printBtn' cssClass='title-bar-btn e-inherit'
                                                         iconCss='e-icons e-print' onClick={(onPrint)} content='Print'/>
                                    </div>
                                    <div className='control-panel calendar-export'>
                                        <DropDownButtonComponent id='exportBtn' content='Export'
                                                                 cssClass='title-bar-btn e-inherit' items={exportItems}
                                                                 select={onExportClick} className='bg-white'/>
                                    </div>
                                    <ButtonComponent id='settingsBtn' cssClass='overview-toolbar-settings e-inherit'
                                                     iconCss='e-icons e-settings' iconPosition='Top' content=''
                                                     onClick={btnClick}/>
                                </div>
                            </div>
                        </div>


                        {/* </AppBarComponent> */}
                        <ToolbarComponent id='toolbarOptions' cssClass='overview-toolbar' width='100%' height={40}
                                          overflowMode='Scrollable' scrollStep={100}
                                          created={() => liveTimeInterval = setInterval(() => {
                                              updateLiveTime();
                                          }, 1000)} clicked={onToolbarItemClicked}>
                            <ItemsDirective>
                                <ItemDirective prefixIcon='e-icons e-plus' tooltipText='New Appointment'
                                               text='New Appointment' tabIndex={0}/>
                                <ItemDirective prefixIcon='e-icons e-repeat' tooltipText='New Recurring Appointment'
                                               text='New Recurring Appointment' tabIndex={0}/>
                                <ItemDirective type='Separator'/>
                                <ItemDirective prefixIcon='e-icons e-day' tooltipText='Day' text='Day' tabIndex={0}/>
                                <ItemDirective prefixIcon='e-icons e-week' tooltipText='Week' text='Week' tabIndex={0}/>
                                <ItemDirective prefixIcon='e-icons e-week' tooltipText='WorkWeek' text='WorkWeek'
                                               tabIndex={0}/>
                                <ItemDirective prefixIcon='e-icons e-month' tooltipText='Month' text='Month'
                                               tabIndex={0}/>
                                <ItemDirective prefixIcon='e-icons e-month' tooltipText='Year' text='Year'
                                               tabIndex={0}/>
                                <ItemDirective prefixIcon='e-icons e-agenda-date-range' tooltipText='Agenda'
                                               text='Agenda' tabIndex={0}/>
                            </ItemsDirective>
                        </ToolbarComponent>
                        <div className='overview-content'>
                            <div className='left-panel'>
                                <div className='overview-scheduler'>
                                    <ScheduleComponent 
                                        id='scheduler'
                                        cssClass='schedule-overview' 
                                        ref={scheduleObj}
                                        width='100%' 
                                        height='100%' 
                                        currentView={currentView}
                                        group={{resources: ['Calendars']}} 
                                        timezone='UTC'  
                                        eventSettings={{dataSource: pushAppointmentData()}}
                                        dateHeaderTemplate={dateHeaderTemplate}
                                    >
                                        <ResourcesDirective>
                                            <ResourceDirective 
                                                field='CalendarId' 
                                                title='Calendars' 
                                                name='Calendars'
                                                dataSource={calendarCollections}
                                                query={new Query().where('CalendarId', 'equal', 1)}
                                                textField='CalendarText' 
                                                idField='CalendarId'
                                                allowMultiple={true} 
                                                colorField='CalendarColor'/>
                                        </ResourcesDirective>
                                        <ViewsDirective>
                                            <ViewDirective option='Day' startHour='08:00' endHour='18:00'/>
                                            <ViewDirective option='Week' startHour='08:00' endHour='18:00'/>
                                            <ViewDirective option='WorkWeek'/>
                                            <ViewDirective option='Month'/>
                                            <ViewDirective option='Year'/>
                                            <ViewDirective option='Agenda'/>
                                        </ViewsDirective>
                                        <Inject
                                            services={[Day, Week, WorkWeek, Month, Year, Agenda, DragAndDrop, Resize, Print, ExcelExport, ICalendarImport, ICalendarExport]}/>
                                    </ScheduleComponent>
                                    <ContextMenuComponent id='overviewContextMenu' cssClass='schedule-context-menu'
                                                          ref={contextMenuObj} target='.e-schedule'
                                                          items={contextMenuItems} beforeOpen={contextMenuOpen}
                                                          select={contextMenuSelect}/>
                                </div>
                            </div>
                            <div className='right-panel hide bg-green-600'>
                                <div className='control-panel e-css'>

                                    {/* WE MIGHT WANT TO KEEP THIS, ITS THE CODE FOR THE SETTINGS DROPDOWN */}

                                    {/* <div className='col-row '>
                    <div className='col-left '>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Calendar</label>
                    </div>
                    <div className='col-right'>
                      <MultiSelectComponent id="resources" cssClass='schedule-resource' ref={resourceObj} dataSource={calendarCollections as Record<string, any>[]} mode='CheckBox' fields={{ text: 'CalendarText', value: 'CalendarId' }} enableSelectionOrder={false} showClearButton={false} showDropDownIcon={true} popupHeight={300} value={[1]} change={onResourceChange}>
                        <Inject services={[CheckBoxSelection]} />
                      </MultiSelectComponent>
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>First Day of Week</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="weekFirstDay" dataSource={weekDays} fields={{ text: 'text', value: 'value' }} value={0} popupHeight={400} change={(args: ChangeEventArgs) => { scheduleObj.current.firstDayOfWeek = args.value as number; }} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Work week</label>
                    </div>
                    <div className='col-right'>
                      <MultiSelectComponent id="workWeekDays" cssClass='schedule-workweek' ref={workWeekObj} dataSource={weekDays} mode='CheckBox' fields={{ text: 'text', value: 'value' }} enableSelectionOrder={false} showClearButton={false} showDropDownIcon={true} value={[1, 2, 3, 4, 5]} change={(args: MultiSelectChangeEventArgs) => scheduleObj.current.workDays = args.value as number[]}>
                        <Inject services={[CheckBoxSelection]} />
                      </MultiSelectComponent>
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Timezone</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="timezone" dataSource={timezoneData} fields={{ text: 'text', value: 'value' }} value='Etc/GMT' popupHeight={150} change={timezoneChange} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Day Start Hour</label>
                    </div>
                    <div className='col-right'>
                      <TimePickerComponent id='dayStartHour' showClearButton={false} value={new Date(new Date().setHours(0, 0, 0))} change={(args: TimeEventArgs) => scheduleObj.current.startHour = intl.formatDate(args.value as Date, { skeleton: 'Hm' })} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Day End Hour</label>
                    </div>
                    <div className='col-right'>
                      <TimePickerComponent id='dayEndHour' showClearButton={false} value={new Date(new Date().setHours(23, 59, 59))} change={(args: TimeEventArgs) => scheduleObj.current.endHour = intl.formatDate(args.value as Date, { skeleton: 'Hm' })} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Work Start Hour</label>
                    </div>
                    <div className='col-right'>
                      <TimePickerComponent id='workHourStart' showClearButton={false} value={new Date(new Date().setHours(9, 0, 0))} change={(args: TimeEventArgs) => scheduleObj.current.workHours.start = intl.formatDate(args.value as Date, { skeleton: 'Hm' })} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Work End Hour</label>
                    </div>
                    <div className='col-right'>
                      <TimePickerComponent id='workHourEnd' showClearButton={false} value={new Date(new Date().setHours(18, 0, 0))} change={(args: TimeEventArgs) => scheduleObj.current.workHours.end = intl.formatDate(args.value as Date, { skeleton: 'Hm' })} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Slot Duration</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="slotDuration" dataSource={majorSlotData} fields={{ text: 'Name', value: 'Value' }} value={60} popupHeight={150} change={(args: ChangeEventArgs) => { scheduleObj.current.timeScale.interval = args.value as number; }} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Slot Interval</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="slotInterval" dataSource={minorSlotData} value={2} popupHeight={150} change={(args: ChangeEventArgs) => { scheduleObj.current.timeScale.slotCount = args.value as number; }} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Time Format</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="timeFormat" dataSource={timeFormatData} fields={{ text: 'Name', value: 'Value' }} value={"hh:mm a"} popupHeight={150} change={(args: ChangeEventArgs) => { scheduleObj.current.timeFormat = args.value as any; }} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Week Numbers</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="weekNumber" dataSource={weekNumberData} fields={{ text: 'Name', value: 'Value' }} value={"Off"} popupHeight={150} change={weekNumberChange} />
                    </div>
                  </div>
                  <div className='col-row'>
                    <div className='col-left'>
                      <label style={{ lineHeight: '34px', margin: '0' }}>Tooltip</label>
                    </div>
                    <div className='col-right'>
                      <DropDownListComponent id="tooltip" dataSource={tooltipData} fields={{ text: 'Name', value: 'Value' }} value={"Off"} popupHeight={150} change={tooltipChange} />
                    </div>
                  </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Overview;