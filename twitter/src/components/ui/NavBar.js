import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReorderIcon from "@mui/icons-material/Reorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavBarOption from "./NavBarOption";
import styled from "styled-components";
import Modal from "./Modal.js";

function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <NavBarBox>
      <NavBarList>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <NavBarOption Icon={TwitterIcon} />
          <NavBarOption Icon={HomeIcon} text="Home" />
        </Link>
        <Link
          to="/mainprofile"
          style={{ textDecoration: "none", color: "white" }}
        >
          <NavBarOption Icon={AccountBoxIcon} text="Profile" />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <NavBarOption Icon={TagIcon} text="Explore" />
          <NavBarOption Icon={NotificationsNoneIcon} text="Notifications" />
          <NavBarOption Icon={MailOutlineIcon} text="Messages" />
          <NavBarOption Icon={ReorderIcon} text="Lists" />
          <NavBarOption Icon={TurnedInNotIcon} text="Bookmarks" />
        </Link>
        <TweetButton onClick={showModal}>Tweet</TweetButton>
        {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
      </NavBarList>
    </NavBarBox>
  );
}

const NavBarBox = styled.div`
  background-color: #15202b;
  height: 100vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid #26323c;
  min-width: 350px;
`;

const NavBarList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.4em 2.5em;
`;

const TweetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;
  color: white;
  background-color: #1d9bf0;
  border-radius: 3em;
  width: 100%;
  height: 3em;
  margin-top: 1em;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: 100ms ease-out;
  }
`;

export default NavBar;
