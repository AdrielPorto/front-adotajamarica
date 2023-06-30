import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const Container = styled.textarea`
  width: 100%;
  display: flex;
  align-items: center;
  border: 0;
  outline: 0;

  border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  border-radius: 5px;
  padding: 10px;
  gap: 5px;

  transition: border-color 0.2s;

  &.input__focused {
    border-color: ${({ theme }) => theme.COLORS.BLUE};
  }

  height: ${({ height }) => height || "100px"};

  resize: none;

  font-size: 1.6rem;

  font-weight: 500;

  &::placeholder {
    color: #c4c4c4;
  }
`;
