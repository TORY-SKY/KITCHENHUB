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
      errorElement:
        "Get your ass back, how tf did you even get here in the first place",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
