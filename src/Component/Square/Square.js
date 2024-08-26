import React from "react";
import "../Square/Square.css";
import { squareList } from "../../Utils/Mock/SquareMockData";
import tickmark from "../../Imges/tickmark.svg";

const Square = () => {
  return (
    <>
      <div className="squar_container">
        <div className="heading_btn">
          <h3>Square</h3>
          <button>More</button>
        </div>
        <div className="scroller">
          {/* ========== Follower - list ============ */}

          {squareList.map((item, index) => (
            <div key={index} className="follow_list">
              <div className="img">
                {item.image && (
                  <>
                    <img src={item.image} className="follower_img" />,
                    <img src={tickmark} className="tickmark" />
                  </>
                )}
              </div>
              <div className="title_para">
                <h4>{item.title}</h4>
                <p>{item.description}...</p>
              </div>
              <div className="button">
                <button>Follow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Square;
