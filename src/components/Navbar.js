import React from "react";
import "./Style.css";
import { HiOutlineChevronLeft } from "react-icons/hi";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar"></div>

      <div className="navbar-content">
        {props.toggle ? (
          <button onClick={() => props.setToggle(false)}>
            <HiOutlineChevronLeft />
          </button>
        ) : null}
        <div className="navbar-title"> SUPER FILM </div>
      </div>
    </>
  );
};
export default Navbar;
