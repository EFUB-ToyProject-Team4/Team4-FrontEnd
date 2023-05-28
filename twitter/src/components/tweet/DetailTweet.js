import React from "react";
import { useState } from "react";
import "../css/DetailTweet.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "styled-components";
import Button from "../ui/Button";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/Upload";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

//상세 트윗
function DetailTweet({ writerName, comment, tweetId, createdDate }) {
  const [inputValue, setInputValue] = useState("");

  //reply input에 글자 입력하고 제출시 input창 비우기
  const handleOnClick = () => {
    setInputValue("");
  };

  const handleDelete = async () => {
    if (window.confirm("해당 트윗을 삭제하시겠습니까?")) {
      try {
        // 트윗 삭제 요청
        await axios.delete(
          `http://43.200.29.180:8080/tweets/${tweetId}?accountId=13`
        );
        window.history.go(-1);
        window.location.reload();
      } catch (error) {
        console.error("Delete error", error);
      }
      alert("삭제되었습니다");
    } else {
      alert("취소합니다.");
    }
  };

  //받아온 날짜 포맷 변경
  const date = new Date(createdDate);
  const timeOption = { hour: "numeric", minute: "numeric" };
  const formattedTime = date.toLocaleString("en-US", timeOption);

  const dateOption = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleString("en-US", dateOption);

  return (
    <TweetWrapper>
      <div className="tweetHeader">
        <Link to={`/userprofile/${tweetId}`}>
          <Avatar sx={{ width: 55, height: 55 }} />
        </Link>
        <div className="tweet_userHeader">
          <div className="tweet_userInfo">
            <div className="tweet_userName">{writerName}</div>
            <div className="tweet_userId">@{tweetId}</div>
          </div>
          <MoreHorizIcon fontSize="large" onClick={handleDelete} />
        </div>
      </div>
      <div className="tweetText">
        <div className="tweetText_main">{comment}</div>
        <div className="tweetText_translate">Translate Tweet</div>
      </div>
      <div className="postImg">
        <img src="https://www.veritas-a.com/news/photo/202212/441965_350896_1455.jpg"></img>
      </div>
      <div className="tweetFooter">
        <div className="tweetTime">{formattedTime}</div>
        <div className="tweetDate">{formattedDate}</div>
        <div className="tweetViews">12 views</div>
      </div>
      <div className="tweetAna">
        <BarChartIcon />
        <div className="tweetAna_text">View Tweet analytics</div>
      </div>
      <div className="tweet_itemBox">
        <ChatBubbleOutlineIcon fontSize="large" />
        <RepeatIcon fontSize="large" />
        <FavoriteBorderIcon fontSize="large" />
        <TurnedInNotIcon fontSize="large" />
        <UploadIcon fontSize="large" />
      </div>
      <div className="tweetReply">
        <Avatar sx={{ width: 55, height: 55 }} />
        <input
          className="tweetReply_input"
          placeholder="Tweet your reply!"
          style={{ color: "white" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button text="Reply" onClick={handleOnClick} />
      </div>
    </TweetWrapper>
  );
}

const TweetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-top: 1em;
  font-size: 1em;
  color: #66727e;
`;
export default DetailTweet;
