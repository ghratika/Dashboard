import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => (
  <div>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      events={[
        { title: 'Event 1', date: '2024-06-01' },
        { title: 'Event 2', date: '2024-06-02' },
      ]}
    />
  </div>
);

export default Calendar;
