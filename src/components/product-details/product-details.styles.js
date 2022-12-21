import styled from "styled-components";
import { Container } from "../global-styles";

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
export const DetailsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  min-height: calc(100vh - 60px);
  /* align-items: center; */
  padding: 4rem 1rem;
`;
export const ImagesList = styled.ul`
  width: 100px;
  li {
    list-style: none;
    margin-bottom: 2rem;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
`;

export const PreviewImage = styled.div`
  width: 550px;
  img {
    width: 100%;
  }
`;
export const ProductInfo = styled.div`
  width: 300px;
`;

export const ProductInfoText = styled.p`
  font-weight: 400;
  color: #1d1f22;
  width: 100%;
`;
