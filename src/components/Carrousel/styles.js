import styled from "styled-components";

export const CarrouselContainer = styled.div`
  width: 100%;

  .slick-slide {
    width: 250px;
    .item-logo {
      img {
        border-radius: 5px;
        border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      }
    }
  }

  .slick-arrow {
    width: 30px;
    height: 30px;
  }

  .slick-prev {
    left: -4%;
    z-index: 1;
  }

  .slick-next {
    right: -1%;
    z-index: 1;
    border-radius: 0;
  }

  .slick-next:before,
  .slick-prev:before {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 30px;
    background-size: contain;
  }
  .slick-dots {
    bottom: -16%;
    li {
      width: fit-content;
      margin: 0 4px;
      cursor: default;

      button {
        background-color: ${({ theme }) => theme.COLORS.BLUE};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;

        background: rgba(35, 99, 236, 0.3);

        &:before {
          font-size: 0px;
          line-height: 0px;
          position: static;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          content: "";
          text-align: center;
        }
      }

      &.slick-active {
        button {
          background-color: ${({ theme }) => theme.COLORS.BLUE};
        }
      }
    }
  }
`;
