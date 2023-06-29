import styled from "styled-components";
import { Link } from "react-router-dom";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const BigButton = styled(Link)`
  border-radius: 5px;
  box-shadow: 3px 3px 0 #000;
  padding: 20px;
  border: 2px solid #000;
  font-size: 2.4rem;
  width: ${(props) => props.width || "auto"};
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.background || "transparent"};
  font-weight: 500;

  transition: all 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${breakAt(BreakpointSize.sm)} {
    width: 100% !important;
    font-size: 2rem;
  }

  &:active {
    box-shadow: 1px 1px 0 #000;
    transform: translate(2px, 2px);
  }
`;
