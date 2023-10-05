import { styled, css } from "styled-components";

export const ItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.3125rem;

    width: 100%;

    .cart-item {
      width: 100%;

      gap: 1.3125rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .head,
      .content {
        width: 100%;

        gap: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .product-name {
          flex: 2;
        }

        > .count-input {
          flex: 1.2;
        }

        > .subtotal {
          flex: 0.7;
        }

        .mobile-only {
          display: none;
        }

        .del-action {
          cursor: pointer;
        }

        @media (max-width: 500px) {
          display: grid;
          grid-gap: 0;
          grid-template-areas: "img title price del" "img count count subtotal";

          .desktop-cart-item {
            display: none;
          }

          .mobile-only {
            display: initial;
          }

          > img {
            width: 64px;
            grid-area: img;
          }

          .product-name {
            grid-area: title;
            margin-bottom: 0 !important;
          }
          .product-price {
            grid-area: price;
          }

          .count-input {
            grid-area: count;
          }

          .subtotal {
            grid-area: subtotal;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 0;

            .label {
              font-size: 0.75rem;
              font-weight: 700;
              color: ${theme.gray};
              text-transform: uppercase;
            }
          }

          .del-action {
            grid-area: del;
            justify-self: flex-end;
          }
        }
      }

      .head {
        color: ${theme.gray};
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: uppercase;

        :last-child {
          width: 24px;
          opacity: 0;
        }

        @media (max-width: 500px) {
          display: none;
        }
      }

      .content {
        color: ${theme.background};
        font-weight: 700;
        line-height: normal;

        span {
          gap: 3.5rem;
          display: flex;
          align-items: center;

          > img {
            width: 89px;
          }

          @media (max-width: 500px) {
            gap: 1rem;

            > img {
              width: 64px;
            }
          }
        }

        .product-name {
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .subtotal,
        .product-price {
          font-weight: 700;
        }
      }
    }

    hr {
      width: 100%;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;

      > div {
        display: flex;
        align-items: center;
      }

      .label {
        color: ${theme.gray};
        text-align: center;
        font-size: 0.875rem;
        margin: 0 0.5rem;
        font-weight: 700;
      }

      .value {
        color: ${theme.background};
        margin: 0 0.5rem;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: normal;
      }

      button {
        width: 170px;
      }

      @media (max-width: 500px) {
        width: 100%;
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 1rem;

        a,
        button {
          width: 100%;
        }
      }
    }
    @media (max-width: 500px) {
      height: calc(100vh - 2rem - 72px);

      hr {
        margin-top: auto;
      }
    }
  `}
`;
