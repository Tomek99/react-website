import React from "react";
import "../styles/Women.scss";
import Header from "./Header";
import Footer from './Footer'


function Women() {
  return (
    <div>
      <Header />
      <div className="women-section">
        <div className="headerWomen">
          <h1>Women Collection</h1>
          <p>Available in 2022</p>
        </div>
        <div className="look">
          <p>We have 50 % off for all products</p>
          <button>Take a look</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Women;
