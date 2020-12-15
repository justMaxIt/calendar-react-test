import React from "react";
import "./Style.css";
import SerialImage from "./SerialImage";

const Serial = (props) => {
  const { el } = props;
  return (
    <div className="serial">
      <SerialImage el={el} />
      <div className="serial-content">
        <div className="serial-name">{el.show.name}</div>
        <div className="serial-premiered">
          {el.show.premiered.slice(0, 4)}
          {el.show.status === "Running" ? " - ..." : null}
        </div>
        <div className="serial-series">
          <span>Season: {el.season}</span>
          <span>Episode: {el.number}</span>
        </div>
      </div>
    </div>
  );
};
export default Serial;
