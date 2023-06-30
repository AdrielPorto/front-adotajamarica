import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  .ContainerSLiderPet {
    width: 550px;
    height: 400px;
    margin: 0 auto;

    img {
      width: 550px;
      height: 400px;
      border-radius: 5px;

      object-fit: cover;
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

        li {
          width: 115px;
          height: 100px;

          button {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
