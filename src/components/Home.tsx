import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Products from "./Products";
import ProductCart from "./ProductCart";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

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
      <div className="card-container">
        {products.length > 0 ? (
          Products.map((product) => (
            <Link key={product.id} to={<ProductCart />}>
              <ProductCard key={product.id} data={product} />
            </Link>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      {/* <div className="card-container">
            {Products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div> */}
      <ProductCart />
      <ProductList />
    </div>
  );
};

export default Home;
