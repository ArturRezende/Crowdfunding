import React from "react";
import { StylePriceArea } from "./style/StylePriceArea";

const PriceArea = (props) => {
  return (
    <StylePriceArea className="price-area">
      <div className="price-area__container">
        <div className="price-area__content">
          <div className="price-area__box box-first">
            <h2>$89,914</h2>
            <p>of $100,000 backed</p>
            <span></span>
          </div>
          <div className="price-area__box box-second">
            <h2>5,007</h2>
            <p>total backers</p>
            <span></span>
          </div>
          <div className="price-area__box box-third">
            <h2>56</h2>
            <p>days left</p>
          </div>
        </div>

        <div className="price-area__progress-bar">
          <span></span>
        </div>
      </div>
    </StylePriceArea>
  );
};

export default PriceArea;
