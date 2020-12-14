import React from "react";
import ContentButton from "./ContentButton";
import Serial from "./Serial";
import "./Style.css";

const Shedule = (props) => {
  const { setSerialAmount, data, fullDate, serialAmount, setToggle } = props;
  console.log(props.data);
  return (
    <>
      <div className="shedule">
        <div className="shedule-day" onClick={() => setToggle(false)}>
          {fullDate}
        </div>

        <ul className="shedule-content">
          {data
            ?.filter((e, ind) => ind <= serialAmount)
            .map((el) => (
              <Serial key={el.id} el={el} />
            ))}
        </ul>
        <ContentButton
          setSerialAmount={setSerialAmount}
          serialAmount={serialAmount}
          data={data}
        />
      </div>
    </>
  );
};
export default Shedule;
