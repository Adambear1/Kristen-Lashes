import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import ShopLashesCardContainer from "../ShopLashesCardContainer";
import ShopCosmeticsCardContainer from "../ShopCosmeticsCardContainer";
import { Context } from "../Context";

function ShopBody() {
  const { value, setValue } = useContext(Context);
  function onClick(e) {
    console.log(e.target.id);
    setValue(e.target.id);
  }
  // useEffect(() => {
  //   value == "Lashes"
  //     ? console.log(document.querySelector(".carousel-control-prev"))
  //     : console.log(document.querySelector(".carousel-control-next"));
  // });
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
      <a
        class="carousel-control-prev shop-carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        id="Lashes"
        // onClick={onClick}
      >
        <span
          class="carousel-control-prev-icon shop-prev-icon shop-carousel-control-prev-icon"
          aria-hidden="true"
          id="Lashes"
          // onClick={onClick}
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next shop-carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        id="Cosmetics"
        // onClick={onClick}
      >
        <span
          class="carousel-control-next-icon shop-next-icon shop-carousel-control-next-icon"
          aria-hidden="true"
          id="Cosmetics"
          // onClick={onClick}
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default ShopBody;
