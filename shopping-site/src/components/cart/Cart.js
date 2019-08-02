import React from "react";

class Cart extends React.Component {
  componentDidMount() {
    this.setState({
      cartOverlay: this.cartOverlay,
      cartBtn: this.cartBtn,
      closeCartBtn: this.closeCartBtn,
      clearCartBtn: this.clearCartBtn,
      cartDOM: this.cartDOM,
      cartItems: this.cartItems,
      cartTotal: this.cartTotal,
      cartContent: this.cartContent
    });
  }

  render() {
    return (
      <div
        ref={cartOverlay => {
          this.cartOverlay = cartOverlay;
        }}
        className="cart-overlay"
      >
        <div
          className="cart"
          ref={cartDOM => {
            this.cartDOM = cartDOM;
          }}
        >
          <span
            className="close-cart"
            ref={closeCartBtn => {
              this.closeCartBtn = closeCartBtn;
            }}
          >
            <i className="fas fa-window-close" />
          </span>
          <h2>your cart</h2>
          <div
            className="cart-content"
            ref={cartContent => {
              this.cartContent = cartContent;
            }}
          >
            <div
              className="cart-item"
              ref={carItems => {
                this.carItems = carItems;
              }}
            >
              <img src="/static/media/product-1.23d0ef2f.jpeg" alt="product" />
              <div>
                <h4>queen bed</h4>
                <h3>$9.00</h3>
                <span className="remove-item">remove</span>
              </div>
              <div>
                <i className="fas fa-chevron-up" />
                <p className="item-amount">1</p>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          <div className="cart-footer">
            <h3>
              your total : ${" "}
              <span
                className="cart-total"
                ref={cartTotal => {
                  this.cartTotal = cartTotal;
                }}
              >
                0
              </span>
            </h3>
            <button
              className="clear-cart banner-btn"
              ref={clearCartBtn => {
                this.clearCartBtn = clearCartBtn;
              }}
            >
              clear cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
