import React, { Component } from "react";

// Styles
import { CartIconDiv } from "./cart-icon.styles";

// Icons
import cart from "../../assets/Cart.svg";

class CartIcon extends Component {
  render() {
    const { toggleHidden, itemsCount } = this.props;
    return (
      <CartIconDiv onClick={toggleHidden}>
        {itemsCount === 0 ? null : <span className="count">{itemsCount}</span>}
        <img src={cart} alt="cart" />
      </CartIconDiv>
    );
  }
}

export default CartIcon;
