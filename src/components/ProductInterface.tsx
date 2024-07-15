import Products from "./Products";

interface ProductInterface {
  data: { id: number; name: string; price: number; image: string };
  key: number;
  // cart: {};
  dispatch?: any;
  value?: {};
}
export const initialState: CartState = {
  cart: [],
  dispatch: "string",
};
export interface CartState {
  cart: Products[];
  dispatch?: "string";
}

export type CartDispatch = (action: any) => void; // Placeholder for specific action types

export default ProductInterface;
