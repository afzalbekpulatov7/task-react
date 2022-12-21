import React, { Component } from "react";

// Custom components
import CategoryList from "../components/category-list/category-list.component";

// Styles
import { Loading } from "../components/global-styles";

// Images
import LoadingGif from "../assets/images/loading.gif";

export class Home extends Component {
  render() {
    const {
      category,
      products,
      hidden,
      addItemToCart,
      toggleHidden,
      displayCurrency,
      exchangePrice,
      currency,
      isLoading,
    } = this.props;

    return (
      <div>
        {isLoading ? (
          <Loading>
            <img src={LoadingGif} alt="loading" />
          </Loading>
        ) : (
          <CategoryList
            title={category}
            products={products}
            hidden={hidden}
            addItemToCart={addItemToCart}
            toggleHidden={toggleHidden}
            displayCurrency={displayCurrency}
            exchangePrice={exchangePrice}
            currency={currency}
          />
        )}
      </div>
    );
  }
}

export default Home;
