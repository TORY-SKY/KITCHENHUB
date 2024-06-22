import React from "react";
import Products from "./Products";
import ProductCart from "./ProductCart";
const ProductCard = (props) => {
  const { id, image, description } = props.data;
  return (
    <div>
      <h1>Product Card page</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
