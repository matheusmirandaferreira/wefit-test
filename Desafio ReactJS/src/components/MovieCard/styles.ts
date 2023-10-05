import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0.625rem 0.6875rem;

    flex: 1;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    text-align: center;

    .content {
      img {
        width: 147px;
        height: 188px;
        margin: 0 auto 7px;
      }

      span.movie-name {
        color: ${theme.text};

        display: block;
        margin-bottom: 0.125rem;

        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p.movie-price {
        color: ${theme.background};

        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    span.count {
      margin: 0 0.25rem 0;
      font-weight: 400;
      font-size: 0.75rem;
    }
  `}
`;
