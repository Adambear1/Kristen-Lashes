import React, { useEffect, useState } from "react";
import "./styles.css";

function ShopHeader() {
  const [value, setValue] = useState();

  function onClick(e) {
    setValue(e.target.id);
  }
  useEffect(() => {
    if (value === "next") {
      setTimeout(() => document.querySelector(`#next`).removeAttribute("href"));
      document.querySelector(`#next`).classList.add("active");
      document.querySelector(`#prev`).classList.remove("active");
      document.querySelector(`#prev`).href = "#carouselExampleControls";
    } else if (value === "prev") {
      setTimeout(() => document.querySelector(`#prev`).removeAttribute("href"));
      document.querySelector(`#prev`).classList.add("active");
      document.querySelector(`#next`).classList.remove("active");
      document.querySelector(`#next`).href = "#carouselExampleControls";
    }
  }, [value]);

  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary shop-header-nav">
      <ul class="shop-header-ul">
        <li class="shop-header-li">
          <div class="navbar-brand text-warning">Shop:{"  "}</div>
        </li>
        <li class="shop-header-li">
          <a
            class="navbar-brand text-warning lashes active"
            href="#carouselExampleControls"
            role="button"
            id="prev"
            data-slide="prev"
            onClick={onClick}
          >
            Lashes
          </a>
        </li>
        <li class="shop-header-li">
          <a
            class="navbar-brand text-warning cosmetics"
            // class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            id="next"
            data-slide="next"
            onClick={onClick}
          >
            Cosmetics
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ShopHeader;
