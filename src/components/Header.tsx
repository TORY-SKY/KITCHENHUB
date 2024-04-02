import React from "react";
import styles from "./CSSFILE/Header.module.css";
import logo from "";

const Header = () => {
  return (
    <>
      <header className={styles.header} role="banner">
        <h3 className="site-logo">
          <div className="logo">
            <img src="images/logo1.png" alt="" />
          </div>
          <a href="/">AdmissionsDay</a>
        </h3>

        <div className="mobile-nav">
          <a className="navigation-toggle">
            <span></span>
          </a>
        </div>
        <nav className="site-nav" role="navigation">
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
    </>
  );
};

export default Header;
