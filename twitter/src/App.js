import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/ui/NavBar";
import Home from "./pages/Home";
import SideBar from "./components/ui/SideBar";
import MainProfile from "./pages/MainProfile";
import DetailTweetPage from "./pages/DetailTweetPage";
import UserProfile from "./pages/UserProfile";
import axios from "axios";

function App() {
  //로딩 여부 설정
  const [isLoading, setIsLoading] = useState(true);
  //메인 사용자 정보
  const [mainUser, setMainUser] = useState([]);
  //사용자 정보
  const [user, setUser] = useState([]);
  //전체 트윗 데이터
  const [tweets, setTweets] = useState([]);

  const getMainUser = async () => {
    try {
      const response = await axios.get("http://43.200.29.180:8080/accounts/13");
      setMainUser(response.data);
    } catch (e) {
      console.log("Main User Error", e);
    }
  };

  useEffect(() => {
    getMainUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://43.200.29.180:8080/accounts/11/tweets"
      );
      setUser(response.data);
    } catch (e) {
      console.log("User error", e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getTweets = async () => {
    try {
      const response = await axios.get("http://43.200.29.180:8080/tweets");
      setTweets(response.data);
      console.log(response.data);
    } catch (e) {
      console.log("Tweets Error", e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <Wrapper>
      {isLoading ? "Loading..." : " "}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home tweets={tweets} setTweets={setTweets} />}
        />
        <Route
          path="/mainprofile"
          element={<MainProfile mainUser={mainUser} tweets={tweets} />}
        />
        <Route
          path="/userprofile/:tweet_id"
          element={<UserProfile tweets={tweets} />}
        />
        <Route
          path="/tweets/:tweetId"
          element={<DetailTweetPage tweets={tweets} />}
        />
      </Routes>
      <SideBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  background-color: #15202b;
`;

export default App;
