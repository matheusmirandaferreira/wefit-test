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

    button {
      box-shadow: none !important;
      transition: all 0.2s ease-in-out !important;

      &:hover {
        opacity: 0.9;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .box {
      border-radius: 0.25rem;
      background-color: ${theme.white};
    }
  `}
`;
