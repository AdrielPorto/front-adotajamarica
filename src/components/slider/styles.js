import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const Carousel = styled.div`
  overflow: hidden;

  ${breakAt(BreakpointSize.sm)} {
    display: none;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s ease;
  }
  position: relative;

  .prevButton,
  .nextButton {
  }
  .prevButton {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .nextButton {
    right: 0;

    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ContainerSlide = styled.div`
  width: 100%;

  .slider-control-bottomcenter {
    display: none;

    ul {
      li {
        background-size: cover;

        background-position: center;

        background-repeat: no-repeat;

        transition: all 0.2s ease-in-out;
        border: 2px solid transparent;
        &.active {
          border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
        }

        &:nth-child(1) {
          background-image: ${({ imageUrl }) =>
            imageUrl && imageUrl[0] && imageUrl[0].BG1
              ? `url(${imageUrl[0].BG1})`
              : ""};

          border-radius: 5px;
        }

        &:nth-child(2) {
          background-image: ${({ imageUrl }) =>
            imageUrl && imageUrl[1] && imageUrl[1].BG2
              ? `url(${imageUrl[1].BG2})`
              : ""};
          border-radius: 5px;
        }

        &:nth-child(3) {
          background-image: ${({ imageUrl }) =>
            imageUrl && imageUrl[2] && imageUrl[2].BG3
              ? `url(${imageUrl[2].BG3})`
              : ""};
          border-radius: 5px;
        }

        &:nth-child(4) {
          background-image: ${({ imageUrl }) =>
            imageUrl && imageUrl[3] && imageUrl[3].BG4
              ? `url(${imageUrl[3].BG4})`
              : ""};
          border-radius: 5px;
        }

        button {
          svg {
            display: none;
          }
        }
      }
    }
  }

  .slider-control-centerleft,
  .slider-control-centerright {
    button {
      display: flex;

      justify-content: space-between;

      align-items: center;
      justify-content: center;

      width: 50px;
      height: 50px;

      font-size: 2.4rem;

      border: 2px solid #333 !important;

      color: ${({ theme }) => theme.COLORS.WHITE} !important;

      background-color: ${({ theme }) => theme.COLORS.BLACK_LIGHT} !important;
      transition: all 0.2s ease-in-out;

      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.02) !important;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BLUE} !important;
      }
    }
  }
`;
