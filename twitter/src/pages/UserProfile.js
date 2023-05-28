import React from "react";
import "./css/Profile.css";
import Header from "../components/ui/Header";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import Tweet from "../components/tweet/Tweet";

//메인 유저외의 유저 프로필 페이지
function UserProfile({ tweets }) {
  const onClickArrow = () => {
    window.history.go(-1);
  };
  const { tweet_id } = useParams();

  //해당 유저의 아이디와 일치하는 트윗 찾기
  const findTweetId = tweets.filter(
    (t) => t.tweetId.toString() === tweet_id.toString()
  );
  const tweet = findTweetId[0];

  return (
    <ProfilePage>
      <HeaderWrapper>
        <ArrowBackIcon
          onClick={onClickArrow}
          fontSize="large"
          sx={{ color: "white" }}
        />
        <Header text={tweet.writerName} />
      </HeaderWrapper>
      <ProfileLayout>
        <div className="profileTop">
          <div className="profileBanner">
            <Avatar className="profilePic" sx={{ width: 160, height: 160 }} />
            <div className="profileButton">Follow</div>
          </div>
        </div>
        <div className="profileDes">
          <div className="profileDes_userInfo">
            <div className="profileDes_name">{tweet.writerName}</div>
            <div className="profileDes_id">@{tweet_id}</div>
          </div>
          <div className="profileDes_date">
            <CalendarMonthIcon />
            <div className="profileDes_dateText">Joined May 2023</div>
          </div>
          <div className="profileDes_follow">
            <div className="profileDes_following">10 Following</div>
            <div className="profileDes_followers">24 Followers</div>
          </div>
        </div>
        {/* 해당 유저의 이름과 일치하는 트윗들 찾아서 불러오기 */}
        {tweets
          .filter((t) => t.writerName === tweet.writerName)
          .map((tweet) => (
            <Tweet
              writerName={tweet.writerName}
              comment={tweet.comment}
              createdDate={tweet.createdDate}
              tweetId={tweet.tweetId}
            />
          ))}
      </ProfileLayout>
    </ProfilePage>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1em;
  cursor: pointer;
`;
const ProfilePage = styled.div`
  border-right: 1.5px solid #26323c;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 850px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default UserProfile;
