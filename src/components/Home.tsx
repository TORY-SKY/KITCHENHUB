import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Products from "./Products";
import ProductCart from "./ProductCart";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import Navigationbar from "./Navbar/Navigationbar";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navigationbar />
      <div className="Hero-section">
        <div className="hero-text">
          <p className="discount-notfication-text">SALES UP TO 30% OFF</p>
          <h1 className="cathy-text">Kitchen Gadgets & Utensils Store</h1>
          <p className="sub-catchy-text">
            "Elevate your culinary space. embrace innovative kitchenware that
            defines cutting-edge style."
          </p>
          <div className="Shop-now-btn">
            <button>SHOP NOW</button>
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-container">
        {Products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className="card-container">
        {Products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      {/* <ProductList /> */}
    </div>
  );
};

export default Home;
