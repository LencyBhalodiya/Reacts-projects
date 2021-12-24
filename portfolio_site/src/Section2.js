import React from "react";
import "./media.css";
import profile from "./profile.jpg";
import "./App.css";

function Section2() {
  return (
    <React.Fragment>
      <section className="section two" id="about-section">
        <div className="div-2">
          <img src={profile} className="profile" alt="here is profile pic" />

          <h1 className="h1">Hey there, I'm Lency Bhalodiya!</h1>
          <p className="p">
            Am a Computer Science student at Parul University who knows Web
            Development, includes languages Javascript, React.js, Jquery, CSS,
            MySQl and HTML. Built many websites which contains the Use of API's,
            React Router, Hooks, Reducer, ES6+ Javascript,Responsive Design.
            Started my journey by learning C and C++ and build small projects
            like ATM, number guessing app etc. Beside am also learning Data
            Structures and Algorithm to improve Logic building and Problem
            solving skills.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Section2;
