import React, { Component } from "react";
// Styles
import { CurrencySwitch } from "./currency-switcher.styles";

// Icons
import arrow from "../../assets/arrowdown.svg";

export class CurrecySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSwitch: false,
      currenciesSymbol: [
        { symbol: "$", name: "USD" },
        { symbol: "A$", name: "AUD" },
        { symbol: "₽", name: "RUB" },
        { symbol: "£", name: "GBP" },
        { symbol: "¥", name: "JPY" },
      ],
    };
  }

  render() {
    const { toggleSwitch, currenciesSymbol } = this.state;
    const { currency, currencyChanger, displayCurrency } = this.props;

    return (
      <CurrencySwitch
        onClick={() => this.setState({ toggleSwitch: !toggleSwitch })}
        active={toggleSwitch}
      >
        <div className="currency-select">
          {displayCurrency(currency)}
          <img src={arrow} alt="arrow" />
        </div>
        <div className="currency-options">
          {currenciesSymbol.map(({ symbol, name }) => (
            <div
              key={name + symbol}
              className="option"
              onClick={() => currencyChanger(name)}
            >
              {symbol} {name}
            </div>
          ))}
        </div>
      </CurrencySwitch>
    );
  }
}

export default CurrecySwitcher;
