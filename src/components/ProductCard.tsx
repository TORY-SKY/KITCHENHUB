import React from "react";
import Products from "./Products";
import ProductCart from "./ProductCart";
import AddtoCartbtn from "./AddtoCartbtn";
import { Link, useParams } from "react-router-dom";
const ProductCard = (properties) => {
  const { id, image, name, price } = properties.data;
  const { ID } = useParams;
  // const newProduct = Products.map((pp) => pp.image);
  // const { id, title, price, description, images } = properties.data;
  // const iimage = images?.[0]?.slice(1, 1);
  // const reimages = iimage ? newProduct : images;

  return (
    <div className="product-card">
      <div className="love-add-btns">
        <div className="love">Love</div>
        <AddtoCartbtn />
      </div>
      <div className="image-container">
        <Link to="product/:productId">
          <img src={image} alt="image" />
        </Link>
      </div>

      <div className="price-add-to-cart">
        <p> ${price}</p>
        <p> {name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
