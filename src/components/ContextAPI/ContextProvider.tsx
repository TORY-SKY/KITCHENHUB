import React, { createContext, useContext, useReducer, ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface State {
  products: Product[];
  cart: CartItem[];
}

interface Action {
  type:
    | "ADD_TO_CART"
    | "REMOVE_FROM_CART"
    | "INCREASE_QUANTITY"
    | "DECREASE_QUANTITY";
  payload: Product;
}

export const initialState: State = {
  products: [],
  cart: [],
};

const ProductsContext = createContext<{
  // typescript
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Reducer function for the contextAPI
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case "INCREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  item.quantity >= 10 ? item.quantity : item.quantity + 1,
              }
            : item
        ),
      };
    }
    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    default:
      return state;
  }
};

export const ProductsProvider = ({
  children,
  products,
}: {
  children: ReactNode;
  products: Product[];
}) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, products });

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
