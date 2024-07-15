import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProductCart from "./components/ProductCart";
import ContextProvider from "./components/ContextAPI/ContextProvider.tsx";

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
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
