import { styled, css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem;

    gap: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      height: 266px;
      object-fit: contain;
    }

    h2 {
      text-align: center;
      font-size: 1.25rem;
      color: ${theme.background};
    }
  `}
`;
