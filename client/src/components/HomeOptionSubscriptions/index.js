import React from "react";
import "./styles.css";

function HomeOptionSubscriptions() {
  return (
    <div class="card border-secondary mb-3" styles="max-width: 18rem;">
      <div class="card-body text-secondary card-body-home-option">
        <h5 class="card-title">Subscriptions</h5>
        <div class="subscriptions-overlay">
          <div class="text">
            <div class="row">
              <a href="subscribe">Subscribe</a>
            </div>
          </div>
        </div>
        <p class="card-text">
          Subscribe today to receive email updates, special bonuses, and to keep
          up-to-date with all current trends!
        </p>
      </div>
    </div>
  );
}

export default HomeOptionSubscriptions;
