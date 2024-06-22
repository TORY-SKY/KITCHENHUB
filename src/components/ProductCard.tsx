import React from "react";
import Products from "./Products";
import ProductCart from "./ProductCart";
const ProductCard = (properties) => {
  const { id, image, name, price } = properties.data;
  // const newProduct = Products.map((pp) => pp.image);
  // const { id, title, price, description, images } = properties.data;
  // const iimage = images?.[0]?.slice(1, 1);
  // const reimages = iimage ? newProduct : images;

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt="image" />
      </div>

      <div className="price-add-to-cart">
        <p> ${price}</p>
        <p> {name}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
