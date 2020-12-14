import React from "react";
import "./Style.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const ContentButton = (props) => {
  const { setSerialAmount, serialAmount, data } = props;

  return (
    <>
      {data.length > 2 ? (
        <div className="sheduleButton">
          {serialAmount === 1 ? (
            <button onClick={() => setSerialAmount(data.length - 1)}>
              more {data.length - 2} serials <BsChevronDown />
            </button>
          ) : (
            <button onClick={() => setSerialAmount(1)}>
              show main <BsChevronUp />
            </button>
          )}
        </div>
      ) : (
        <div>
          {data.length === 0 ? (
            <div className="no-serials">no serials</div>
          ) : null}
        </div>
      )}
    </>
  );
};
export default ContentButton;
