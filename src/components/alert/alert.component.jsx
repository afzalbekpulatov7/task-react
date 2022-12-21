import React, { Component } from "react";

// Styles
import { AlertStyles } from "./alert.styles";

// Images
import SuccessIcon from "../../assets/images/success.png";
import ErrorIcon from "../../assets/images/error.png";

export class Alert extends Component {
  render() {
    const { type, message } = this.props;

    return (
      <AlertStyles>
        <img src={type === "success" ? SuccessIcon : ErrorIcon} alt="success" />
        {message}
      </AlertStyles>
    );
  }
}

export default Alert;
