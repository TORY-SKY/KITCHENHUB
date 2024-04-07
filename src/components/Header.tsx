import React, { useState } from "react";
import styles from "./CSSFILE/Header.module.css";
import logo from "";

const Header: React.FC = () => {
  interface LisItems {
    key: string;
    text: string;
  }
  return (
    <>
      <header className={styles.HeaderSec} role="banner">
        <h3 className="site-logo">
          <a href="" className="logo">
            <img src="images/logo1.png" alt="" />
          </a>
        </h3>

        <div className="mobile-nav">
          <a className="navigation-toggle">
            <span></span>
          </a>
        </div>
        <nav className={styles.siteNav} role="navigation">
          <ul>
            <li className="navigation-link">
              <a href="/how-it-works">How it works</a>
            </li>
            <li className="navigation-link">
              <a href="/blog">Blog</a>
            </li>
            <li className="navigation-link">
              <a href="/about">About</a>
            </li>
            <li className="navigation-link">
              <a href="/school-plugin-estate-agents">Estate agents</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.Headline}>
        <h1 className={styles.heroText}>
          Take the guesswork out of school applications with our school finder
          and distance calculator
        </h1>
        <h2>Search for schools</h2>
        <div>
          <div>
            <ul className={styles.Buttons}>
              <li>
                <a href="">by location</a>
              </li>
              <li>
                <a href="" data-type="location">
                  by name
                </a>
              </li>
            </ul>
            <div className="searBox">
              <input type="text" placeholder="e.g.RG24 7BW; Croydon; Leeds" />
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div>
          <p>
            Check how far you are from your local schools with our{" "}
            <a href="">distance calculator</a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
