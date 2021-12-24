import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import MovieFinder from "./photos/MovieFinder.png";
import blackjack from "./photos/blackjack.png";
import StockPhotos from "./photos/StockPhotos.png";
import Cocktail from "./photos/Cocktail.png";
import Movie from "./photos/MovieR.png";
import rps from "./photos/rps.png";
import lightmode from "./photos/lightmode.png";
import darkmode from "./photos/night.png";
function Project() {
  const [light, Dark] = React.useState(true);

  return (
    <body className={`${light ? "body-light" : "body-dark"}`}>
      <header className={`${light ? "headerr" : "headerr-dark"}`}>
        <div className="head">
          <h1>My Projects</h1>
        </div>
      </header>
      <div
        className={`${light ? "toggle" : "toggle-dark"}`}
        onClick={() => Dark(!light)}
      >
        {light ? (
          <img src={darkmode} alt="dark mode icon" className="icontoggle" />
        ) : (
          <img src={lightmode} alt="light mode icon" className="icontoggle" />
        )}
      </div>
      <article className={`${light ? "article" : "article-dark"}`}>
        <div className="div-project">
          <a
            href="https://lencybhalodiya.github.io/moviefinderjs/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-div">
              <img src={MovieFinder} alt="project" className="img-project" />
            </div>
          </a>
          <div className="footer">Movie Finder</div>
        </div>
        <div className="div-project">
          <a
            href="https://react-projects-19-stock-photos.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-div">
              <img src={StockPhotos} alt="project" className="img-project" />
            </div>
          </a>
          <div className="footer">Stock Photos Unlimited</div>
        </div>
        <div className="div-project">
          <a
            href="https://react-projects-15-cocktails.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-div">
              <img src={Cocktail} alt="project" className="img-project" />
            </div>
          </a>
          <div className="footer">Search Cocktails</div>
        </div>
        <div className="div-project">
          <a
            href="https://react-projects-21-movie-db.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-div">
              <img src={Movie} alt="project" className="img-project" />
            </div>
          </a>
          <div className="footer">Movie API </div>
        </div>
        <div className="div-project">
          <a
            href="https://lencybhalodiya.github.io/blackjackgame/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-div">
              <img src={blackjack} alt="project" className="img-project" />
            </div>
          </a>
          <div className="footer">Blackjack Game</div>
        </div>
        <div className="div-project">
          <a
            href="https://lencybhalodiya.github.io/RpsGame/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-div">
              <img src={rps} alt="project" className="img-project" />
            </div>
          </a>
          <div className="footer">Rock Paper Scissors</div>
        </div>
      </article>
      <div className="div-button">
        <Link to="/">
          <button className={`${light ? "btn-light" : "btn-dark"}`}>
            Back
          </button>
        </Link>
      </div>
    </body>
  );
}

export default Project;
