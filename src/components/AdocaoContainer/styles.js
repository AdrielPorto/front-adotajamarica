import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const GridAdotar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 32px;

  ${breakAt(BreakpointSize.sm)} {
    flex-direction: column;
  }

  .item-adotar {
    width: 30%;
    margin: 0px;
    flex: 2;
    display: flex;
    flex-direction: column;

    ${breakAt(BreakpointSize.sm)} {
      flex: 1;
      width: 100%;
    }

    text-align: left;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 5px;

    border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

    padding: 12px;

    justify-content: space-between;

    img {
      width: 100px;
      height: auto;
      margin: 0 auto;
    }
    h3 {
      width: 100%;
      ${breakAt(BreakpointSize.sm)} {
        margin-top: 12px;
        text-align: center;
      }

      &.last_title {
        margin-top: 12px;
      }
    }
    p {
      width: 100%;
      ${breakAt(BreakpointSize.sm)} {
        margin-top: 12px;
        text-align: center;
      }
      &.last_paragraph {
        margin-top: 12px;
      }
    }
  }
`;
