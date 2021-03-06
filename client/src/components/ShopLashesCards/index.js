import React from "react";
import "./styles.css";

function ShopLashesCards(props) {
  return (
    <div class="card mx-3 my-3 animate__animated animate__fadeIn">
      {props.sale ? (
        <div class="sale">
          <h3>Sale</h3>
        </div>
      ) : (
        <div class="no-sale"></div>
      )}
      <img class="card-img-top" src={props.image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-center">
          {props.name}
          {"   "}-{"   "}
          {props.price}
        </h5>
      </div>
    </div>
  );
}

export default ShopLashesCards;
