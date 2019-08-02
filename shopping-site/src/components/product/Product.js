import React from "react";

import "../../images/product-1.jpeg";
import "../../images/product-2.jpeg";
import "../../images/product-3.jpeg";
import "../../images/product-4.jpeg";
import "../../images/product-5.jpeg";
import "../../images/product-6.jpeg";
import "../../images/product-7.jpeg";
import "../../images/product-8.jpeg";

class Product extends React.Component {
  componentDidMount() {
    this.setState({
      productsDOM: this.productsDOM
    });
  }

  render() {
    // console.log(this.props);
    return (
      <>
        {this.props.products.map((product, index) => {
          const { image, price, title } = product.fields;
          const { id } = product.sys;
          return (
            <div
              key={index}
              className="products-center"
              ref={productsDOM => {
                this.productsDOM = productsDOM;
              }}
            >
              <article className="product">
                <div className="img-container">
                  <img src={image.url} alt="product" className="product-img" />
                  <button
                    className="bag-btn"
                    data-id="1"
                    onClick={() => this.props.getItem(id)}
                  >
                    <i className="fas fa-shopping-cart"> add to bag</i>
                  </button>
                </div>
                <h3>{title}</h3>
                <h4>${price}</h4>
              </article>
            </div>
          );
        })}
      </>
    );
  }
}

export default Product;
