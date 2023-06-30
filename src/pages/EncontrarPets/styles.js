import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    .titlePage {
      padding: 80px 5%;
      text-align: center;
      background-color: ${({ theme }) => theme.COLORS.BLUE};
      position: relative;

      ${breakAt(BreakpointSize.sm)} {
        padding: 40px 5%;
      }

      h1 {
        font-size: 4.8rem;
        font-weight: 800;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 20px;

        ${breakAt(BreakpointSize.sm)} {
          font-size: 3.3rem;
        }
      }

      p {
        font-size: 1.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;

export const SectionPets = styled.section`
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  ${breakAt(BreakpointSize.sm)} {
    padding: 40px 5%;
    padding-bottom: 80px;
  }

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;

    .controls-search {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      @media screen and (max-width: 620px) {
        flex-wrap: wrap;
        gap: 12px;
      }

      .search {
        flex: 1;
        @media screen and (max-width: 620px) {
          flex-basis: 100%;
          width: 100%;
        }
      }

      .filter {
        width: 214px;
        @media screen and (max-width: 620px) {
          width: 50;
          height: 50px;
        }
      }
      .btn-filter_mobile {
        display: none;

        @media screen and (max-width: 620px) {
          display: flex;
          width: 30%;

          align-items: center;
          justify-content: center;
          color: ${({ theme }) => theme.COLORS.BLUE};
          font-size: 1.6rem;
          font-weight: 500;
          gap: 5px;
          border: none;
          background-color: ${({ theme }) => theme.COLORS.WHITE};
          span {
            font-size: 1.8rem;
            background-color: ${({ theme }) => theme.COLORS.BLUE};
            color: ${({ theme }) => theme.COLORS.WHITE};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border-radius: 5px;
          }
        }
      }
    }
  }
`;
export const Content = styled.div`
  width: min(100%, 1140px);
  margin: 0 auto;

  margin-top: 40px;

  display: flex;

  &.align-start {
    align-items: flex-start;
  }

  justify-content: space-between;

  gap: 24px;

  .containerFIlter {
    position: relative;
    width: 338px;

    @media screen and (max-width: 620px) {
      display: none;
    }
  }
`;
export const Filterbar = styled.div`
  border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  position: sticky;
  top: 13%;

  @media screen and (max-width: 620px) {
    top: 0;
  }
`;

export const ListsPets = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakAt(BreakpointSize.md)} {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakAt(BreakpointSize.sm)} {
    grid-template-columns: 1fr;
  }

  .subtitle {
    color: rgb(51, 51, 51);
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

export const OverlayMobile = styled.div`
  @media screen and (max-width: 620px) {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 1000;
    cursor: pointer;
    visibility: hidden;

    &.overlay-filter__active {
      visibility: visible;
    }
  }
`;
export const FilterMobile = styled.div`
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  cursor: default;
  will-change: transform;

  transition: transform 0.2s ease-in-out;

  &.filter__active {
    transform: translateY(100%);
  }
`;
