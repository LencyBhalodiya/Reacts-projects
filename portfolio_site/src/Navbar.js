import React from "react";
import "./App.css";

function Navbar({ openNav, setOpenNav, Links, setLinks }) {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    // document.getElementById("navbar").style.background = "#fff";
    // const mystylee = {
    //   backgroundColor: "#fff",
    // };
  }
  const mystyle = {
    fontSize: "20px",
  };
  return (
    <header id="header">
      <div className="smalllogo">
        <a href="#welcome-section" className="logolink">
          <h2>
            <i className="fas fa-code"></i> Lency
          </h2>
        </a>
      </div>
      <button className="nav-toggle" onClick={() => setOpenNav(!openNav)}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav" id="navbar">
        <div className="logo">
          <a href="nav.html" id="logo">
            <h1>
              <i className="fas fa-code" style={mystyle}></i> Lency
            </h1>
          </a>
        </div>

        <ul className="nav__list" id="navlinkitems">
          <li className="nav__item">
            <a
              href="#home-section"
              className="nav__link"
              id="home"
              onClick={() => {
                setOpenNav(false);
                setLinks(!Links);
              }}
            >
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about-section"
              className="nav__link"
              id="about"
              onClick={() => {
                setOpenNav(false);
                setLinks(!Links);
              }}
            >
              About
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#skills-section"
              className="nav__link"
              id="service"
              onClick={() => {
                setOpenNav(false);
                setLinks(!Links);
              }}
            >
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#projects-section"
              className="nav__link"
              id="work"
              onClick={() => {
                setOpenNav(false);
                setLinks(!Links);
              }}
            >
              Work
            </a>
          </li>

          <li className="nav__item">
            <a
              href="#contacts-section"
              className="nav__link"
              id="contact"
              onClick={() => {
                setOpenNav(false);
                setLinks(!Links);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
