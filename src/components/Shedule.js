import React from "react";

import Serial from "./Serial";
const Shedule = (props) => {
  const { data, fullDate } = props;
  console.log(props.data);
  return (
    <>
      <div className="shedule">
        <div>{fullDate}</div>
        <ul className="shedule">
          {data.map((el, ind) => (
            <Serial key={el.id} el={el} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Shedule;
