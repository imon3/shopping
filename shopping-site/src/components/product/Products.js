import React from "react";
import { items } from "../../products.json";
import Product from "./Product.js";

const newItems = items;

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: []
    };
  }

  getItems = () => {
    this.setState({
      products: [...newItems]
    });
  };

  componentDidMount() {
    this.getItems();
  }

  getItem = id => {
    let cartItems = this.state.products.filter(
      product => product.sys.id === id
    );
    console.log(cartItems);

    this.setState({
      cart: [...cartItems]
    });
  };

  render() {
    console.log(this.state.cart);
    const { products } = this.state;

    return (
      <section className="products">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        <Product
          products={products}
          productsDOM={this.props.productsDOM}
          getItem={this.getItem}
        />
        ;
      </section>
    );
  }
}

export default Products;
