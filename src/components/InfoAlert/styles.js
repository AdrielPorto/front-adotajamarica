import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${breakAt(BreakpointSize.sm)} {
    gap: 10px;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.RED};
    text-transform: uppercase;

    ${breakAt(BreakpointSize.sm)} {
      text-align: center;
      font-size: 2rem;
    }
  }
  .container_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    ${breakAt(BreakpointSize.sm)} {
      gap: 5px;
    }
    p {
      text-align: left;
      font-size: 1.6rem;
      font-weight: 400;

      ${breakAt(BreakpointSize.sm)} {
        font-size: 1.4rem;
      }
      strong {
        font-weight: 700;
      }
    }
  }
`;
