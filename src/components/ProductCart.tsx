import { useProducts } from "./ContextAPI/ContextProvider";
import Navigationbar from "./Navbar/Navigationbar";
import emptyCart from "../assets/products/empty-cart.png";

const ProductCart = () => {
  const { state } = useProducts();

  // const { id, category, image, price } = props.data;
  // // console.log(id);
  return (
    <div>
      <Navigationbar />
      <section className="CART">
        <div className="cart-item-container">
          <div className="Cart-lenght">
            <h1>Cart ({state.cart.length})</h1>
          </div>
          <div className="cart-item">
            <hr />
            <div className="item">
              {state.cart.length == 0 ? (
                <div className="Empty-cart-text emty-cart-container">
                  <img src={emptyCart} alt="empty-cart" />
                  <p className="Empty-cart-text">
                    Cart is empty for now dawg, go do some shopping first
                  </p>
                </div>
              ) : (
                state.cart.map((item, index) => (
                  <div className="cart-item-card" key={index}>
                    <div className="cart-img">
                      <div className="item-here">
                        <img src={item.image} alt="" />
                        <div className="some-details">
                          <p>{item.name}</p>
                          <p className="units">Few units left</p>
                          <h4>${item.price}.00</h4>
                        </div>
                      </div>
                      <div className="item-detail">
                        <h3>{item.price}</h3>
                      </div>
                    </div>
                    <div className="remove-item">
                      <div className="remove">REMOVE</div>
                      <div className="unit-quantity">
                        <button>-</button>
                        <button>-</button>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="item-summary">
              <h3>CART SUMMARY</h3>
              <hr />
              <div className="subtotal">
                <p>Subtotal</p>
                <h3>&#8358;451,000</h3>
              </div>
              <p>Delivery fees not included yet.</p>
              <hr />
              <button>CHECKOUT ({0})</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCart;
