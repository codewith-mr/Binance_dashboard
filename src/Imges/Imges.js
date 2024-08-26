import React from "react";
import "../Imges/Images.css";
import logo from "../Imges/logo.png";
import profile from "../Imges/profile.png";
import verify from "../Imges/kyc.svg";
import deposit from "../Imges/deposit.svg";
import trade from "../Imges/trade.webp";
import mini_Profile1 from "../Imges/mini_Profile1.png";
import graph from "../Imges/graph.png";

const Logo = () => <img src={logo} alt="Logo" style={{ width: "140px" }} />;

// =========================================

const Profile = () => (
  <img
    src={profile}
    alt="profile"
    style={{ height: "65px", borderRadius: "8px" }}
  />
);

// =========================================

const Verify = () => <img src={verify} alt="img" style={{ height: "140px" }} />;

// =========================================

const Deposit = () => (
  <img src={deposit} alt="img" style={{ height: "140px" }} />
);

// =========================================

const Graph = () => (
  <img src={graph} alt="img" className="graph" style={{ width: "250px" }} />
);

// ==========================================

const Mini_Profile1 = () => (
  <img src={mini_Profile1} alt="img" style={{ height: "28px" }} />
);

// ==========================================

const Trade = () => <img src={trade} alt="img" style={{ height: "140px" }} />;

export {
  Logo,
  Profile,
  Verify,
  Deposit,
  Trade,
  Graph,
  Mini_Profile1,
  // FollowerWithTickmark1,
  // FollowerWithTickmark2,
  // FollowerWithTickmark3,
  // FollowerWithTickmark4,
  // FollowerWithTickmark5,
  // FollowerWithTickmark6,
  // FollowerWithTickmark7,
  // FollowerWithTickmark8,
  // FollowerWithTickmark9,
  // FollowerWithTickmark10,
  // FollowerWithTickmark11,
  // FollowerWithTickmark12,
  // FollowerWithTickmark13,
  // FollowerWithTickmark14,
  // FollowerWithTickmark15,
  // FollowerWithTickmark16,
  // FollowerWithTickmark17,
  // FollowerWithTickmark18,
  // FollowerWithTickmark19,
  // FollowerWithTickmark20,
};
