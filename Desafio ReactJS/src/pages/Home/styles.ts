import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
