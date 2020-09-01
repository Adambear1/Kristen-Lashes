import React from "react";
import "./styles.css";

function HomeOptionShop() {
  return (
    <div class="card border-secondary mb-3" styles="max-width: 18rem;">
      <div class="card-body text-secondary card-body-home-option">
        <h5 class="card-title">Shop</h5>
        <div class="shop-overlay">
          <div class="text">
            <ul>
              <li>
                <a href="#">Lashes</a>
              </li>
              <li>
                <a href="#">Cosmetics</a>
              </li>

              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Contact</a>
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
