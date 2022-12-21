import React, { Component } from "react";

// Styles
import {
  CustomButton,
  ProductOption,
  ProductTitle,
  Overlay,
} from "../global-styles";
import Option from "../product-option/product-option.component";
import {
  ProductImage,
  DetailsContainer,
  ImagesList,
  PreviewImage,
  ProductInfo,
  ProductInfoText,
} from "./product-details.styles";

export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: {},
      previewImage: this.props.product.gallery[0],
      attributes: this.props.product.attributes.map((el) => ({
        name: el.name.split(" ").join(""),
        options: el.items.map((item) => item.value),
      })),
    };
  }

  selectAttributeHandler = (name, value) => {
    this.setState({
      selectedAttributes: { ...this.state.selectedAttributes, [name]: value },
    });
  };

  selectPreviewImageHandler = (image) => {
    this.setState({ previewImage: image });
  };

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
    const {
      product,
      addItemToCart,
      hidden,
      toggleHidden,
      displayCurrency,
      currency,
    } = this.props;

    const { previewImage, attributes, selectedAttributes } = this.state;

    const { gallery, name, description, prices, brand, inStock } = product;
    const price = prices.find((p) => p.currency.label === currency).amount;

    return (
      <div style={{ position: "relative" }}>
        <DetailsContainer>
          <ProductImage>
            <ImagesList>
              {gallery.map((image) => (
                <li
                  onClick={() => this.selectPreviewImageHandler(image)}
                  key={image}
                >
                  <img src={image} alt="image2" />
                </li>
              ))}
            </ImagesList>

            <PreviewImage>
              <img src={previewImage} alt={name} />
            </PreviewImage>
          </ProductImage>
          <ProductInfo>
            <ProductTitle fontSize="30px">{name}</ProductTitle>
            <ProductInfoText fontSize="20px">{brand}</ProductInfoText>
            {attributes.map(({ name, options }) => (
              <Option
                key={name}
                name={name}
                options={options}
                fontSize="18px"
                justifyContent="space-between"
                selectedAttributes={selectedAttributes}
                selectAttributeHandler={this.selectAttributeHandler}
                disabled={false}
                type=""
              />
            ))}
            <ProductOption>
              <h4>Price:</h4>
              <div>
                <p>
                  {displayCurrency()}
                  {price}
                </p>
              </div>
            </ProductOption>
            <CustomButton
              disabled={inStock}
              width="100%"
              onClick={() =>
                addItemToCart({
                  ...product,
                  attributes,
                  selectedAttributes: selectedAttributes,
                })
              }
            >
              {inStock ? "Out of stock" : "Add to Cart"}
            </CustomButton>
            <ProductInfoText
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></ProductInfoText>
          </ProductInfo>
        </DetailsContainer>
        <Overlay active={hidden} onClick={toggleHidden} />
      </div>
    );
  }
}

export default ProductDetails;
