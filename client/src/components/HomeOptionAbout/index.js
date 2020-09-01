import React from "react";
import "./styles.css";

function HomeOptionAbout() {
  return (
    <div class="card border-secondary mb-3" styles="max-width: 18rem;">
      <div class="card-body text-secondary card-body-home-option">
        <h5 class="card-title">About</h5>
        <div class="about-overlay">
          <div class="text">
            <div class="row">
              <a href="tel:2535555555">Kirtsen Lashes</a>
            </div>
          </div>
        </div>
        <p class="card-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </div>
  );
}

export default HomeOptionAbout;
