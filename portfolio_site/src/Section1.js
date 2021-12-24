import React from "react";
import icon from "./3d.png";

function Section1() {
  return (
    <React.Fragment>
      <section className="section one" id="home-section">
        <div className="div-sec1">
          <h1> Hey! </h1>
          <h1> Everyone </h1>
          <h2> I Like to Code..</h2>
        </div>
        <img src={icon} className="icon" alt="icon" />
      </section>
    </React.Fragment>
  );
}

export default Section1;
