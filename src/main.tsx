import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<ProductsProvider products={Products}>*/}
      {/* working */}
      <App />
    {/*</ProductsProvider>*/}
  </React.StrictMode>
);
