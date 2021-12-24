import React from "react";
import "./media.css";
import "./App.css";

function Section3() {
  return (
    <React.Fragment>
      <section className="section three" id="skills-section">
        <div className="myskill">
          <h1>My Skills</h1>
        </div>
        <div id="main">
          <div className="box">
            <h1>React.js</h1>
            <p className="p">React Router, Reducer, Context API, Hooks</p>
          </div>
          <div className="box">
            <h1>Javascript</h1>
            <p className="p">
              ES6+ syntax, JSON, Callback Function, Promises, fetch
            </p>
          </div>
          <div className="box">
            <h1>Cascading Style Sheet(CSS)</h1>
            <p className="p">flex-box, Grid, Media Queries, em rem, position</p>
          </div>
          <div className="box">
            <h1>C++ Programming</h1>
            <p className="p">OOP, Nested loop , 2D-3D Array, Dynamic Memory</p>
          </div>
          <div className="box">
            <h1>C Programming</h1>
            <p className="p">
              Switch, Nested loop , 2D-3D Array, Dynamic Memory
            </p>
          </div>
          <div className="box">
            <h1>MySql</h1>
            <p className="p">Primary Key, Constraint, Queries, Operations</p>
          </div>
          <div className="box">
            <h1>JQuery</h1>
            <p className="p">Event Handling, Toggle , Animation Function</p>
          </div>
          <div className="box">
            <h1>Html</h1>
            <p className="p">Forms, Metatag,Viewport</p>
          </div>
          <div className="box">
            <h1>Github</h1>
          </div>
          <div className="box">
            <h1>Graphic design</h1>
            <p className="p">
              Ebook Design, Carousel, Social Media Post Design
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Section3;
