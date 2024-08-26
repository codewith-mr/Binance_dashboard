import React, { useState, useEffect } from "react";
import "../../Component/Startandbalance/Startandbalance.css";
import { Verify, Deposit, Trade, Graph } from "../../Imges/Imges";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Startandbalance = ({ visibleBalance, toggleVisibleBalance }) => {
  const [focusedIndex, setFocusedIndex] = useState(2);
  const [images, setImages] = useState(null);
  const [mode, setMode] = useState(false);

  const handleClick = (index) => {
    setFocusedIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
    setImages(index);
    setMode(index);
  };

  useEffect(() => {
    setFocusedIndex(2);
    setImages(2);
    setMode(2);
  }, []);

  return (
    <>
      <div className="main">
        <h5>Get Started</h5>
        <div className=" get_start">
          <div>
            <span className="line"></span>
            <hr />
            <div className="span_bg1">
              <span>1</span>
            </div>
            <div className="span_bg2">
              <span>2</span>
            </div>
            <div className="span_bg3">
              <span>3</span>
            </div>
          </div>

          <div className="box_bg">
            {[1, 2, 3].map((item, index) => (
              <span
                key={index}
                className={focusedIndex === index ? "focused" : ""}
                style={{
                  display: "flex",
                  padding: "20px",
                  position: "relative",
                  gap: "10px",
                }}
                onClick={() => handleClick(index)}
              >
                <span>
                  <h5>
                    {focusedIndex === index
                      ? index === 0
                        ? "Verify Account"
                        : index === 1
                        ? "Complete a Deposit to Start Your Trading Journey on Binance"
                        : "You can start Binance trading journey now"
                      : index === 0
                      ? "Verify Account"
                      : index === 1
                      ? "Deposit"
                      : "Trade"}
                  </h5>
                  <p>
                    {focusedIndex === index
                      ? index === 0
                        ? "Complete identity verification to access all Binance services"
                        : index === 1
                        ? ""
                        : "Recommended entry-level features for beginners."
                      : index === 0
                      ? ""
                      : index === 1
                      ? ""
                      : ""}
                  </p>
                  <p style={{ position: "absolute", bottom: "0" }}>
                    {index === 0 || index === 1 ? (
                      <span
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <FontAwesomeIcon
                          style={{ color: "#0ECB81", fontSize: "16px" }}
                          icon={faCircleCheck}
                          size="xs"
                        />
                        {
                          <p style={{ color: "#848E9C", fontWeight: "600" }}>
                            Completed
                          </p>
                        }
                      </span>
                    ) : (
                      <button className="convert_btn">Convert</button>
                    )}
                  </p>
                </span>
                <span>
                  {images !== null && focusedIndex === index && (
                    <>
                      {index === 0 && (
                        <Verify
                          style={{
                            position: "absolute",
                            right: "0",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        />
                      )}
                      {index === 1 && <Deposit />}
                      {index === 2 && <Trade />}
                    </>
                  )}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="balance">
        <div className="left_child">
          <h5>
            Estimated balance{" "}
            <FontAwesomeIcon
              style={{ color: "#848e9c", fontSize: "16px" }}
              icon={visibleBalance ? faEye : faEyeSlash}
              size="xs"
              className="eye_slash"
              onClick={toggleVisibleBalance}
            />
          </h5>
          <span>
            <h2>{visibleBalance ? "0.00000031" : "********"}</h2>
            <p>BTC</p>
          </span>
          <p>{visibleBalance ? "≈ $0.01965026" : "******"}</p>
          <span>
            <p>Today's PnL </p>
            <p>{visibleBalance ? "- $0.00(3.86%)" : "****"}</p>
          </span>
        </div>
        <div className="right_child">
          <div>
            <button>Deposit</button>
            <button>Withdraw</button>
            <button>Cash In</button>
          </div>
          <Graph />
        </div>
      </div>
    </>
  );
};

export default Startandbalance;
