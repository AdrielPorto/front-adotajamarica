import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const Container = styled.div`
  flex: 1;

  .ContainerSLiderPet {
    width: 550px;
    height: 400px;
    margin: 0 auto;

    @media screen and (max-width: 607px) {
      width: 100%;
      height: auto;
    }
    .slider-control-centerright,
    .slider-control-centerleft {
      ${breakAt(BreakpointSize.sm)} {
        display: none !important;
      }
    }

    img {
      width: 550px;
      height: 400px;
      border-radius: 5px;

      object-fit: cover;

      ${breakAt(BreakpointSize.sm)} {
        height: 315px;
      }
    }

    .slider-control-bottomcenter {
      display: block;
      width: 100% !important;
      ul {
        top: 110px !important;

        width: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;

        ${breakAt(BreakpointSize.sm)} {
          gap: 10px;
        }

        li {
          width: 115px;
          height: 100px;

          ${breakAt(BreakpointSize.sm)} {
            height: 80px;
          }

          button {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
