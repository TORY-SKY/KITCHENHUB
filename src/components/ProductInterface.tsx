import { dispatch } from "/";
interface ProductInterface {
  data: { id: number; name: string; price: number; image: string };
  key: number;
  // cart: {};
  dispatch?: any;
  value?: {};
}
export default ProductInterface;
