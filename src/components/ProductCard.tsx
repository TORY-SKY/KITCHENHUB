import React from "react";
import AddtoCartbtn from "./AddtoCartbtn";
import { Link } from "react-router-dom";

const ProductCard = (product) => {
  const { id, image, name, price } = product.data;

  return (
    <div className="product-card" key={id}>
      <div className="cardm">
        <span className="like-container">
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0011 2.68179L14.0007 2.68214L13.0388 3.67335L12.5006 4.22797L11.9624 3.67335L11.0005 2.68214L10.9996 2.68125C8.79103 0.397885 5.25398 0.072567 2.91406 2.06639C0.1817 4.39866 0.0352457 8.59515 2.48303 11.1257L11.9308 20.8811C12.2465 21.2068 12.7498 21.2068 13.0655 20.8811L22.5136 11.1254L22.5137 11.1252C24.9658 8.59479 24.8194 4.39884 22.0874 2.0666L14.0011 2.68179ZM14.0011 2.68179C16.2149 0.397512 19.7473 0.0728349 22.0869 2.06623L14.0011 2.68179Z"
              stroke="#F7F7F7"
              stroke-width="1.5"
            />
          </svg>
        </span>
        <div className="product-image-div">
          <Link to={"/cartpage"}>
            <img src={image} alt="product" />
          </Link>
        </div>
        <AddtoCartbtn />
        <div className="price-prod-name">
          <p className="product-name">{name}</p>
          <p className="product-price">${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
