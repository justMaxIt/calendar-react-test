import React, { useState } from "react";
import "./Style.css";
import noPoster from "./../img/no-poster.png";

const SerialImage = (props) => {
  const { el } = props;
  const [imageSize, setImageSize] = useState(el.show.image?.medium);

  return (
    <div className="serial-image">
      {el.show.image ? (
        <img
          className={`serial-image-${imageSize.slice(40, 46)}`}
          src={imageSize}
          alt="img"
          onClick={() => {
            setImageSize(el.show.image.original);
          }}
        />
      ) : (
        <img className="serial-image-medium" src={noPoster} alt="img" />
      )}
    </div>
  );
};
export default SerialImage;
