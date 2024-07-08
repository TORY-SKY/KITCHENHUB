import React from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      {/* Navigation bar */}
      <div className="navbar-1">
        <h1 className="logo-text">KitchenHub</h1>
        <form action="" className="search-iput-container">
          <input type="text" className="search-product" />
          <span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 18.3469L11.6667 12.6803M13.4444 7.95803C13.4444 8.82622 13.2835 9.6859 12.9708 10.488C12.6581 11.2901 12.1998 12.0189 11.622 12.6328C11.0442 13.2467 10.3583 13.7337 9.60336 14.0659C8.84845 14.3981 8.03934 14.5691 7.22222 14.5691C6.40511 14.5691 5.596 14.3981 4.84108 14.0659C4.08617 13.7337 3.40023 13.2467 2.82245 12.6328C2.24466 12.0189 1.78633 11.2901 1.47364 10.488C1.16094 9.6859 1 8.82622 1 7.95803C1 6.20466 1.65555 4.5231 2.82245 3.28327C3.98934 2.04345 5.57199 1.34692 7.22222 1.34692C8.87246 1.34692 10.4551 2.04345 11.622 3.28327C12.7889 4.5231 13.4444 6.20466 13.4444 7.95803Z"
                stroke="#665A5A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </form>
        <div className="cartIcon">
          <svg
            width="31"
            height="34"
            viewBox="0 0 31 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H4.15789L4.78947 4.47826M4.78947 4.47826H29.421L23.1052 18.3913H7.31578M4.78947 4.47826L7.31578 18.3913M7.31578 18.3913L3.69526 22.3791C2.70052 23.4748 3.40473 25.3478 4.81157 25.3478H23.1052M23.1052 25.3478C22.2677 25.3478 21.4645 25.7143 20.8723 26.3666C20.28 27.0189 19.9473 27.9036 19.9473 28.8261C19.9473 29.7486 20.28 30.6333 20.8723 31.2856C21.4645 31.9379 22.2677 32.3043 23.1052 32.3043C23.9428 32.3043 24.746 31.9379 25.3382 31.2856C25.9304 30.6333 26.2631 29.7486 26.2631 28.8261C26.2631 27.9036 25.9304 27.0189 25.3382 26.3666C24.746 25.7143 23.9428 25.3478 23.1052 25.3478ZM10.4737 28.8261C10.4737 29.7486 10.141 30.6333 9.54875 31.2856C8.95653 31.9379 8.15331 32.3043 7.31578 32.3043C6.47826 32.3043 5.67503 31.9379 5.08282 31.2856C4.4906 30.6333 4.15789 29.7486 4.15789 28.8261C4.15789 27.9036 4.4906 27.0189 5.08282 26.3666C5.67503 25.7143 6.47826 25.3478 7.31578 25.3478C8.15331 25.3478 8.95653 25.7143 9.54875 26.3666C10.141 27.0189 10.4737 27.9036 10.4737 28.8261Z"
              stroke="#666666"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="cart-counter">3</p>
        </div>
      </div>
      <div className="navbar-2">
        <div className="categories">
          <form action="" className="select-option">
            <select name="" id="" className="Categories-selection">
              <option value="new-arrival">SHOP BY CATEGORIES</option>
              <option value="new-arrival">New Arrival</option>
              <option value="new-arrival">New Arrival</option>
              <option value="new-arrival">New Arrival</option>
              <option value="new-arrival">New Arrival</option>
            </select>
          </form>
        </div>
        <nav className="nav-links">
          <Link to="/home" className="home-nav-link">
            Home
          </Link>
          <Link to="/home" className="home-nav-link">
            Shop
          </Link>{" "}
          <Link to="/home" className="home-nav-link">
            About
          </Link>{" "}
          <Link to="/home" className="home-nav-link">
            Contact
          </Link>
        </nav>
        <div className="sign-in-btn">
          <Link to="/sign-in" className="click-to-sign-up">
            Sign in/Register
          </Link>
        </div>

        <div className="handburger-menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20M4 6H20M4 18H20"
              stroke="#F7F7F7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
