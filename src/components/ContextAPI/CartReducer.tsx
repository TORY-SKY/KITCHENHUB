import { CartState } from "../ProductInterface";
const CartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case "Add":
    case "Remove":
    case "Increase":
    case "Decrease":
    default:
      state;
  }
};

export default CartReducer;
