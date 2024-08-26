import React, { useState } from "react";
import "../Screen/Home.css";
import SlideBar from "../Component/SlideBar/SlideBar.js";
import Main_UserInfo from "../Component/Main_UserInfo/Main_UserInfo";
import Startandbalance from "../Component/Startandbalance/Startandbalance.js";
import MarketDiscover from "../Component/MarketDiscover/MarketDiscover.js";
import Square from "../Component/Square/Square.js";
import Announcement from "../Component/Announcement/Announcement.js";

const Home = () => {
  const [visibleBalance, setVisibleBalance] = useState(false);

  const toggleVisibleBalance = () => {
    setVisibleBalance((prev) => !prev);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "30px" }}>
        <SlideBar className="slider" />
        <div className="container">
          <Main_UserInfo />
          <Startandbalance
            visibleBalance={visibleBalance}
            toggleVisibleBalance={toggleVisibleBalance}
          />
          <MarketDiscover visiblePrivate={visibleBalance} />
          <div className="square_announcement">
            <Square />
            <Announcement />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
