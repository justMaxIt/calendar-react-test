import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./../App.css";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <div className="d">
      <Calendar
        onChange={onChange}
        value={date}
        calendarType={"US"}
        className="calendar"
        defaultView={"month"}
        navigationLabel={({ date }) => {
          return `${date.toLocaleDateString()}`;
        }}
        view={"month"}
        // formatYear={() => null}
        next2Label={null}
        prev2Label={null}
        // showDoubleView={true}
      />
    </div>
  );
};

export default CalendarContainer;
