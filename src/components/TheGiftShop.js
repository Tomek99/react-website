import React from "react";
import Header from "./Header";
import "../styles/TheGiftShop.scss";

export default function TheGiftShop() {
  return (
    <div className="giftShopSection">
      <Header />
      <div>
        <div className="giftShopHeader">
          <h1>The Gift Shop</h1>
          <p>Available in 2022</p>
        </div>

        <div className="look">
          <p>Lorem ipsum dolor hea</p>
          <button>Take a look</button>
        </div>
      </div>
    </div>
  );
}
