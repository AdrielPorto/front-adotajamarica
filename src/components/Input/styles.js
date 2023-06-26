import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  border-radius: 5px;
  padding-left: 10px;
  gap: 5px;

  transition: border-color 0.2s;

  &.errorInput {
    border-color: ${({ theme }) => theme.COLORS.RED};
    > svg {
      color: ${({ theme }) => theme.COLORS.RED} !important;
    }

    > input {
      &::placeholder {
        color: rgb(239, 52, 72) !important;
      }
    }
  }

  &.input__focused {
    border-color: ${({ theme }) => theme.COLORS.BLUE};
    &.errorInput {
      border-color: ${({ theme }) => theme.COLORS.RED};

      > svg {
        color: ${({ theme }) => theme.COLORS.RED} !important;
      }
    }
  }

  > input {
    width: 100%;
    border: 0;
    outline: 0;

    background: transparent;

    height: 50px;

    font-size: 1.6rem;

    font-weight: 500;

    &::placeholder {
      color: #666666;
    }
  }

  > svg {
    color: #666666;
    transition: color 0.2s;

    &.color__focused {
      color: ${({ theme }) => theme.COLORS.BLUE} !important;
    }
  }
`;
