import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyle.css";
import Navbar from "./Navbar";

const url = "http://api.tvmaze.com/schedule?country=US&date=";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({});
  let searchDate = date.toISOString().slice(0, 10);
  useEffect(() => {
    fetch(`${url}${searchDate}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, [searchDate]);
  console.log(data);
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
