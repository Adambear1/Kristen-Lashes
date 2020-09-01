import React from "react";
import Jumbotron from "../../components/Jumbotron";
import HomeOptionShop from "../../components/HomeOptionShop";
import HomeOptionContact from "../../components/HomeOptionContact";

function Home() {
  return (
    <div className="container">
      <div className="row mb-5">
        <Jumbotron />
      </div>
      <div className="row">
        <div class="col-sm-12 col-md-6">
          <HomeOptionShop />
        </div>
        <div class="col-sm-12 col-md-6">
          <HomeOptionContact />
        </div>
      </div>
    </div>
  );
}

export default Home;
