import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyle.css";
import Navbar from "./Navbar";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   fetch(`${api}${page}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((error) => console.error(error));
  // }, [page]);

  const onChange = (newDate) => setDate(newDate);

  return (
    <div className="cal">
      <Navbar />
      <div className="middle">
        <img src={""} alt={"img"} />
        For a list of serials, please choose a necessary month and day
      </div>
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
