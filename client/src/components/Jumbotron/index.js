import React from "react";
import "./styles.css";
import image from "./images/image.jpg";
import image1 from "./images/image1.jpg";
function Jumbotron() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active picture-container my-5">
          <img class="d-block w-100 picture" src={image1} alt="First slide" />
        </div>
        <div class="carousel-item picture-container my-5">
          <img class="d-block w-100 picture" src={image} alt="Second slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      ></a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      ></a>
    </div>
  );
}

export default Jumbotron;
