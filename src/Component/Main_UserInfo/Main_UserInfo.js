import React from "react";
import "../Main_UserInfo/Main_UserInfo.css";
import { Profile } from "../../Imges/Imges";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faSquareXmark,
  faCopy,
  faChevronCircleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Main_UserInfo = () => {
  return (
    <>
      <div className="container main_profile">
        <div className="row">
          <div>
            <Profile />
            <div className="user_txt">
              User-24d2a
              <div>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} size="xs" />
                </span>
                <span>
                  <FontAwesomeIcon icon={faSquareXmark} size="xs" />
                </span>
              </div>
            </div>
            <hr className="hr" />
            <div className="right_side">
              <div className="icon">
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
              <div>
                <span>User ID</span>
                <h6>
                  756867579
                  <FontAwesomeIcon icon={faCopy} size="sx" className="copy" />
                  {/* <span>Click to copy</span> */}
                </h6>
              </div>
              <div>
                <span>VIP Level</span>
                <h6>
                  Regular User
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    size="xs"
                    className="right-arrow"
                  />
                </h6>
              </div>
              <div>
                <span>User Type</span>
                <h6>Personal</h6>
              </div>
              <div>
                <span>Following</span>
                <h6>0</h6>
              </div>
              <div>
                <span>Followers</span>
                <h6>
                  0{" "}
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    size="xs"
                    className="right-arrow"
                  />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_UserInfo;
