import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./components/ContextAPI/ContextProvider.tsx";
import Products from "./components/Products.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider products={Products}>
      {/* working */}
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
