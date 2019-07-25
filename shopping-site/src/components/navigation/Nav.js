import React from "react";
import logo from "../../images/logo.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <i className="fas fa-bars" />
        </span>
        <img src={logo} alt="store logo" />
        <div className="cart-btn">
          <span className="nav-icon">
            <i className="fas fa-cart-plus" />
          </span>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
