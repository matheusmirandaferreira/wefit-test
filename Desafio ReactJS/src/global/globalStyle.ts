import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    body {
      font: normal 500 16px/1 'Open Sans', sans-serif;
      background-color: ${theme.background};
    }
  `}
`;
