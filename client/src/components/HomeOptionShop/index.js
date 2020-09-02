import React from "react";
import "./styles.css";

function HomeOptionShop() {
  return (
    <div class="card border-secondary mb-3" styles="max-width: 18rem;">
      <div class="card-body text-secondary card-body-home-option">
        <h5 class="card-title">Shop</h5>
        <div class="shop-overlay">
          <div class="text">
            <ul class="shop-ul">
              <li class="shop-li">
                <a href="/shop#lashes">Lashes</a>
              </li>
              <li class="shop-li">
                <a href="/shop#cosmetics">Cosmetics</a>
              </li>

              <li class="shop-li">
                <a href="/shop#sales">Sales</a>
              </li>
            </ul>
          </div>
        </div>
        <p class="card-text">
          Browse a collection of high-end custom made lashes that are guaranteed
          to impress.
        </p>
      </div>
    </div>
  );
}

export default HomeOptionShop;
