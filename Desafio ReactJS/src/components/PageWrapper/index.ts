import styled from "styled-components";

export const PageWrapper = styled.main`
  margin: 1.5rem auto 0;
  min-height: calc(100vh - (74px + 1.5rem));

  width: 100%;
  max-width: 960px;

  padding-bottom: 1rem;

  @media (max-width: 500px) {
    min-height: calc(100vh - 68px);
    margin: 0;
    padding: 1rem;
  }
`;
