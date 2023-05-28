import React from "react";
import "../css/SideBar.css";

function SideBar() {
  return (
    <div class="sideBar">
      <input placeholder="Search Twitter" type="text" />
      <div className="trends">Trends for you</div>
    </div>
  );
}

export default SideBar;
