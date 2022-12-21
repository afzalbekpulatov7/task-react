import React, { Component } from "react";

// Custom components
import CategoryCard from "../category-card/category-card.component";

// Styles
import { CategoryCards, CategoryContainer } from "./category-list.styles";
import { MainTitle, Overlay } from "../global-styles";

export class CategoryList extends Component {
  render() {
    const {
      title,
      products,
      addItemToCart,
      displayCurrency,
      hidden,
      toggleHidden,
      currency,
    } = this.props;

    return (
      <main style={{ position: "relative" }}>
        <CategoryContainer>
          <MainTitle>{title}</MainTitle>
          <CategoryCards>
            {products.map((product) => (
              <CategoryCard
                product={product}
                key={product.id}
                addItemToCart={addItemToCart}
                displayCurrency={displayCurrency}
                currency={currency}
              />
            ))}
          </CategoryCards>
        </CategoryContainer>
        <Overlay active={hidden} onClick={toggleHidden} />
      </main>
    );
  }
}

export default CategoryList;
