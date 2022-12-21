import React, { Component } from "react";

// Styles
import { ColorButton, OutlinedButton, ProductOption } from "../global-styles";

export class Option extends Component {
  render() {
    const {
      name,
      options,
      fontSize,
      justifyContent,
      selectedAttributes,
      selectAttributeHandler,
      disabled,
      type,
    } = this.props;

    return (
      <ProductOption
        key={name + "options"}
        justifyContent={justifyContent}
        fontSize={fontSize}
      >
        <h4>{name}:</h4>
        <div className={`${name.toLowerCase()}-options`}>
          {name === "Color"
            ? options.map((value) => (
                <ColorButton
                  colorTxt={value}
                  disabled={disabled}
                  type={type}
                  key={value}
                  onClick={() => selectAttributeHandler(name, value)}
                  selected={selectedAttributes[name] === value ? true : false}
                >
                  <span></span>
                </ColorButton>
              ))
            : options.map((value) => (
                <OutlinedButton
                  key={value + "option"}
                  disabled={disabled}
                  type={type}
                  onClick={() => selectAttributeHandler(name, value)}
                  active={selectedAttributes[name] === value ? true : false}
                >
                  {value}
                </OutlinedButton>
              ))}
        </div>
      </ProductOption>
    );
  }
}

export default Option;
