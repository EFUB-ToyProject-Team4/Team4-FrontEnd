import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/TweetBox.css";
import Avatar from "@mui/material/Avatar";
import Button from "../ui/Button";
import PhotoIcon from "@mui/icons-material/Photo";
import GifBoxIcon from "@mui/icons-material/GifBox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RoomIcon from "@mui/icons-material/Room";

//트윗 작성 박스
function TweetBox({ tweets, setTweets }) {
  const [tweetContext, setTweetContext] = useState("");
  //입력창에 입력된 텍스트 처리
  const handleOnChange = (e) => {
    setTweetContext(e.target.value);
  };
  //트윗 버튼을 누르면 작성 처리
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const tweetData = {
      accountId: "13",
      comment: tweetContext,
    };

    //post 요청
    try {
      const response = await axios.post(
        "http://43.200.29.180:8080/tweets",
        tweetData
      );
      setTweets([...tweets, response.data]);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    setTweetContext("");
  };

  return (
    <>
      <div className="tweetBox">
        <form onSubmit={handleOnSubmit}>
          <div className="tweetBox_input">
            <Avatar sx={{ width: 55, height: 55 }} />
            <input
              placeholder="What's happening?"
              onChange={handleOnChange}
              value={tweetContext}
              style={{ color: "white" }}
            />
          </div>
          <div className="tweetBox_footer">
            <div className="iconList">
              <PhotoIcon />
              <GifBoxIcon />
              <FormatListBulletedIcon />
              <SentimentSatisfiedAltIcon />
              <CalendarTodayIcon />
              <RoomIcon />
            </div>
            <Button text="Tweet" onClick={handleOnSubmit} />
          </div>
        </form>
      </div>
    </>
  );
}

export default TweetBox;
