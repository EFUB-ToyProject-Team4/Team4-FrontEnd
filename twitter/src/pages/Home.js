import React from "react";
import styled from "styled-components";
import TweetBox from "../components/tweet/TweetBox";
import Tweet from "../components/tweet/Tweet";
import Header from "../components/ui/Header";
import { Link } from "react-router-dom";

//메인 페이지
function Home({ tweets, setTweets }) {
  return (
    <HomePage>
      <Header text="Home" />
      <TweetBox tweets={tweets} setTweets={setTweets} />
      {/* 트윗을 클릭하면 해당 트윗의 상세 페이지로 이동 */}
      {tweets.map((tweet) => (
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
    </HomePage>
  );
}
const HomePage = styled.div`
  width: 70%;
  border-right: 1px solid #26323c;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 850px;
`;

export default Home;
