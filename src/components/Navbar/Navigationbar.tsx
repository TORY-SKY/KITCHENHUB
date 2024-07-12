import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      {/* Navigation bar */}
      <div className="navbar-1">
        <Link to={"/"} className="kitchenhub-home-page">
          <h1 className="logo-text">KitchenHub</h1>
        </Link>
        <form action="" className="search-iput-container">
          <input type="text" placeholder="Search" className="search-product" />
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
        {/*  */}
        <div className="seach-user"></div>
        <Link to={"/cartPage"}>
          <div className="cartIcon">
            <div className="search-user">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.3469L11.6667 12.6803M13.4444 7.95803C13.4444 8.82622 13.2835 9.6859 12.9708 10.488C12.6581 11.2901 12.1998 12.0189 11.622 12.6328C11.0442 13.2467 10.3583 13.7337 9.60336 14.0659C8.84845 14.3981 8.03934 14.5691 7.22222 14.5691C6.40511 14.5691 5.596 14.3981 4.84108 14.0659C4.08617 13.7337 3.40023 13.2467 2.82245 12.6328C2.24466 12.0189 1.78633 11.2901 1.47364 10.488C1.16094 9.6859 1 8.82622 1 7.95803C1 6.20466 1.65555 4.5231 2.82245 3.28327C3.98934 2.04345 5.57199 1.34692 7.22222 1.34692C8.87246 1.34692 10.4551 2.04345 11.622 3.28327C12.7889 4.5231 13.4444 6.20466 13.4444 7.95803Z"
                  stroke="#F7F7F7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9286 4.59692C10.9286 5.24102 10.6727 5.85874 10.2173 6.31418C9.76181 6.76963 9.1441 7.0255 8.5 7.0255C7.8559 7.0255 7.23819 6.76963 6.78274 6.31418C6.3273 5.85874 6.07143 5.24102 6.07143 4.59692C6.07143 3.95283 6.3273 3.33511 6.78274 2.87966C7.23819 2.42422 7.8559 2.16835 8.5 2.16835C9.1441 2.16835 9.76181 2.42422 10.2173 2.87966C10.6727 3.33511 10.9286 3.95283 10.9286 4.59692ZM12.75 4.59692C12.75 5.72409 12.3022 6.8051 11.5052 7.60213C10.7082 8.39916 9.62717 8.84692 8.5 8.84692C7.37283 8.84692 6.29183 8.39916 5.4948 7.60213C4.69777 6.8051 4.25 5.72409 4.25 4.59692C4.25 3.46975 4.69777 2.38875 5.4948 1.59172C6.29183 0.79469 7.37283 0.346924 8.5 0.346924C9.62717 0.346924 10.7082 0.79469 11.5052 1.59172C12.3022 2.38875 12.75 3.46975 12.75 4.59692ZM1.82143 14.3112C1.82143 14.0635 2.08857 13.3289 3.42429 12.5396C4.66043 11.8098 6.46 11.2755 8.5 11.2755C10.54 11.2755 12.3396 11.8098 13.5757 12.5396C14.9114 13.3289 15.1786 14.0635 15.1786 14.3112C15.1786 14.6333 15.0506 14.9421 14.8229 15.1698C14.5952 15.3976 14.2863 15.5255 13.9643 15.5255H3.03571C2.71367 15.5255 2.40481 15.3976 2.17708 15.1698C1.94936 14.9421 1.82143 14.6333 1.82143 14.3112ZM8.5 9.45407C3.825 9.45407 0 11.8826 0 14.3112C0 15.1163 0.319833 15.8885 0.88914 16.4578C1.45845 17.0271 2.23059 17.3469 3.03571 17.3469H13.9643C14.7694 17.3469 15.5416 17.0271 16.1109 16.4578C16.6802 15.8885 17 15.1163 17 14.3112C17 11.8826 13.175 9.45407 8.5 9.45407Z"
                  fill="#F7F7F7"
                />
              </svg>
            </div>
            <svg
              width="31"
              height="34"
              viewBox="0 0 31 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H4.15789L4.78947 4.47826M4.78947 4.47826H29.421L23.1052 18.3913H7.31578M4.78947 4.47826L7.31578 18.3913M7.31578 18.3913L3.69526 22.3791C2.70052 23.4748 3.40473 25.3478 4.81157 25.3478H23.1052M23.1052 25.3478C22.2677 25.3478 21.4645 25.7143 20.8723 26.3666C20.28 27.0189 19.9473 27.9036 19.9473 28.8261C19.9473 29.7486 20.28 30.6333 20.8723 31.2856C21.4645 31.9379 22.2677 32.3043 23.1052 32.3043C23.9428 32.3043 24.746 31.9379 25.3382 31.2856C25.9304 30.6333 26.2631 29.7486 26.2631 28.8261C26.2631 27.9036 25.9304 27.0189 25.3382 26.3666C24.746 25.7143 23.9428 25.3478 23.1052 25.3478ZM10.4737 28.8261C10.4737 29.7486 10.141 30.6333 9.54875 31.2856C8.95653 31.9379 8.15331 32.3043 7.31578 32.3043C6.47826 32.3043 5.67503 31.9379 5.08282 31.2856C4.4906 30.6333 4.15789 29.7486 4.15789 28.8261C4.15789 27.9036 4.4906 27.0189 5.08282 26.3666C5.67503 25.7143 6.47826 25.3478 7.31578 25.3478C8.15331 25.3478 8.95653 25.7143 9.54875 26.3666C10.141 27.0189 10.4737 27.9036 10.4737 28.8261Z"
                stroke="#F7F7F7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="cart-counter">2</span>
          </div>
        </Link>
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
          <Link to="/" className="home-nav-link">
            Home
          </Link>
          <Link to="/" className="home-nav-link">
            Shop
          </Link>
          <Link to="/" className="home-nav-link">
            About
          </Link>
          <Link to="/" className="home-nav-link">
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
