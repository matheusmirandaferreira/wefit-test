import { css, styled } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;

    padding: 1.125rem 0.625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.white};

    h2.title {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .cart-menu {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-align: right;

      line-height: normal;

      .description {
        font-size: 0.875rem;
      }

      .count {
        font-size: 0.75rem;
        color: ${theme.gray};
        font-weight: 600;
        line-height: normal;
      }

      svg {
        font-size: 2rem;
      }
    }

    @media (max-with: 500px) {
      padding: 1.125rem 0.625rem;
    }
  `};
`;
