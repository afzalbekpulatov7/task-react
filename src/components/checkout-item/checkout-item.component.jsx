import React, { Component } from "react";

// Styles
import { ButtonGroup, OutlinedButton, ProductTitle } from "../global-styles";
import Option from "../product-option/product-option.component";
import {
  CardItemBox,
  CardItemChoice,
  CardItemOptions,
} from "./checkout-item.style";

export class CheckoutItem extends Component {
  render() {
    const {
      product,
      displayCurrency,
      addItemToCart,
      removeItemFromCart,
      currency,
    } = this.props;

    const {
      id,
      name,
      prices,
      gallery,
      quantity,
      attributes,
      selectedAttributes,
    } = product;

    const price = prices.find((p) => p.currency.label === currency).amount;

    return (
      <CardItemBox>
        <CardItemOptions>
          <ProductTitle fontSize="30px" to={`/products/${id}`}>
            {name}
          </ProductTitle>
          <p>
            {displayCurrency()}
            {price}
          </p>
          {attributes.map(({ name, options }) => (
            <Option
              key={name}
              name={name}
              options={options}
              fontSize="18px"
              justifyContent="flex-start"
              selectedAttributes={selectedAttributes}
              disabled={true}
              type=""
            />
          ))}
        </CardItemOptions>
        <CardItemChoice>
          <ButtonGroup>
            <OutlinedButton onClick={() => addItemToCart(product)}>
              +
            </OutlinedButton>
            <p>{quantity}</p>
            <OutlinedButton onClick={() => removeItemFromCart(product)}>
              -
            </OutlinedButton>
          </ButtonGroup>
          <div className="image">
            <img src={gallery[0]} alt="img" />
          </div>
        </CardItemChoice>
      </CardItemBox>
    );
  }
}

export default CheckoutItem;
