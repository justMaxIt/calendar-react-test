import React from "react";

const Shedule = (props) => {
  const { data, date } = props;
  console.log(props.date);
  return (
    <>
      <div>
        <div>{date.toString()}</div>
        <ul className="shedule">
          {data.map((el, ind) => (
            <li key={el.id}>
              <span>
                <h4>{el.season}</h4>
                <h4>{el.number}</h4>
                <h4>{el.show.name}</h4>
                <h4>{el.show.premiered}</h4>
                <img src={el.show.image.medium} alt="img" />
              </span>
            </li>
          ))}
        </ul>

        {/* {data[0].id} */}
      </div>
    </>
  );
};
export default Shedule;
