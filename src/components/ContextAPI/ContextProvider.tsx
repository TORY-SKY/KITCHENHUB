import { createContext, useReducer } from "react";
import { CartState, CartDispatch, initialState } from "../ProductInterface";

import Products from "../Products";
import CartReducer from "./CartReducer";

// Define the cart state type explicitly

// Define the dispatch action type

export const CartContext = createContext<CartState>(initialState);

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer<CartReducer, CartStat>(
    CartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
