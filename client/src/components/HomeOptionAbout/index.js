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
              <ul>
                <li class="about-li">
                  <a href="/about#missionstatement">Mission Statement</a>
                </li>
                <li class="about-li">
                  <a href="/about#history">History</a>
                </li>
                <li class="about-li">
                  <a href="/about#location">Location</a>
                </li>
              </ul>
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
