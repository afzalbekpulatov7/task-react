import styled from "styled-components";

export const CurrencySwitch = styled.div`
  width: 90px;
  height: 50px;
  position: relative;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  .currency-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    img {
      transform: ${(props) =>
        props.active ? "rotate(0deg)" : "rotate(180deg)"};
    }

    @media (min-width: 0px) and (max-width: 600px) {
      width: 50px;
    }
  }

  .currency-options {
    position: absolute;
    bottom: -250px;
    left: 0;
    width: 100%;
    z-index: 11;
    display: ${(props) => (props.active ? "block" : "none")};
    box-shadow: 0 0 50px #ededed;

    .option {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #ffffff;

      cursor: pointer;
      &:hover {
        background-color: #eeeeee;
      }
    }
  }
`;
