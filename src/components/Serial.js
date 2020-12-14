import React from "react";
import "./Style.css";
import noPoster from "./../img/no-poster.png";

const Serial = (props) => {
  const { el } = props;
  return (
    <>
      <li>
        <h4>{el.id}</h4>
        <h4>{el.season}</h4>
        <h4>{el.number}</h4>
        <h4>{el.show.name}</h4>
        <h4>{el.show.premiered}</h4>
        {el.show.image ? (
          <img src={el.show.image.medium} alt="img" />
        ) : (
          <img src={noPoster} alt="img" />
        )}
      </li>
    </>
  );
};
export default Serial;
