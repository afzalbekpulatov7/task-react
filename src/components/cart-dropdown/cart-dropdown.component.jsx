import React, { Component } from "react";

// Custom components
import DropdownItem from "../dropdown-item/dropdown-item.component";

// Styles
import {
  CardButton,
  CartButtons,
  CartDropdownBox,
  DropdownList,
  OutlinedLink,
  TotalMoney,
} from "./cart-dropdown.styles";

export class CartDropdown extends Component {
  render() {
    const {
      itemsCount,
      cartItems,
      displayCurrency,
      totalPrice,
      toggleHidden,
      addItemToCart,
      removeItemFromCart,
      currency,
    } = this.props;

    return (
      <CartDropdownBox>
        <h4>
          My bag: <span>{itemsCount}</span>
        </h4>
        <DropdownList>
          {cartItems.length ? (
            cartItems.map((item, i) => (
              <DropdownItem
                key={item.id + i}
                product={item}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
                toggleHidden={toggleHidden}
                displayCurrency={displayCurrency}
                currency={currency}
              />
            ))
          ) : (
            <span className="empty-message">Your cart is empty!</span>
          )}
        </DropdownList>
        <TotalMoney>
          <p>Total:</p>
          <p>
            {displayCurrency()}
            {totalPrice}
          </p>
        </TotalMoney>
        <CartButtons>
          <OutlinedLink to="cart" onClick={toggleHidden}>
            View bag
          </OutlinedLink>
          <CardButton>Check out</CardButton>
        </CartButtons>
      </CartDropdownBox>
    );
  }
}

export default CartDropdown;
