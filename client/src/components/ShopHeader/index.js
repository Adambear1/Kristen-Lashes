import React from "react";
import "./styles.css";

function ShopHeader() {
  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary shop-header-nav">
      <ul class="shop-header-ul">
        <li class="shop-header-li">
          <div class="navbar-brand text-warning">Shop:{"  "}</div>
        </li>
        <li class="shop-header-li">
          <a class="navbar-brand text-warning " href="#lashes">
            Lashes
          </a>
        </li>
        <li class="shop-header-li">
          <a class="navbar-brand text-warning " href="#cosmetics">
            Cosmetics
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ShopHeader;
