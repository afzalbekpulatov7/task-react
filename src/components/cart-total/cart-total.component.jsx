import React, { Component } from "react";

// Styles
import { CustomButton } from "../global-styles";
import { TotalQuantity } from "./cart-total.styles";

export class CartTotal extends Component {
  render() {
    const { totalPrice, itemsCount, displayCurrency } = this.props;

    return (
      <div>
        <TotalQuantity>
          <p>Tax: 21%</p>
          <p>Quantity: {itemsCount}</p>
          <p>
            Total: {totalPrice}
            {displayCurrency()}
          </p>
        </TotalQuantity>
        <CustomButton width="280px">Order</CustomButton>
      </div>
    );
  }
}

export default CartTotal;
