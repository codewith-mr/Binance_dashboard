import React, { useState } from "react";
import "../MarketDiscover/MarketDiscover.css";
import { Mini_Profile1 } from "../../Imges/Imges";
import { coins_mock, listing_content } from "../../Utils/Mock/SquareMockData";

const OtherComponent = () => {
  return <div style={{ padding: 30, color: "white" }}>No Content Here</div>;
};

const ListComponet = ({
  coinName,
  blockChain,
  price,
  showValue,
  costPrice,
  changeRatio,
  alwaysShowValue,
}) => {
  const check = changeRatio.startsWith("-");

  return (
    <div className="list">
      <span>
        <Mini_Profile1 />
        <span>
          <h5>{coinName}</h5>
          <h6>{blockChain}</h6>
        </span>
      </span>

      <span>
        <h5>{alwaysShowValue ? price : showValue ? price : "**"}</h5>
        <h6>{alwaysShowValue ? costPrice : "**"}</h6>
      </span>
      <span>
        <h5>{costPrice}</h5>
        <h6>**</h6>
      </span>
      <span>
        <h6 style={{ color: check ? "#f6465d" : "green" }}>
          {!check && "+"}
          {changeRatio}%
        </h6>
      </span>
      <span>
        <h6>Trade</h6>
      </span>
    </div>
  );
};

const MarketDiscover = ({ visiblePrivate }) => {
  const tabs = [
    { id: 1, name: "Holding" },
    { id: 2, name: "Hot" },
    { id: 3, name: "New Listing" },
    { id: 4, name: "Favorite" },
    { id: 5, name: "24h Volume" },
  ];

  const marketAndDiscover = [
    { id: 1, name: "Markets" },
    { id: 2, name: "Discover" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="marketdiscover_body">
      {activeTab === 2 ? (
        <div className="marketdiscover">
          <div className="main_btn">
            <span>
              {marketAndDiscover.map((item) => (
                <button key={item.id} onClick={() => setActiveTab(item.id)}>
                  {item.name}
                </button>
              ))}
            </span>
          </div>
        </div>
      ) : (
        <div className="marketdiscover">
          <div className="main_btn">
            <span>
              {marketAndDiscover.map((item) => (
                <button key={item.id} onClick={() => setActiveTab(item.id)}>
                  {item.name}
                </button>
              ))}
              <span>More</span>
            </span>
          </div>

          <div className="mini_btn">
            {tabs.map((item) => (
              <button key={item.id} onClick={() => setActiveTab(item.id)}>
                {item.name}
              </button>
            ))}
          </div>

          {activeTab === 1 ? (
            <div className="content">
              <span>
                <span>Coin</span>
                <span>Amount</span>
                <span>Coin Price/ Cost Price</span>
                <span>24h Change</span>
                <span>Trade</span>
              </span>
              {coins_mock.map((item, index) => (
                <ListComponet
                  key={index}
                  coinName={item.name}
                  blockChain={item.blockchain}
                  price={item.price}
                  costPrice={item.costPrice}
                  changeRatio={item.ratio}
                  showValue={visiblePrivate}
                />
              ))}
            </div>
          ) : activeTab === 4 ? (
            <OtherComponent />
          ) : (
            <div className="content">
              <span>
                <span>Coin</span>
                <span>Coin Price</span>
                <span>24h Change</span>
                <span>Date Listed</span>
                <span>Trade</span>
              </span>
              {listing_content.map((item, index) => (
                <ListComponet
                  className="listComponent"
                  key={index}
                  coinName={item.name}
                  blockChain={item.blockchain}
                  price={item.value}
                  costPrice={item.costPrice}
                  changeRatio={item.ratio}
                  showValue={true}
                  alwaysShowValue={true}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MarketDiscover;
