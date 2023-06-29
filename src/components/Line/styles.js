import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const LineSvg = styled.div`
  ${breakAt(BreakpointSize.sm)} {
    display: none;
  }
  svg {
    position: absolute;
    display: block;
    height: 50px;
    bottom: -49px;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;
