import styled from "styled-components";

export const CardItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
`;
export const CardItemChoice = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  .image {
    width: 200px;
    img {
      width: 100%;
    }
  }
`;

export const CardItemOptions = styled.div`
  p {
    font-weight: 800;
  }
`;
