import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/1");
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
          products.map((product, key) => (
            <ProductCard key={key} data={product} /> // Use "data" for clarity
          ))
        ) : (
          <p>Loading products...</p> // Display loading message while fetching
        )}
        <ProductCard />
      </div>
    </>
  );
}

export default App;
