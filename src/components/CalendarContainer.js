import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Style.css";
import Navbar from "./Navbar";
import Shedule from "./Shedule";
import TVset from "./../img/Tel.png";

const url = "http://api.tvmaze.com/schedule?country=US&date=";

const CalendarContainer = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [serialAmount, setSerialAmount] = useState(1);

  let searchDate = date.toISOString().slice(0, 10);
  const onChange = (newDate) => {
    setDate(newDate);
    setToggle(true);
  };
  let fullDate = convertDate(date);
  function convertDate(date) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Jule",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
    );
  }

  // console.log(fullDate);
  useEffect(() => {
    fetch(`${url}${searchDate}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, [searchDate]);

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      {!toggle ? (
        <div className="main">
          <div className="middle">
            <img src={TVset} alt={"img-TV"} />
            <h4>
              For a list of serials, please, choose a necessary month and day
            </h4>
          </div>
          <Calendar
            onChange={onChange}
            value={date}
            view={"month"}
            calendarType={"US"}
            className={"calendar"}
            navigationLabel={({ date }) => {
              return `${convertDate(date).slice(2, -5)}`;
            }}
            next2Label={null}
            prev2Label={null}
          />
        </div>
      ) : (
        <Shedule
          data={data}
          fullDate={fullDate}
          serialAmount={serialAmount}
          setSerialAmount={setSerialAmount}
          setToggle={setToggle}
        />
      )}{" "}
    </>
  );
};

export default CalendarContainer;
