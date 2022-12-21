import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartDropdownBox = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 380px;
  padding: 2rem 1rem;
  background: #fff;
  z-index: 10;

  h4 {
    font-weight: 700;
    span {
      font-weight: 400;
    }
  }
`;

export const TotalMoney = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  p {
    color: #1d1f22;
    font-weight: 500;
  }
`;
export const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardButton = styled.button`
  width: 48%;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props) => (props.outlined ? "1px solid  #1D1F22" : "none")};
  background-color: ${(props) => (props.outlined ? "#fff" : "#5ECE7B")};
  color: ${(props) => (props.outlined ? "#1D1F22" : "#fff")};
  font-size: 14px;
  &:hover {
    background-color: ${(props) => (props.outlined ? "#eee" : "#00CE7B")};
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.outlined ? "#1D1F22" : "#fff")};
  }
`;

export const OutlinedLink = styled(Link)`
  width: 48%;
  padding: 1rem;
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #1d1f22;
  background-color: #fff;
  color: #1d1f22;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #eee;
  }
`;

export const DropdownList = styled.div`
  height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px rgb(176, 176, 176);
    border-radius: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(199, 199, 199);
    border-radius: 8px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(181, 181, 181);
  }
`;
