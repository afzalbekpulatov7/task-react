import React, { Component } from "react";

// Custom components
import withRouter from "../withRouter";
import ProductDetails from "../components/product-details/product-details.component";

// Styles
import { Loading } from "../components/global-styles";

// Images
import LoadingGif from "../assets/images/loading.gif";

export class ProductDescription extends Component {
  render() {
    const {
      hidden,
      toggleHidden,
      addItemToCart,
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
          <ProductDetails
            product={this.props.products.find(
              (el) => el.id === this.props.params.id
            )}
            hidden={hidden}
            toggleHidden={toggleHidden}
            addItemToCart={addItemToCart}
            displayCurrency={displayCurrency}
            exchangePrice={exchangePrice}
            currency={currency}
          />
        )}
      </div>
    );
  }
}

export default withRouter(ProductDescription);
