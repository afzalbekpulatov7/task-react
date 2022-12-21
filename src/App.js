import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import gql from "graphql-tag";

// Custom components
import Nav from "./components/navbar/nav.component";
import ProductDescription from "./pages/ProductDescription";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// Styles
import "./App.css";

// gql
import GET_PRODUCTS, { client } from "./graphql/queries";
import Alert from "./components/alert/alert.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      itemsCount: JSON.parse(localStorage.getItem("itemsCount")),
      totalPrice: JSON.parse(localStorage.getItem("totalPrice")),
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
      category: "all",
      products: [],
      currency: "USD",
      categoriesName: [],
      categories: {},
      isLoading: true,
      alertType: "success",
      message: "",
      alertOpen: false,
    };
  }

  toggleHidden = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };
  showAlert = (message, type) => {
    if (this.state.alertOpen) return;

    this.setState({
      alertType: type,
      message,
      alertOpen: true,
    });

    setTimeout(() => {
      this.setState({
        alertType: "success",
        message: "",
        alertOpen: false,
      });
    }, 4000);
  };

  categoryChanger = (category) => {
    this.setState({
      category,
      products: this.state.categories[category].products,
    });
  };

  currencyChanger = (currency) => {
    this.setState({
      currency,
    });

    this.calcTotalPrice(this.state.cartItems, currency);
  };

  addItemToCart = (item) => {
    let newCartItems = [];
    const existingCartItem = this.state.cartItems.find(
      (cartItem) => cartItem.selectedAttributes === item.selectedAttributes
    );

    if (existingCartItem) {
      newCartItems = this.state.cartItems.map((cartItem) =>
        cartItem.selectedAttributes === item.selectedAttributes
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      this.setState({
        cartItems: newCartItems,
      });
      this.updateItemsCount(newCartItems, "added");
      return;
    }

    newCartItems = [...this.state.cartItems, { ...item, quantity: 1 }];

    this.setState({
      cartItems: newCartItems,
    });
    this.updateItemsCount(newCartItems, "added");

    return;
  };

  removeItemFromCart = (item) => {
    let newCartItems = [];
    const existingCartItem = this.state.cartItems.find(
      (cartItem) => cartItem.selectedAttributes === item.selectedAttributes
    );

    if (existingCartItem.quantity === 1) {
      newCartItems = this.state.cartItems.filter(
        (cartItem) => cartItem.selectedAttributes !== item.selectedAttributes
      );
      this.setState({
        cartItems: newCartItems,
      });
      this.updateItemsCount(newCartItems, "removed");
      return;
    }

    newCartItems = this.state.cartItems.map((cartItem) =>
      cartItem.selectedAttributes === item.selectedAttributes
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

    this.setState({
      cartItems: newCartItems,
    });

    this.updateItemsCount(newCartItems, "removed");

    return;
  };

  updateItemsCount = (cartItems = this.state.cartItems, text) => {
    let nr = cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    );

    this.showAlert(`Product ${text} successfully to your cart!`, "success");

    this.setState({ itemsCount: nr });
    this.calcTotalPrice(cartItems, this.state.currency);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("itemsCount", JSON.stringify(nr));
  };

  calcTotalPrice = (cartItems, currency) => {
    const total = cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity +
        cartItem.quantity *
          cartItem.prices.find((price) => price.currency.label === currency)
            .amount,
      0
    );
    this.setState({ totalPrice: total.toFixed(2) });
    localStorage.setItem("totalPrice", JSON.stringify(total.toFixed(2)));
  };

  displayCurrency = () => {
    let result = "";
    switch (this.state.currency) {
      case "USD":
        result = <>&#36;</>;
        break;
      case "AUD":
        result = <>A&#36;</>;
        break;
      case "JPY":
        result = <>&yen;</>;
        break;
      case "RUB":
        result = <>&#8381;</>;
        break;
      case "GBP":
        result = <>&#163;</>;
        break;
      default:
        break;
    }
    return result;
  };

  fetchData() {
    client
      .query({
        query: gql`
          ${GET_PRODUCTS}
        `,
      })
      .then((result) => {
        let newObj = {};
        result.data.categories.forEach((element) => {
          newObj[element.name] = {
            title: element.name,
            products: element.products,
          };
        });
        this.setState({
          isLoading: false,
          categories: newObj,
          categoriesName: result.data.categories.map(
            (category) => category.name
          ),
          category: result.data.categories.map((category) => category.name)[0],
          products: result.data.categories.map(
            (category) => category.products
          )[0],
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        {this.state.alertOpen && (
          <Alert type={this.state.alertType} message={this.state.message} />
        )}

        <Nav
          hidden={this.state.hidden}
          toggleHidden={this.toggleHidden}
          itemsCount={this.state.itemsCount}
          totalPrice={this.state.totalPrice}
          addItemToCart={this.addItemToCart}
          removeItemFromCart={this.removeItemFromCart}
          cartItems={this.state.cartItems}
          categoryChanger={this.categoryChanger}
          category={this.state.category}
          currencyChanger={this.currencyChanger}
          currency={this.state.currency}
          displayCurrency={this.displayCurrency}
          categoriesName={this.state.categoriesName}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                hidden={this.state.hidden}
                addItemToCart={this.addItemToCart}
                toggleHidden={this.toggleHidden}
                category={this.state.category}
                products={this.state.products}
                displayCurrency={this.displayCurrency}
                currency={this.state.currency}
                isLoading={this.state.isLoading}
              />
            }
          />
          <Route
            exact
            path="/products/:id"
            element={
              <ProductDescription
                hidden={this.state.hidden}
                addItemToCart={this.addItemToCart}
                toggleHidden={this.toggleHidden}
                products={this.state.products}
                displayCurrency={this.displayCurrency}
                currency={this.state.currency}
                isLoading={this.state.isLoading}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                hidden={this.state.hidden}
                cartItems={this.state.cartItems}
                addItemToCart={this.addItemToCart}
                removeItemFromCart={this.removeItemFromCart}
                itemsCount={this.state.itemsCount}
                totalPrice={this.state.totalPrice}
                toggleHidden={this.toggleHidden}
                displayCurrency={this.displayCurrency}
                currency={this.state.currency}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
