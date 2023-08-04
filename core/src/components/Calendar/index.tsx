// "use client";
import React from 'react';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const Calendar: React.FC = () => { 
    return (
        <div>
            <ScheduleComponent>
            <Inject services={[Day, Week, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );
}

export default Calendar;
