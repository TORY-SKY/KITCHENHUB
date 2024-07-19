import { Product } from "./ContextAPI/ContextProvider";

interface ProductInterface {
  data: {
    id: number;
    name: string;
    price: number;
    image: string;
    product: Product;
  };
  // cart: {};
  dispatch?: any;
  value?: {};
}
export interface ProductCardProps {
  addToCart: (product: Product) => void;
  data: {
    id: number;
    name: string;
    price: number;
    image: string;
  };

  // data?: Product;
}

export const initialState: CartState = {
  cart: [],
  dispatch: "string",
};

export interface CartState {
  cart: [];
  dispatch?: any;
}

export type CartDispatch = (action: any) => void; // Placeholder for specific action types

export default ProductInterface;
