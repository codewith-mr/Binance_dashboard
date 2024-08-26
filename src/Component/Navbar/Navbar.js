import React, { useState } from "react";
import "../Navbar/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faFolderClosed,
  faDownload,
  faGlobe,
  faMoon,
  faUser,
  faMagnifyingGlass,
  faChevronDown,
  faChevronUp,
  faMoneyBillTrendUp,
  faPercent,
  faUsersViewfinder,
  faCompass,
  faRobot,
  faTape,
  faCircleDollarToSlot,
  faCoins,
  faFilter,
  faWaveSquare,
  faGraduationCap,
  faBook,
  faMicroscope,
  faBriefcase,
  faRocket,
  faEarthOceania,
  faHammer,
  faMoneyBillWave,
  faSackDollar,
  faVrCardboard,
  faTicket,
  faWallet,
  faDiceD6,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

import { Logo } from "../../Imges/Imges";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-brand">
            <a href="#">
              <Logo />
            </a>
          </div>
          <a href="#" className="navbar-item">
            Buy Crypto
          </a>
          <a href="#" className="navbar-item">
            Markets
          </a>
          <div className="navbar-item has-dropdown">
            <a href="#" className="navbar-link">
              Trade
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                style={{ paddingLeft: "5px" }}
              />
              <FontAwesomeIcon
                icon={faChevronUp}
                size="xs"
                style={{ paddingLeft: "5px" }}
              />
            </a>
            <div className="navbar-dropdown">
              <div>
                <h4>Basic</h4>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                  <span>
                    Spot
                    <p>Buy and sell on the Spot market with advance tools</p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faPercent} />
                  <span>
                    Margin
                    <p>Increase your profits with Leverage</p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faUsersViewfinder} />
                  <span>
                    P2P
                    <p>
                      Buy and sell cryptocurrencies using bank transfer and 800+
                      options
                    </p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faCompass} />
                  <span>
                    Convert & Block Trade
                    <p>The easiest way to trade at all size</p>
                  </span>
                </a>
              </div>
              <div>
                <h4>Advance</h4>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faRobot} />
                  <span>
                    Trading bots
                    <p>
                      Trade smarter with our various automated strategies-easy,
                      fast and reliable
                    </p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faUsersViewfinder} />
                  <span>
                    Copy Trading
                    <p>Follow the most popular traders</p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faTape} />
                  <span>
                    APIs
                    <p>Unlimited oppertunities with one key</p>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown">
            <a href="#" className="navbar-link">
              Futures
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                style={{ paddingLeft: "5px" }}
              />
              <FontAwesomeIcon
                icon={faChevronUp}
                size="xs"
                style={{ paddingLeft: "5px" }}
              />
            </a>
            <div className="navbar-dropdown">
              <div>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faCircleDollarToSlot} />
                  <span>
                    USD$-M Futures
                    <p>Contracts settled in USDT and USDC</p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faCoins} />
                  <span>
                    COIN-M Futures
                    <p>Contracts settled in cryptocurrency</p>
                  </span>
                </a>
                <a href="#" className="navbar-dropdown-item">
                  <FontAwesomeIcon icon={faFilter} />
                  <span>
                    Opions
                    <p>
                      USDT options with limited downside and affordable entry
                    </p>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <a href="#" className="navbar-item">
              Earn
            </a>
            <div className="navbar-item has-dropdown">
              <a href="#" className="navbar-link">
                Square
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="xs"
                  style={{ paddingLeft: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size="xs"
                  style={{ paddingLeft: "5px" }}
                />
              </a>
              <div className="navbar-dropdown">
                <div>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faWaveSquare} />
                    <span>
                      Square
                      <p>Stay informed with everything crypto</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span>
                      Academy (Learn & Earn)
                      <p>Earn crypto by learning about blockchain</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faBook} />
                    <span>
                      Blog
                      <p>Expand your knowledge and get the latest insights</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faMicroscope} />
                    <span>
                      Research
                      <p>
                        Institutional-grade analysis, in-depth insights, and
                        more
                      </p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown">
              <a href="#" className="navbar-link">
                More
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="xs"
                  style={{ paddingLeft: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size="xs"
                  style={{ paddingLeft: "5px" }}
                />
              </a>
              <div className="navbar-dropdown">
                <div>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span>
                      VIP & Institutional
                      <p>Buy and sell on the Spot market with advance tools</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faRocket} />
                    <span>
                      Launchpool
                      <p>Increase your profits with Leverage</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faEarthOceania} />
                    <span>
                      Megadrop
                      <p>
                        Buy and sell cryptocurrencies using bank transfer and
                        800+ options
                      </p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faHammer} />
                    <span>
                      Mining pool
                      <p>The easiest way to trade at all size</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span>
                      Pay
                      <p>The easiest way to trade at all size</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faSackDollar} />
                    <span>
                      Loans
                      <p>The easiest way to trade at all size</p>
                    </span>
                  </a>
                </div>
                <div>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faVrCardboard} />
                    <span>
                      NFT
                      <p>
                        Trade smarter with our various automated
                        strategies-easy, fast and reliable
                      </p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faTicket} />
                    <span>
                      Fan Token
                      <p>Follow the most popular traders</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faWallet} />
                    <span>
                      Web3 Wallet
                      <p>Unlimited oppertunities with one key</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faDiceD6} />
                    <span>
                      BNB Chain
                      <p>Unlimited oppertunities with one key</p>
                    </span>
                  </a>
                  <a href="#" className="navbar-dropdown-item">
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                    <span>
                      Charity
                      <p>Unlimited oppertunities with one key</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ======================== */}
        </div>
        <div className="right_navbar">
          <ul class="navbar-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </li>
            <button>
              <FontAwesomeIcon icon={faDownload} size="sm" /> Deposit
            </button>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFolderClosed} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faMoon} />
              </a>
            </li>
            <div className="navbar-toggle  " onClick={handleToggle}>
              <span className="icon-bar">
                <hr />
              </span>
              <span className="icon-bar">
                <hr />
              </span>
              <span className="icon-bar">
                <hr />
              </span>
            </div>
            <div className="navbar-toggle2  ">
              <span className="cross-bar1">
                <hr />
              </span>
              <span className="cross-bar2">
                <hr />
              </span>
            </div>
          </ul>
        </div>
      </div>

      {/* {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-item">
            <a href="#" className="navbar-link">
              Buy Crypto
            </a>
          </div>
          <div className="navbar-mobile-item">
            <a href="#" className="navbar-link">
              Markets
            </a>
          </div>

          <div className="navbar-mobile-item">
            <a href="#" className="navbar-link">
              Earn
            </a>
          </div>
          <div className="navbar-mobile-item">
            <a href="#" className="navbar-link">
              Square
            </a>
          </div>
          <div className="navbar-mobile-item">
            <a href="#" className="navbar-link">
              Download
            </a>
          </div>

          <div className="navbar-mobile-item">
            <a href="#" className="navbar-link">
              Deposit
            </a>
          </div>
        </div>
      )} */}
      <div className="searchbar"></div>
    </nav>
  );
};

export default Navbar;
