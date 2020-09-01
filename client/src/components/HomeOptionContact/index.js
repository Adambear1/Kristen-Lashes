import React from "react";
import "./styles.css";
function HomeOptionContact() {
  return (
    <div class="card border-secondary mb-3" styles="max-width: 18rem;">
      <div class="card-body text-secondary card-body-home-option">
        <h5 class="card-title">Shop</h5>
        <div class="contact-overlay">
          <div class="text">
            <div class="row">
              <a href="tel:2535555555">Phone: (253) - 555 -5555</a>
            </div>
            <a href="mailto:kristen@lashes.com">Phone: kristen@lashes.com</a>
          </div>
        </div>
        <p class="card-text">
          For any business inquiries, questions, or general contact, please have
          no hesitation to reach out.
        </p>
      </div>
    </div>
  );
}

export default HomeOptionContact;
