import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/navigation/Nav";
import Hero from "./components/hero/Hero";
import Products from "./components/product/Products";
import Cart from "./components/cart/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOverlay: "",
      cartBtn: "",
      closeCartBtn: "",
      clearCartBtn: "",
      cartDOM: "",
      cartItems: "",
      cartTotal: "",
      cartContent: "",
      productsDOM: [],
      cart: []
    };
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <Nav {...props} />} />
        <Route path="/" exact render={props => <Hero {...props} />} />
        <Route
          path="/"
          render={props => <Products {...props} state={this.state} />}
        />
        <Route
          path="/"
          render={props => <Cart {...props} state={this.state} />}
        />
      </div>
    );
  }
}

export default App;
