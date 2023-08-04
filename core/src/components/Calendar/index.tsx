import { Inject, ScheduleComponent, Day, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule';

interface Props {
    event1: string;
    event2: string;
}

const Calendar: React.FC<Props> = ({event1, event2}) => { 
    return (
        <div>
            <ScheduleComponent>
            <Inject services={[Day, Week, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );
}

export default Calendar;