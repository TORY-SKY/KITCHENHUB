import { useProducts } from "./ContextAPI/ContextProvider";
import Navigationbar from "./Navbar/Navigationbar";
import emptyCart from "../assets/products/empty-cart.png";

const ProductCart = () => {
  const { state } = useProducts();
  const summaryStyle = {
    display: state.cart.length === 0 ? "none" : "block",
  };
  // const Prices = state.cart;
  // console.log(Prices[1].price);
  // const subTotalofproductnCart = state.cart.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue
  // );

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
                      <div className="remove">
                        <button>REMOVE</button>
                      </div>
                      <div className="unit-quantity">
                        <button>-</button>
                        <h4>1</h4>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div style={summaryStyle}>
              <div className="item-summary">
                <h3 className="item-s">CART SUMMARY</h3>
                <hr className="item-s" />
                <div className="item-s subtotal ">
                  <p className="item-s">Subtotal</p>
                  <h3 className="item-s">&#8358;451,000</h3>
                </div>
                <p className="item-s">Delivery fees not included yet.</p>
                <hr />
                <button className="item-s check-out-btn">CHECKOUT ({0})</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCart;
