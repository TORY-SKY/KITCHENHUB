import ProductCard from "./ProductCard";
import Products from "./Products";
import card1 from "../assets/products/payment_icon1.png";
import card2 from "../assets/products/payment_icon2.png";
import card3 from "../assets/products/payment_icon3.png";
import Navigationbar from "./Navbar/Navigationbar";
import { useState } from "react";
import { useProducts, Product } from "./ContextAPI/ContextProvider";

const Home: React.FC = () => {
  const [productState] = useState(Products);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = productState.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const { dispatch } = useProducts();
  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="homepage-containe-div">
      <Navigationbar handleSearch={handleSearch} />

      <div className="Hero-section">
        <div className="hero-text">
          <p className="discount-notfication-text">SALES UP TO 30% OFF</p>
          <h1 className="cathy-text">Kitchen Gadgets & Utensils Store</h1>
          <p className="sub-catchy-text">
            "Elevate your culinary space. embrace innovative kitchenware that
            defines cutting-edge style."
          </p>
          <div className="Shop-now-btn">
            <button>SHOP NOW</button>
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* hero section end */}
      {/*  */}
      <section className="m-main">
        <div className="cols">
          <svg
            width="39"
            height="30"
            viewBox="0 0 39 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_976)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0825 27.0858L12.6667 17.7933L17.3735 17.627C19.3826 17.875 21.4233 18.7656 23.4673 19.8113L27.1235 19.6816C28.7834 19.7126 29.7166 21.1698 28.1519 22.207C26.9077 23.0864 25.2129 23.1005 23.4736 23.0216C22.2771 23.0103 22.2866 24.4393 23.5339 24.4026C23.9688 24.4167 24.4353 24.3096 24.8479 24.2955C27.0125 24.2166 28.7771 23.7882 29.7991 22.2296L30.2974 21.074L35.6294 18.4866C38.3145 17.596 40.1235 19.8423 38.197 21.6715C34.3726 24.3547 30.6655 26.804 26.6094 28.6416C23.6799 30.3694 20.6775 30.4201 17.6052 28.9601L13.0825 27.0858ZM37.2163 4.19968L37.2671 13.2273C37.2703 13.698 36.9338 14.1039 36.4609 14.2758V14.2786L27.625 17.4494C27.5488 17.4607 27.4727 17.4691 27.3933 17.4691C27.2219 17.4691 27.0537 17.4381 26.895 17.3789L18.1987 14.4252V14.4223C17.729 14.2476 17.3989 13.8305 17.3989 13.3429L17.4465 4.4308C17.4402 4.33497 17.4465 4.23914 17.4656 4.14331C17.4688 4.00803 17.5005 3.87274 17.5608 3.74873C17.6973 3.4556 17.9607 3.23858 18.2749 3.12584L26.7744 0.0875077C27.1204 -0.0365058 27.4917 -0.0224133 27.8091 0.0987817L36.2927 2.82426C36.8005 2.98773 37.1211 3.3936 37.1433 3.83046C37.1909 3.94884 37.2163 4.07285 37.2163 4.19968ZM25.7271 15.5723L25.7905 7.7087L18.9858 5.09596L18.843 12.9934L25.7271 15.5723ZM35.7627 5.09878L28.1582 7.71152L28.2185 15.5666L35.8071 13.0497L35.7627 5.09878ZM0 17.4719L11.21 16.9477L11.7083 28.0667L0.498291 28.5881L0 17.4719Z"
                fill="url(#paint0_linear_46_976)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_46_976"
                x1="19.5002"
                y1="0.000946045"
                x2="19.5002"
                y2="30.0003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#006D77" />
                <stop offset="1" stop-color="#00CADD" />
              </linearGradient>
              <clipPath id="clip0_46_976">
                <rect width="39" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h3 className="free-delivery-1">Free delivery</h3>
          <p className="free-delivery-1">Free delivery on all order over $50</p>
        </div>
        <div className="cols">
          <svg
            width="37"
            height="31"
            viewBox="0 0 37 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_981)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.85645 27.0957V15.8803H12.9688C15.1455 16.2592 17.3018 17.416 19.4697 18.7724H23.4395C25.2383 18.8794 26.1787 20.6782 24.4326 21.8582C23.041 22.8675 21.21 22.8097 19.3174 22.6448C18.0195 22.5812 17.9639 24.2991 19.3174 24.3078C19.7891 24.3454 20.3018 24.2355 20.7471 24.2355C23.0908 24.2355 25.0332 23.7901 26.2168 21.9565L26.8027 20.5857L32.7207 17.6936C35.6768 16.7335 37.7803 19.7846 35.6006 21.9074C31.4804 24.8797 27.0722 27.4421 22.4404 29.5569C19.1797 31.5148 15.9189 31.4483 12.667 29.5569L7.85645 27.0957ZM15.3271 0L34.4053 5.68579L31.5371 15.5709L30.1953 15.3684L32.2461 8.13826L32.2754 8.04571C32.3662 7.71592 32.321 7.36405 32.1497 7.06706C31.9784 6.77007 31.695 6.55212 31.3613 6.46086L30.7168 6.28734V6.2671L27.6816 5.47467L14.8936 1.48941L15.3271 0ZM12.1719 1.99552L31.2617 7.67842L28.3818 17.5635L9.30371 11.8806L12.1719 1.99552ZM18.8193 8.28865C19.1405 7.9512 19.5559 7.71541 20.0129 7.61114C20.4699 7.50686 20.9479 7.53878 21.3866 7.70287C21.8252 7.86695 22.2046 8.15581 22.4768 8.53288C22.749 8.90994 22.9018 9.35827 22.9157 9.82108C22.9297 10.2839 22.8042 10.7404 22.5552 11.1328C22.3062 11.5252 21.9449 11.8358 21.5169 12.0254C21.089 12.2149 20.6137 12.2748 20.1512 12.1976C19.6887 12.1203 19.2599 11.9094 18.9189 11.5914C18.4629 11.166 18.1963 10.5795 18.1776 9.96034C18.1589 9.34122 18.3897 8.74005 18.8193 8.28865ZM14.9551 4.4075L27.5791 8.27129C27.4675 8.65708 27.5147 9.07078 27.7106 9.42231C27.9065 9.77385 28.2352 10.0348 28.625 10.1482L27.5059 14.0583C27.3116 14.0036 27.1083 13.9871 26.9075 14.01C26.7068 14.0328 26.5126 14.0945 26.3361 14.1915C26.1595 14.2884 26.004 14.4188 25.8785 14.5751C25.7529 14.7313 25.6599 14.9105 25.6045 15.1023L12.9775 11.2385C13.0889 10.852 13.0409 10.4376 12.8438 10.0859C12.6467 9.73427 12.3167 9.47386 11.9258 9.3616L13.0566 5.45153C13.2511 5.50671 13.4547 5.52346 13.6558 5.50082C13.8568 5.47819 14.0514 5.41662 14.2283 5.31963C14.4052 5.22264 14.5609 5.09215 14.6867 4.93563C14.8124 4.77911 14.9056 4.59964 14.9609 4.4075H14.9551ZM0.5 14.8131H6.31836V28.2236H0.5V14.8131Z"
                fill="url(#paint0_linear_46_981)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_46_981"
                x1="18.5"
                y1="0"
                x2="18.5"
                y2="31.0005"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#006D77" />
                <stop offset="1" stop-color="#00CADD" />
              </linearGradient>
              <clipPath id="clip0_46_981">
                <rect
                  width="36"
                  height="31"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <h3 className="free-delivery-1">Money back</h3>
          <p className="free-delivery-1">30 Days money return guaranteed</p>
        </div>
        <div className="cols">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_46_985)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7311 18.3533C10.3405 17.7331 10.0084 17.0786 9.73886 16.3981C7.60435 15.2074 7.26344 9.91203 8.57874 10.3131C8.57874 10.1138 8.54313 9.55631 8.54313 9.17285C8.54313 0.577715 22.4696 0.57267 22.4696 9.17285C22.4696 9.5664 22.4289 10.1138 22.434 10.3131C23.7467 9.90446 23.4058 15.1998 21.2739 16.3981C20.732 17.8866 19.7652 18.8856 19.8441 19.539C19.8441 21.7817 17.3585 22.5941 15.5191 22.6143C15.3512 22.6143 15.1807 22.6143 15.0103 22.589C15.414 22.4826 15.801 22.3213 16.1602 22.1097C16.9514 21.6304 17.4857 20.9215 17.4857 20.0713C17.4857 19.2211 16.954 18.5072 16.1627 18.0304C15.4375 17.6082 14.6122 17.3845 13.7713 17.382C13.118 17.3699 12.4688 17.4856 11.8606 17.7226C11.4833 17.8744 11.1381 18.0952 10.843 18.3735H10.7489L10.7311 18.3533ZM25.5505 7.97453H25.4564C24.5837 4.30892 22.3398 1.76595 19.666 0.713945C18.1007 0.127942 16.4229 -0.103078 14.7558 0.0378387C13.1138 0.164939 11.5163 0.628837 10.0645 1.40014C8.85176 2.06723 7.81717 3.01181 7.04677 4.15531C6.27637 5.29881 5.79243 6.60818 5.63521 7.97453H5.45966C4.62011 7.97453 3.77037 8.6582 3.77037 9.4882V14.9551C3.77037 15.7876 4.62011 16.4687 5.45966 16.4687H5.95577C6.49766 18.651 8.69323 20.649 10.9397 20.649H11.3798C11.764 21.2091 12.5094 21.6051 13.7509 21.6051C14.9924 21.6051 16.3154 20.9114 16.3154 20.0587C16.3154 19.206 15.0103 18.5147 13.7509 18.5147C12.4916 18.5147 11.7284 18.9209 11.3569 19.5062H10.9397C9.02142 19.5062 7.12351 17.488 6.98867 15.6665V8.07291C7.13192 6.93042 7.54414 5.83734 8.19203 4.88198C8.83992 3.92661 9.70532 3.13574 10.7183 2.57324C12.0006 1.89717 13.4097 1.49093 14.8576 1.37996C16.3194 1.25523 17.7908 1.45517 19.1648 1.96525C21.3807 2.83309 23.2506 4.99259 24.0571 7.97453H24.024V16.4687H25.5505C26.3901 16.4687 27.2398 15.7876 27.2398 14.9551V9.49072C27.2398 8.65568 26.3901 7.97705 25.5505 7.97705V7.97453ZM16.4324 26.348H16.9056C17.108 26.348 17.3022 26.2682 17.4453 26.1263C17.5884 25.9844 17.6689 25.7919 17.6689 25.5911V24.3298C17.6689 24.129 17.5884 23.9365 17.4453 23.7946C17.3022 23.6527 17.108 23.5729 16.9056 23.5729H14.1071C13.9057 23.5762 13.7135 23.6569 13.571 23.7982C13.4286 23.9394 13.3471 24.13 13.3439 24.3298V25.5911C13.3478 25.7907 13.4294 25.9809 13.5717 26.122C13.714 26.2631 13.9059 26.3441 14.1071 26.348H14.5778L13.6517 30.9975H17.3178L16.4324 26.3455V26.348ZM0 31C0.363808 26.3228 -0.562249 26.512 3.38876 25.0462C5.40782 24.3122 7.34903 23.3827 9.18424 22.2712L12.5603 31.0076L0 31ZM21.9811 21.865C23.657 22.9205 25.4573 23.7678 27.3416 24.3878C31.0305 25.6038 31.0305 25.7753 30.9949 30.9899H18.483L21.9811 21.865Z"
                fill="url(#paint0_linear_46_985)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_46_985"
                x1="15.5005"
                y1="-0.00231934"
                x2="15.5005"
                y2="31.0076"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#006D77" />
                <stop offset="1" stop-color="#00CADD" />
              </linearGradient>
              <clipPath id="clip0_46_985">
                <rect width="31" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3 className="free-delivery-1">24 hours support</h3>
          <p className="free-delivery-1">service support lasts 24/7</p>
        </div>
      </section>

      {/* new arrival section */}
      <div className="productPage">
        <div className="cols">
          <h3 className="free-delivery-1">Free delivery</h3>
          <p className="free-delivery-1">
            Explore Our Latest Kitchen gadgets and trnasform your cooking
            Experience!
          </p>
        </div>

        <div className="card-container the-carousel">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        <div className="cols">
          <h3 className="free-delivery-1">Featured Product</h3>
          <p className="free-delivery-1">"Top Picks of the Month"</p>
        </div>
        <div className="card-container">
          {Products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </div>
        <div className="cols">
          <h3 className="free-delivery-1">Featured Product</h3>
          <p className="free-delivery-1">"Top Picks of the Month"</p>
        </div>
        {/* scroll up icon */}
        <button className="scoll-up-btn" onClick={handleScrollUp}>
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17V1M7 1L13 7M7 1L1 7"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <section className="Newsletter-container">
        <div className="news-lre">
          <h1 className="to-our-news-letter">Subscribe To Our Newsletter</h1>
          <p className="subscribe-to-news-letter">
            Subscribe to our newsletter and save 10% off your next purchase
          </p>
        </div>
        <div className="enter-email-subscribe">
          <input type="email" placeholder="Enter your email" />
          <button type="button" className="btn ">
            SUBSCRIBE
          </button>
        </div>
      </section>
      <footer className="footer-container-div">
        <div className="footer-section">
          <div className="rows">
            <h1 className="logo-text">KitchenHub</h1>
            <p>@Copyright 2024</p>
            <div className="transaction-card">
              <img src={card1} alt="payment-card" />
              <img src={card2} alt="payment-card" />
              <img src={card3} alt="payment-card" />
            </div>
          </div>
          <div className="rows">
            <h1>Company</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="rows">
            <h1>Useful Links</h1>
            <p>Sign In</p>
            <p>Register</p>
            <p>FAQs</p>
          </div>
          <div className="rows">
            <h1>Connect with us?</h1>
            <p>123NY Cresent, New York City.</p>
            <p>555 - 5555-5555</p>
            <p>Info@KitchenHub.Uk</p>
            <div className="socials"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
