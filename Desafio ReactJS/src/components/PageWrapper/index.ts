import styled from 'styled-components';

export const PageWrapper = styled.main`
  margin: 1.5rem auto 0;
  height: calc(100vh - (74px + 1.5rem));

  width: 100%;
  max-width: 960px;

  @media (max-width: 500px) {
    height: calc(100vh - 68px);
  }
`;
