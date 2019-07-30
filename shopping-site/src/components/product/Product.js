import React from "react";

const Product = props => {
  return (
    <>
      {props.products.map((product, index) => {
        const { image, price, title } = product.fields;
        return (
          <div key={index} className="products-center">
            <article className="product">
              <div className="img-container">
                <img src={image.url} alt="product" className="product-img" />
                <button className="bag-btn" data-id="1">
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
};

export default Product;
