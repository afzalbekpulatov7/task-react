import styled from "styled-components";

export const DropdownItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
  gap: 1rem;
`;
export const DropdownItemChoice = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 50%;
  .image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
`;

export const DropdownItemOptions = styled.div`
  width: 50%;

  p {
    font-weight: 800;
  }
`;
