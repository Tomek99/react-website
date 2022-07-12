import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/TheGiftShop.scss";

export default function TheGiftShop() {
  return (
    <div>
      <Header />
      <div className="giftShopSection">
        <div className="giftShopHeader">
          <h1>The Gift Shop</h1>
          <p>Available in 2022</p>
        </div>

        <div className="look">
          <p>Lorem ipsum dolor hea</p>
          <button>Take a look</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
