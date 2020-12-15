import React from "react";
import "./Style.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const ContentButton = (props) => {
  const { setSerialAmount, serialAmount, data } = props;

  return (
    <div className="content-but">
      {data.length > 2 ? (
        <div className="content-button">
          {serialAmount === 1 ? (
            <button onClick={() => setSerialAmount(data.length - 1)}>
              {data.length - 2} more serials{" "}
              <span>
                <BsChevronDown />
              </span>
            </button>
          ) : (
            <button onClick={() => setSerialAmount(1)}>
              Show main{" "}
              <span>
                <BsChevronUp />
              </span>
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
    </div>
  );
};
export default ContentButton;
