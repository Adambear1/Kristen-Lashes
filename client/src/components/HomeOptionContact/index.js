import React from "react";
import "./styles.css";
function HomeOptionContact() {
  return (
    <div class="card border-secondary mb-3" styles="max-width: 18rem;">
      <div class="card-body text-secondary card-body-home-option">
        <h5 class="card-title">Contact</h5>
        <div class="contact-overlay">
          <div class="text">
            <div class="row">
              <ul>
                <li>
                  <a href="tel:2535555555">Phone: (253) - 555 -5555</a>
                </li>
                <li>
                  <a href="mailto:kristen@lashes.com">
                    Email: kristen@lashes.com
                  </a>
                </li>
              </ul>
            </div>
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
