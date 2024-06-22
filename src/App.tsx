import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
import ProductCart from "./components/ProductCart";
function App() {
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
    <>
      <div className="card-container">
        {products.length > 0 ? (
          Products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <ProductCart />
    </>
  );
}

export default App;
