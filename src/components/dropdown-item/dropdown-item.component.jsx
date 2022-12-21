import React, { Component } from "react";

// Styles
import { ButtonGroup, OutlinedButton, ProductTitle } from "../global-styles";
import Option from "../product-option/product-option.component";
import {
  DropdownItemBox,
  DropdownItemChoice,
  DropdownItemOptions,
} from "./dropdown-item.styles";

export class DropdownItem extends Component {
  render() {
    const {
      product,
      toggleHidden,
      addItemToCart,
      removeItemFromCart,
      displayCurrency,
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
      <DropdownItemBox>
        <DropdownItemOptions>
          <ProductTitle
            fontSize="16px"
            to={`/products/${id}`}
            onClick={toggleHidden}
          >
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
              fontSize="14px"
              justifyContent="flex-start"
              selectedAttributes={selectedAttributes}
              disabled={true}
              type="small"
            />
          ))}
        </DropdownItemOptions>
        <DropdownItemChoice>
          <ButtonGroup>
            <OutlinedButton type="small" onClick={() => addItemToCart(product)}>
              +
            </OutlinedButton>
            <p>{quantity}</p>
            <OutlinedButton
              type="small"
              onClick={() => removeItemFromCart(product)}
            >
              -
            </OutlinedButton>
          </ButtonGroup>
          <div className="image">
            <img src={gallery[0]} alt="img" />
          </div>
        </DropdownItemChoice>
      </DropdownItemBox>
    );
  }
}

export default DropdownItem;
