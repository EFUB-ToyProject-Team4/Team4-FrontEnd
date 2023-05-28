import React from "react";
import "../css/Tweet.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import UploadIcon from "@mui/icons-material/Upload";

//트윗 템플릿
function Tweet({ writerName, tweetId, comment, createdDate }) {
  //받아온 날짜 포맷 변경
  const date = new Date(createdDate);
  const timeOption = { hour: "numeric", minute: "numeric" };
  const formattedTime = date.toLocaleString("en-US", timeOption);

  return (
    <div className="post">
      <div className="postProfile">
        <Avatar sx={{ width: 55, height: 55 }} />
      </div>
      <div className="postBody">
        <div className="postText">
          <div className="postHeader">
            <h3>{writerName}</h3>
            <VerifiedIcon
              fontSize="small"
              className="checkIcon"
              sx={{ color: "#1d9bf0" }}
            ></VerifiedIcon>
            <div className="postHeader_account">@{tweetId}</div>
            <div className="postHeader_time">{formattedTime}</div>
          </div>
          <div className="postDes">{comment}</div>
        </div>
        <div className="postFooter">
          <div className="postFooter_item">
            <ChatBubbleOutlineIcon />
            <span>21</span>
          </div>
          <div className="postFooter_item">
            <RepeatIcon />
            <span>543</span>
          </div>
          <div className="postFooter_item">
            <FavoriteBorderIcon />
            <span>89</span>
          </div>
          <div className="postFooter_item">
            <SignalCellularAltIcon />
            <span>239</span>
          </div>
          <div className="postFooter_item">
            <UploadIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
