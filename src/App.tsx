import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProductCart from "./components/ProductCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: "Error page,You are lost",
    },
    {
      path: "/cartpage",
      element: <ProductCart />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
