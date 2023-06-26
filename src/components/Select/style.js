import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    border-radius: 5px;
    padding: 0 10px;
    font-size: 1.6rem;
    cursor: pointer;

    transition: border-color 0.2s;

    &.errorSelect {
      border-color: ${({ theme }) => theme.COLORS.RED};
    }

    &:hover {
      border-color: ${({ theme }) => theme.COLORS.BLUE};
    }

    option {
      font-size: 1.6rem;
      border-radius: 5px;
    }
  }

  .custom-icon {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    pointer-events: none;
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    transition: color 0.2s;
  }

  &:hover {
    .custom-icon {
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }
`;
