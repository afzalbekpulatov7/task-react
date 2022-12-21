import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../global-styles";

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  position: relative;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 233px;
`;
export const Settings = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 233px;
  gap: 1rem;
`;

export const NavButton = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => (props.active ? "#5ECE7B" : "#1d1f22")};
  position: relative;
  text-transform: uppercase;
  border: none;
  padding: 1.1rem;
  height: 58px;
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-weight: ${(props) => (props.active ? 500 : 400)};
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #eee;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.active ? "#5ECE7B" : "#fff")};
  }
`;
