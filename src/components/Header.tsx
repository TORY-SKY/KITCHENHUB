import React from "react";
import hheader from "./styles.module.css";
import navlink from "./styles.module.css";

const Product = [
  { id: 1, name: "Adire", price: "34,000" },
  { id: 1, name: "Gucci", price: "34,000" },
  { id: 1, name: "Lui Vitton", price: "34,000" },
];
const CallFunc = () => {
  console.log(
    Product.forEach((prod) => {
      prod.id;
    })
  );
};
const Linkss = () => {
  return (
    <>
      <nav className={navlink.navlinks}>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Our Fleet</a>
        <a href="">Our Fleet</a>
        <a href="">Contact Us</a>
      </nav>
    </>
  );
};
const Header = () => {
  return (
    <div>
      <div className={hheader.headerr}>
        <Linkss />
        <h2>REN</h2>
        <div>
          <div className="calltoac">
            <input type="text" placeholder="Search for cars" />
            <button
              onClick={() => {
                CallFunc;
              }}
            >
              Sign Up
            </button>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
