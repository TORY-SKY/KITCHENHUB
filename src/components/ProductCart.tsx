import { useProducts, Product } from "./ContextAPI/ContextProvider";
import Navigationbar from "./Navbar/Navigationbar";
import emptyCart from "../assets/products/empty-cart.png";
import { useState } from "react";

const ProductCart = () => {
  const { state, dispatch } = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Search function
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const summaryStyle = {
    display: state.cart.length === 0 ? "none" : "block",
  };

  // function to remove product from cart by clicking the 'REMOVE' button

  const addToCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  const IncreaseQuantity = (product: Product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };
  const DecreaseQuantity = (product: Product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  // function to sum up cart item price(using .reduce())
  const totalPrice = state.cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <Navigationbar value={searchTerm} handleSearch={handleSearch} />
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
                        <button onClick={() => addToCart(item)}>REMOVE</button>
                      </div>
                      <div className="unit-quantity">
                        <button onClick={() => DecreaseQuantity(item)}>
                          -
                        </button>
                        <h4 className="item-quantity">{item.quantity}</h4>
                        <button onClick={() => IncreaseQuantity(item)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div style={summaryStyle} className="summ">
              <div className="item-summary">
                <h3 className="item-s">CART SUMMARY</h3>
                <hr className="item-s" />
                <div className="item-s subtotal ">
                  <p className="item-s">Subtotal</p>
                  <h3 className="item-s">${totalPrice}.00</h3>
                </div>
                <p className="item-s">Delivery fees not included yet.</p>
                <hr />
                <button className="item-s check-out-btn">
                  CHECKOUT (${totalPrice}.00)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCart;
