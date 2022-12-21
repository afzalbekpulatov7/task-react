import styled from "styled-components";

export const AlertStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: fixed;
  top: 0px;
  background-color: #fff;
  padding: 1.2rem;
  font-size: 16px;
  z-index: 10;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 10px 5px #00000010;
  animation: anim 0.2s ease forwards;
  img {
    width: 28px;
  }

  @keyframes anim {
    from {
      transform: translateX(-50%) scale(0.5);
    }
    to {
      transform: translateX(-50%) scale(1);
    }
  }
`;
