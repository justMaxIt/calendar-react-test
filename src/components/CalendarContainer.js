import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyle.css";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <div className="cal">
      <Calendar
        onChange={onChange}
        value={date}
        view={"month"}
        calendarType={"US"}
        className="calendar"
        navigationLabel={({ date }) => {
          return `${date.toLocaleDateString()}`;
        }}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
};

export default CalendarContainer;
