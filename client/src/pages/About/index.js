import React from "react";
import AboutMissionStatement from "../../components/AboutMissionStatement";
import AboutHistory from "../../components/AboutHistory";
import AboutLocation from "../../components/AboutLocation";

function About() {
  return (
    <div class="container">
      <AboutMissionStatement />
      <AboutHistory />
      <AboutLocation />
    </div>
  );
}

export default About;
