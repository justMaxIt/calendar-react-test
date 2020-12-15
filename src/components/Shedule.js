import React from "react";
import ContentButton from "./ContentButton";
import Serial from "./Serial";
import "./Style.css";

const Shedule = (props) => {
  const { setToggle, data, fullDate, serialAmount } = props;
  console.log(props.data);
  return (
    <div className="shedule">
      <div className="shedule-day" onClick={() => setToggle(false)}>
        {fullDate}
      </div>

      <div className="shedule-content">
        {data
          ?.filter((e, ind) => ind <= serialAmount)
          .map((el) => (
            <Serial key={el.id} el={el} />
          ))}
      </div>
      <ContentButton
        setSerialAmount={props.setSerialAmount}
        serialAmount={serialAmount}
        data={data}
      />
    </div>
  );
};
export default Shedule;
