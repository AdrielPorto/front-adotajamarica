import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${breakAt(BreakpointSize.sm)} {
    justify-content: flex-start;
  }
`;
