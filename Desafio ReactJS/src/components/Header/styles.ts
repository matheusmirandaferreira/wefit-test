import { styled } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  padding: 1.125rem 0.625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.white};

  h2.title {
    font-size: 1.25rem;
  }

  .cart-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    line-height: normal;

    .description {
      font-size: 0.875rem;
    }

    .count {
      font-size: 0.75rem;
    }

    svg {
      font-size: 2rem;
    }
  }
`;
