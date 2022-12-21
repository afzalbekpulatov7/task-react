import styled from "styled-components";
import { Container } from "../global-styles";

export const CategoryContainer = styled(Container)`
  padding: 5rem 1rem;
`;

export const CategoryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;
  margin: 1rem 0;
`;
