import React, { Component } from "react";

import { Link } from "react-router-dom";

// Styles
import { Card, CardImg, CardInfo } from "./category-card.styles";

// Icons
import CartIcon from "../../assets/buttonCart.svg";

export class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: {},
      attributes: this.props.product.attributes.map((el) => ({
        name: el.name.split(" ").join(""),
        options: el.items.map((item) => item.value),
      })),
    };
  }

  componentDidMount() {
    const obj = {};
    this.state.attributes.forEach((el) => {
      obj[el.name] = el.options[0];
    });

    this.setState({
      selectedAttributes: obj,
    });
  }

  render() {
    const { displayCurrency, addItemToCart, product, currency } = this.props;
    const { id, name, gallery, inStock, prices } = this.props.product;
    const price = prices.find((p) => p.currency.label === currency).amount;

    return (
      <Card>
        <CardImg inStock={inStock}>
          <img src={gallery[0]} alt={name} />
          <p>out of stock</p>
        </CardImg>
        <CardInfo inStock={inStock}>
          <Link to={`/products/${id}`}>{name}</Link>
          <p>
            {displayCurrency()}
            {price}
          </p>
          <button
            disabled={inStock}
            onClick={() =>
              addItemToCart({
                ...product,
                attributes: this.state.attributes,
                selectedAttributes: this.state.selectedAttributes,
              })
            }
          >
            <img src={CartIcon} alt="Add to cart" />
          </button>
        </CardInfo>
      </Card>
    );
  }
}

export default CategoryCard;
