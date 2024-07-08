import React from "react";
import AddtoCartbtn from "./AddtoCartbtn";
import { useParams } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="Product-display-container">
      <div className="product-display">
        <div className="img-container">
          <img src="" alt="product-image" />
        </div>
        <div className="product-details">
          <h1>Product Name</h1>
          <div className="flash-sales-container">
            <p className="description">Product Description</p>
            <h1>$Price</h1>
          </div>
          <button className="Add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
