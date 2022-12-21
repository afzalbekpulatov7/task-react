import styled from "styled-components";

export const Card = styled.div`
  padding: 15px;
  background-color: #fff;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover button {
    opacity: 1;
    transform: translateY(0%);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: 338px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(256, 256, 256, 0.5);
    z-index: 1;
    display: ${(props) => (props.inStock ? "block" : "none")};
  }

  p {
    z-index: 2;
    text-align: center;
    text-transform: uppercase;
    color: #8d8f9a;
    font-size: 24px;
    display: ${(props) => (props.inStock ? "block" : "none")};
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
`;

export const CardInfo = styled.div`
  padding: 24px 0;
  color: ${(props) => (props.outOfStock ? "#8D8F9A" : "#1D1F22")};
  position: relative;
  a {
    pointer-events: ${(props) => (props.outOfStock ? "none" : "all")};
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #00ce7b;
  
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: inherit;
  }
  button[disabled] {
    background-color: #8d8f9a;
    cursor: no-drop;

    &:hover {
    background-color: #8d8f9a;
    }
  }
  button {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    background-color: #5ece7b;
    position: absolute;
    top: -26px;
    right: 16px;
    opacity: 0;
    z-index: 3;
    transform: translateY(10%);
    transition: all 0.3s ease;
    transition-property: transform, opacity;
    cursor: pointer;
    &:hover {
      background-color: #0ece70;
    }
  }
`;
