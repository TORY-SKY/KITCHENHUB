import React from "react";
import Products from "./Products";
import ProductCart from "./ProductCart";
import AddtoCartbtn from "./AddtoCartbtn";

import { Link, useParams } from "react-router-dom";

const ProductCard = (properties) => {
  const { id, image, name, price } = properties.data;

  return (
    <div className="product-card">
      <img src={image} alt="product-image" />
    </div>
  );
};

export default ProductCard;
