import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  overflow: hidden;

  > main {
    .slider_desktop {
      ${breakAt(BreakpointSize.sm)} {
        display: none;
      }
    }

    .slider_mobile {
      display: none;
      ${breakAt(BreakpointSize.sm)} {
        display: block;
      }
    }

    .slider-control-centerright,
    .slider-control-centerleft {
      ${breakAt(BreakpointSize.sm)} {
        display: none;
      }
    }

    .divulgacao-btn {
      margin-top: 64px;
      padding: 0 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 70px;

      position: relative;
      padding-bottom: 80px;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

      ${breakAt(BreakpointSize.md)} {
        flex-direction: column;
        margin-top: 32px;
        gap: 32px;
        padding-bottom: 40px;
      }
    }
  }
`;

export const SectionPets = styled.section`
  padding: 0 5%;

  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  position: relative;

  margin-top: 64px;

  ${breakAt(BreakpointSize.sm)} {
    margin-top: 32px;
  }

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 4.8rem;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.BLACK};

      ${breakAt(BreakpointSize.sm)} {
        font-size: 3.3rem;
      }
    }
  }
`;

export const GridContainer = styled.div`
  margin: 80px 0;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  ${breakAt(BreakpointSize.lg)} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${breakAt(BreakpointSize.md)} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  ${breakAt(BreakpointSize.sm)} {
    margin: 32px 0;
    grid-template-columns: repeat(250px, 1fr);
  }
`;

export const SectionAdotar = styled.section`
  background-color: ${({ theme }) => theme.COLORS.RED};

  padding: 80px 5%;
  position: relative;

  ${breakAt(BreakpointSize.sm)} {
    padding: 32px 5%;
  }
  > .container {
    width: min(100%, 1140px);
    margin: 0 auto;

    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    h2 {
      font-size: 4.8rem;
      font-weight: 700;

      ${breakAt(BreakpointSize.sm)} {
        font-size: 3.3rem;
      }
    }
  }
`;

export const SectionDivulgacao = styled.section`
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  text-align: center;

  ${breakAt(BreakpointSize.sm)} {
    padding: 32px 5%;
  }
  h2 {
    font-size: 4.8rem;
    font-weight: 700;
    margin-bottom: 32px;

    ${breakAt(BreakpointSize.sm)} {
      font-size: 3.3rem;
      span {
        display: none;
      }
    }
  }

  > .container {
    width: min(100%, 1140px);
    margin: 0 auto;
    ${breakAt(BreakpointSize.sm)} {
      margin-bottom: 32px;
    }
  }
`;
