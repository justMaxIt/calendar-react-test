import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Style.css";
import Navbar from "./Navbar";
import Shedule from "./Shedule";

const url = "http://api.tvmaze.com/schedule?country=US&date=";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  let searchDate = date.toISOString().slice(0, 10);
  useEffect(() => {
    fetch(`${url}${searchDate}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, [searchDate]);
  console.log(data);

  const onChange = (newDate) => {
    setDate(newDate);
    setToggle(true);
  };

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      {!toggle ? (
        <div className="main">
          <div className="middle">
            <img src={""} alt={"img"} />
            For a list of serials, please choose a necessary month and day
          </div>
          <Calendar
            onChange={onChange}
            value={date}
            view={"month"}
            calendarType={"US"}
            className={"calendar"}
            navigationLabel={({ date }) => {
              return `${date.toLocaleDateString()}`;
            }}
            next2Label={null}
            prev2Label={null}
          />
        </div>
      ) : (
        <Shedule data={data} date={date} />
      )}{" "}
    </>
  );
};

export default CalendarContainer;
