import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import ProductCart from "./components/ProductCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: "Error page, go back bro",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
