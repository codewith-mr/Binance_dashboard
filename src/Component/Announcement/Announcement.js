import React from "react";
import Slider from "react-slick";
import "../../Component/Announcement/Announcement.css";
import slideImg1 from "../../Imges/sliderImg1.png";
import slideImg2 from "../../Imges/sliderImg2.svg";
import slideImg3 from "../../Imges/sliderImg3.svg";

const Announcement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slideContent = [
    {
      paragraph: "Earn up to 0.018 BTC Free!",
      imgSrc: slideImg1,
      imgAlt: "image",
    },
    {
      paragraph: "The easiest way to trade crypto at 0 fees",
      imgSrc: slideImg2,
      imgAlt: "image",
    },
    {
      paragraph: "Trade crypto with advanced tools",
      paragraph: "Trade crypto with advanced tools",
      imgSrc: slideImg3,
      imgAlt: "image",
      text: "BTC/USDT $60,242 ",
    },
  ];

  return (
    <div className="announcement_div">
      <div className="first_div">
        <div className="announcement">
          <h4>Announcements</h4>
          <button>More</button>
        </div>
        <div className="para_1">
          <p>
            Updates on the Leverage & Margin Tiers of Multiple USDⓈ-M Perpetual
            Contracts (2024-08-02)
          </p>
          <span>2024-08-02</span>
        </div>
        <div className="para_2">
          <p>
            Important Updates to Binance Margin Liquidation Fees (2024-08-12)
          </p>
          <span>2024-08-02</span>
        </div>
      </div>
      <div className="second_div">
        <div className="carousel_container">
          <Slider {...settings}>
            {slideContent.map((slide, index) => (
              <div key={index} className="slider-item">
                <div className="slider-content">
                  <div className="text-image-row">
                    <p className="slide-paragraph">
                      {slide.paragraph} <br />
                      {slide.text && (
                        <span className="slide-text">{slide.text}</span>
                      )}
                    </p>
                    <br />

                    <img
                      className="slide-image"
                      src={slide.imgSrc}
                      alt={slide.imgAlt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* <span className="dot"></span> */}
    </div>
  );
};

export default Announcement;
