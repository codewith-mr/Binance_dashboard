import React from "react";
import "../Footer/Footer.css";
import {
  footerAbout,
  footerProducts,
  footerBusiness,
  footerLearn,
  footerServices,
  footerSupport,
  footerIcon,
} from "../../Utils/Mock/SquareMockData";

const Footer = () => {
  return (
    <>
      <div className=" footer_main container">
        <div className="footer_bg">
          <div className="first_section">
            <h5>Community</h5>
            <div className="icons">
              {footerIcon.map((item, index) => (
                <span key={index}>
                  <i class={item.class} aria-hidden="true"></i>
                </span>
              ))}
            </div>
            <div className="extra_btn">
              <span>English</span>
              <span>USD-$</span>
              <span>Theme</span>
            </div>
          </div>
          <div>
            <div className="second_section">
              <h5>About Us</h5>
              {footerAbout.map((item, index) => (
                <span key={index}>
                  <p> {item.title} </p>
                </span>
              ))}
            </div>
            {/* ============= */}
            <div className="third_section">
              <h5>Products</h5>
              {footerProducts.map((item, index) => (
                <span key={index}>
                  <p>{item.title}</p>
                </span>
              ))}
            </div>
            {/* ============== */}
            <div className="fourth_section">
              <div>
                <h5>Business</h5>
                {footerBusiness.map((item, index) => (
                  <span key={index}>
                    <p>{item.title}</p>
                  </span>
                ))}
              </div>
              {/* ============= */}
              <div>
                <h5>Learn</h5>
                {footerLearn.map((item, index) => (
                  <span key={index}>
                    <p> {item.title} </p>
                  </span>
                ))}
              </div>
            </div>
            {/* ============== */}
            <div className="fifth_section">
              <div>
                <h5>Service</h5>
                {footerServices.map((item, index) => (
                  <span key={index}>
                    <p> {item.title} </p>
                  </span>
                ))}
              </div>
              {/* ============== */}
              <div>
                <h5>Support</h5>

                {footerSupport.map((item, index) => (
                  <span key={index}>
                    <p>{item.title} </p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <text>Binance© 2024</text>
          <text>Cookie Preferences</text>
        </div>
      </div>
    </>
  );
};

export default Footer;
