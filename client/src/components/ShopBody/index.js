import React from "react";
import "./styles.css";
import ShopLashesCardContainer from "../ShopLashesCardContainer";
import ShopCosmeticsCardContainer from "../ShopCosmeticsCardContainer";

function ShopBody() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide shop-carousel shop-carousel"
      data-interval="false"
    >
      <div class="carousel-inner shop-carousel-inner">
        <div class="carousel-item active shop-carousel-item">
          <ShopLashesCardContainer />
        </div>
        <div class="carousel-item shop-carousel-item">
          <ShopCosmeticsCardContainer />
        </div>
      </div>
    </div>
  );
}

export default ShopBody;
