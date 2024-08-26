import React, { useState } from "react";
import "../SlideBar/SlideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faFolderClosed,
  faFileCircleCheck,
  faTicket,
  faUserPlus,
  faUser,
  faUsersLine,
  faGear,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const SlideBar = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [thirdpartyWallet, setThirdpartyWallet] = useState(false);
  const [mode, setMode] = useState(true);

  // ======== DropDown 1 =========

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  // ======== DropDown 2 =========

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  // ======== DropDown 3 =========

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };

  // ======== DropDown 3 =========

  const thirdpartyOptions = () => {
    setThirdpartyWallet(!thirdpartyWallet);
  };

  // ========== mode ==============

  return (
    <>
      <div className="slide">
        <p>
          <button>
            <FontAwesomeIcon icon={faHouseChimney} size="sm" /> Dashboard
          </button>
        </p>
        <p>
          <button className="link_btn" onClick={toggleDropdown1}>
            <FontAwesomeIcon icon={faFolderClosed} size="sm" />
            Assets
            <FontAwesomeIcon
              icon={showDropdown1 ? faChevronUp : faChevronDown}
              size="xs"
            />
          </button>
        </p>
        {showDropdown1 && (
          <div className="dropdown-options">
            <button className="dropdown-option">Overview</button>
            <button className="dropdown-option">Sport</button>
            <button className="dropdown-option">Margin</button>
            <button className="dropdown-option">Futures</button>
            <button className="dropdown-option">Options</button>
            <button className="dropdown-option">Trading Bots</button>
            <button className="dropdown-option">Earn</button>
            <button className="dropdown-option">Funding</button>
            <button className="dropdown-option">Copy Trading</button>
            <button onClick={thirdpartyOptions} className="dropdown-option">
              Third-party Wallet
              <FontAwesomeIcon
                className="third_party_dropDown"
                icon={thirdpartyWallet ? faChevronUp : faChevronDown}
                size="xs"
              />
            </button>
          </div>
        )}
        {thirdpartyWallet && (
          <div className="dropdown-options">
            <button className="dropdown-option">Binance TR</button>
            <button className="dropdown-option">Tokocrypto</button>
          </div>
        )}
        <p>
          <button className="link_btn" onClick={toggleDropdown2}>
            <FontAwesomeIcon icon={faFileCircleCheck} size="sm" />
            Orders
            <FontAwesomeIcon
              icon={showDropdown2 ? faChevronUp : faChevronDown}
              size="xs"
            />
          </button>
        </p>
        {showDropdown2 && (
          <div className="dropdown-options">
            <button className="dropdown-option">Spot Order</button>
            <button className="dropdown-option">P2P Order</button>
            <button className="dropdown-option">Transaction History</button>
            <button className="dropdown-option">Payment History</button>
          </div>
        )}
        <p>
          <button>
            <FontAwesomeIcon icon={faTicket} size="sm" />
            Rewards Hub
          </button>
        </p>
        <p>
          <button>
            <FontAwesomeIcon icon={faUserPlus} size="sm" />
            Referral
          </button>
        </p>
        <p>
          <button className="link_btn" onClick={toggleDropdown3}>
            <FontAwesomeIcon icon={faUser} size="sm" />
            Account
            <FontAwesomeIcon
              icon={showDropdown3 ? faChevronUp : faChevronDown}
              size="xs"
            />
          </button>
        </p>
        {showDropdown3 && (
          <div className="dropdown-options">
            <button className="dropdown-option">Identification</button>
            <button className="dropdown-option">Security</button>
            <button className="dropdown-option">Payment</button>
            <button className="dropdown-option">API Management</button>
            <button className="dropdown-option">Account Statement</button>
            <button className="dropdown-option">Financial Reports</button>
          </div>
        )}
        <p>
          <button>
            <FontAwesomeIcon icon={faUsersLine} size="sm" />
            Sub Accounts
          </button>
        </p>
        <p>
          <button>
            <FontAwesomeIcon icon={faGear} size="sm" />
            Settings
          </button>
        </p>
      </div>
    </>
  );
};

export default SlideBar;
