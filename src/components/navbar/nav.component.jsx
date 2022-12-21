import React, { Component } from "react";
import { Link } from "react-router-dom";

// Custom components
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CurrecySwitcher from "../currency-switcher/currency-switcher.component";

// Styles
import { NavContainer, NavList, Settings, NavButton } from "./nav.styles";

// Icons
import logo from "../../assets/logo.svg";

export class Nav extends Component {
  render() {
    const {
      toggleHidden,
      hidden,
      itemsCount,
      totalPrice,
      categoryChanger,
      category,
      currency,
      currencyChanger,
      cartItems,
      addItemToCart,
      removeItemFromCart,
      displayCurrency,
      exchangePrice,
      categoriesName,
    } = this.props;

    return (
      <nav>
        <NavContainer>
          <NavList>
            {categoriesName.map((name) => (
              <li key={name + "nav-link"}>
                <NavButton
                  active={category === name ? "true" : ""}
                  onClick={() => categoryChanger(name)}
                  to="/"
                >
                  {name}
                </NavButton>
              </li>
            ))}
          </NavList>
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="site logo" />
            </Link>
          </div>
          <Settings>
            <CurrecySwitcher
              currency={currency}
              currencyChanger={currencyChanger}
              displayCurrency={displayCurrency}
            />
            <CartIcon toggleHidden={toggleHidden} itemsCount={itemsCount} />
          </Settings>
          {hidden ? (
            <CartDropdown
              itemsCount={itemsCount}
              totalPrice={totalPrice}
              cartItems={cartItems}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              toggleHidden={toggleHidden}
              displayCurrency={displayCurrency}
              exchangePrice={exchangePrice}
              currency={currency}
            />
          ) : (
            ""
          )}
        </NavContainer>
      </nav>
    );
  }
}

export default Nav;
