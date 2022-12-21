import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const CustomButton = styled.button`
  background: #5ece7b;
  display: inline-block;
  color: #fff;
  padding: 1rem 2rem;
  width: ${(props) => props.width};
  text-transform: uppercase;
  border: none;
  margin: 1rem 0;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    background-color: #10ce7b;
  }
  &:active {
    transform: scale(0.95);
  }
  &[disabled] {
    background-color: #8d8f9a;
    cursor: no-drop;

    &:hover {
      background-color: #8d8f90;
    }
    &:active {
      transform: scale(1);
    }
  }
`;

export const ProductOption = styled.div`
  margin: 1rem 0;
  h4 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${(props) => props.fontSize};
    line-height: 18px;
    margin-bottom: 0.5rem;
    color: #1d1f22;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 18px;
      color: #1d1f22;
    }
  }

  .size-options {
    justify-content: ${(props) => props.justifyContent};
  }
`;

export const ColorButton = styled.button`
  width: ${(props) => (props.type === "small" ? "1rem" : "2rem")};
  height: ${(props) => (props.type === "small" ? "1rem" : "2rem")};
  background-color: transparent;
  padding: 2px;
  border: ${(props) =>
    props.selected ? "1px solid #5ece7b" : "1px solid transparent"};
  cursor: pointer;
  &:hover {
    border: 1px solid #777;
  }
  span {
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${(props) => props.colorTxt};
  }

  &[disabled] {
    cursor: no-drop;
  }
`;

export const OutlinedButton = styled.button`
  padding: ${(props) => (props.type === "small" ? "0.5rem" : "0.8rem 1.5rem")};
  color: ${(props) => (props.active ? "#fff" : "#1d1f22")};
  background-color: ${(props) => (!props.active ? "#fff" : "#1d1f22")};
  border: 1px solid #1d1f22;
  font-size: ${(props) => (props.type === "small" ? "10px" : "16px")};
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: ${(props) => (!props.active ? "#eee" : "#111")};
  }

  &[disabled] {
    cursor: no-drop;
  }
`;

export const ProductTitle = styled(Link)`
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  line-height: 27px;
  color: #1d1f22;
  margin-bottom: 1rem;
  text-decoration: underline;
  display: inline-block;
  &:hover {
    color: #5ece7b;
  }
`;

export const MainTitle = styled.h2`
  font-size: 42px;
  font-weight: 400;
  color: #1d1f22;
  margin-bottom: 5rem;
  text-transform: capitalize;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #39374838;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const Loading = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 50px;
  }
`;
