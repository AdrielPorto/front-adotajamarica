import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    width: 100%;
    min-height: 100vh;
    padding: 0px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SectionNotFound = styled.section`
  /* width: 500px; */
  text-align: center;
  .headerNotFound {
    display: flex;
    align-items: center;
    gap: 6px;
    ${breakAt(BreakpointSize.sm)} {
      justify-content: center;
      margin-bottom: 16px;
    }
    img {
      width: 100%;
      height: 100%;

      ${breakAt(BreakpointSize.sm)} {
        width: 150px;
        height: auto;
      }
    }
  }
  h1 {
    font-size: 12rem;
    ${breakAt(BreakpointSize.sm)} {
      font-size: 6rem;
    }
  }
  .subtitle {
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    font-size: 2.4rem;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .text {
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    font-size: 1.6rem;
    margin-bottom: 30px;
    font-weight: 400;
  }
  .btnHome {
    text-align: center;
    letter-spacing: 0.2px;
    line-height: 1;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 5px;
    padding: 13px 25px;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    display: inline-block;

    &:active {
      transform: scale(0.95);
    }
  }
`;
