import React from "react";
import ProductCard from "./ProductCard";
const ProductCart = (props) => {
  const { id, category, image, price } = props.data;
  return (
    <div>
      <h1>Product Cart</h1>
      <h4>{id}</h4>
    </div>
  );
};

export default ProductCart;
