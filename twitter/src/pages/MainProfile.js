import React from "react";
import Header from "../components/ui/Header";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./css/Profile.css";
import { Link } from "react-router-dom";
import Tweet from "../components/tweet/Tweet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//메인 유저의 프로필 페이지
function MainProfile({ mainUser, tweets }) {
  //화살표를 클릭하면 이전 페이지로 이동

  const onClickArrow = () => {
    window.history.go(-1);
  };

  return (
    <ProfilePage>
      <HeaderWrapper>
        <ArrowBackIcon
          onClick={onClickArrow}
          fontSize="large"
          sx={{ color: "white" }}
        />
        <Header text="Profile" />
      </HeaderWrapper>
      <ProfileLayout>
        <div className="profileTop">
          <div className="profileBanner">
            <Avatar className="profilePic" sx={{ width: 160, height: 160 }} />
            <div className="profileButton">Edit Profile</div>
          </div>
        </div>
        <div className="profileDes">
          <div className="profileDes_userInfo">
            <div className="profileDes_name">{mainUser.username}</div>
            <div className="profileDes_id">{mainUser.userId}</div>
          </div>
          <div className="profileDes_date">
            <CalendarMonthIcon />
            <div className="profileDes_dateText">Joined May 2023</div>
          </div>
          <div className="profileDes_follow">
            <div className="profileDes_following">2 Following</div>
            <div className="profileDes_followers">3 Followers</div>
          </div>
        </div>
        {/* 메인 유저가 작성한 트윗들 모아보기 */}
        {/* 메인 유저가 작성한 트윗을 클릭하면 해당 트윗의 상세 페이지로 이동 */}
        {tweets
          .filter((find) => find.writerName === mainUser.username)
          .map((tweet) => (
            <Link
              to={`/tweets/${tweet.tweetId}`}
              key={tweet.tweetId}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Tweet
                writerName={tweet.writerName}
                comment={tweet.comment}
                createdDate={tweet.createdDate}
                tweetId={tweet.tweetId}
              />
            </Link>
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

export default MainProfile;
