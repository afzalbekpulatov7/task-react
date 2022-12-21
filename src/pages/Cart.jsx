import React, { Component } from "react";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import CartTotal from "../components/cart-total/cart-total.component";
import { Container, MainTitle, Overlay } from "../components/global-styles";

export class Cart extends Component {
  render() {
    const {
      cartItems,
      addItemToCart,
      removeItemFromCart,
      displayCurrency,
      itemsCount,
      exchangePrice,
      toggleHidden,
      totalPrice,
      hidden,
      currency,
    } = this.props;

    return (
      <div
        style={{
          position: "relative",
          padding: "5rem 0",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <Container>
          <MainTitle>Cart</MainTitle>
          {cartItems.length ? (
            cartItems.map((item, i) => (
              <CheckoutItem
                product={item}
                key={item.id + i}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
                displayCurrency={displayCurrency}
                exchangePrice={exchangePrice}
                currency={currency}
              />
            ))
          ) : (
            <span className="empty-message">Your cart is empty!</span>
          )}
          <CartTotal
            itemsCount={itemsCount}
            totalPrice={totalPrice}
            displayCurrency={displayCurrency}
          />
        </Container>
        <Overlay active={hidden} onClick={toggleHidden} />
      </div>
    );
  }
}

export default Cart;
