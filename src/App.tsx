import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: "Error page,You are lost",
    },
    {
      path: "/cartpage",
      element: "<ProductCart />",
      errorElement:
        "ERROR 404 PAGE NOT FOUND",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
