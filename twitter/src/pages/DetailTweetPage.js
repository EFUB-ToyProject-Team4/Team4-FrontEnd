import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import DetailTweet from "../components/tweet/DetailTweet";

//상세 트윗 페이지
function DetailTweetPage({ tweets }) {
  //화살표를 누르면 이전 화면으로 이동
  const onClickArrow = () => {
    window.history.go(-1);
  };

  //url에 포함된 tweetId 추출
  const { tweetId } = useParams();

  //클릭한 트윗에 해당하는 tweetId 찾기
  const filteredTweets = tweets.filter(
    (tweet) => tweet.tweetId.toString() === tweetId.toString()
  );
  const tweet = filteredTweets[0];

  return (
    <TweetPage>
      <HeaderWrapper>
        <ArrowBackIcon
          onClick={onClickArrow}
          fontSize="large"
          sx={{ color: "white" }}
        />
        <Header text="Tweet" />
      </HeaderWrapper>
      <DetailTweet
        writerName={tweet.writerName}
        comment={tweet.comment}
        createdDate={tweet.createdDate}
        tweetId={tweet.tweetId}
      />
    </TweetPage>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1em;
  cursor: pointer;
`;

const TweetPage = styled.div`
  width: 70%;
  border-right: 1.5px solid #26323c;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  max-width: 850px;
`;

export default DetailTweetPage;
