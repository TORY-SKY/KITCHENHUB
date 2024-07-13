import { createContext, useReducer } from "react";
import ProductInterface from "../ProductInterface";
import CartReducer from "./CartReducer";

export const CartContext = createContext<ProductInterface>(
  {} as ProductInterface
);

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <ContextProvider.Provider
      value={{ cart, dispatch }}
    ></ContextProvider.Provider>
  );
};

export default ContextProvider;
