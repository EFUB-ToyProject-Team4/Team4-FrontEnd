import React from "react";
import { Avatar } from "@mui/material";
import Button from "./Button";
import PhotoIcon from "@mui/icons-material/Photo";
import GifBoxIcon from "@mui/icons-material/GifBox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RoomIcon from "@mui/icons-material/Room";
import "../css/Modal.css";

function Modal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="modalBackground">
      <div className="modalBox">
        <div className="modalHeader">
          <div className="modalExit" onClick={closeModal}>
            X
          </div>
        </div>
        <div className="modalWrapper">
          <Avatar sx={{ width: 55, height: 55 }}></Avatar>
          <div className="modalBody">
            <div className="modalText">
              <input
                className="modalInput"
                placeholder="What is happening?!"
                style={{ color: "white" }}
              ></input>
            </div>
            <div className="modalFooter">
              <div className="modalFooter_iconList">
                <PhotoIcon />
                <GifBoxIcon />
                <FormatListBulletedIcon />
                <SentimentSatisfiedAltIcon />
                <CalendarTodayIcon />
                <RoomIcon />
              </div>
              <Button text="Tweet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
