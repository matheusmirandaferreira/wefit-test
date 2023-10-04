import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 85vh;

  img {
    margin: auto;
    animation: ${rotate} 2s infinite linear;
  }
`;
