import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.69rem;

    a svg {
      font-size: 1.125rem;
      color: ${theme.primary};
    }

    input {
      width: 62px;
      height: 26px;
      padding: 0.25rem 0.5rem;

      display: flex;

      border-radius: 0.25rem;
      border: 1px solid ${theme.borderColor};
    }
  `}
`;
