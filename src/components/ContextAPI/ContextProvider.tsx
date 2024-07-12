import { createContext } from "react";
import ProductInterface from "../ProductInterface";

export const CartContext = createContext<ProductInterface>(
  {} as ProductInterface
);

const ContextProvider = () => {
  return <div></div>;
};

export default ContextProvider ;
