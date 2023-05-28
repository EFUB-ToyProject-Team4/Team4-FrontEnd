import React from "react";
import "../css/NavBarOption.css";

function NavBarOption({ text, Icon }) {
  return (
    <div className="navBarOption">
      <Icon className="icon" fontSize="large"></Icon>
      <h2>{text}</h2>
    </div>
  );
}

export default NavBarOption;
