import React from "react";
import { items } from "../../products.json";
import Product from "./Product.js";

const newItems = items;

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
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

  render() {
    const { products } = this.state;

    return (
      <section className="products">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        <Product products={products} productsDOM={this.props.productsDOM} />;
      </section>
    );
  }
}

export default Products;
