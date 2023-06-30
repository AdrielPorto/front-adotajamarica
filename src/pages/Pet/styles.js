import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  > main {
    padding: 50px 5% 230px 5%;

    @media screen and (max-width: 930px) {
      padding: 40px 5%;
    }

    .containerDetailsPet {
      width: min(100%, 1140px);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 35px;

      @media screen and (max-width: 930px) {
        flex-direction: column;
        gap: 150px;
      }
    }
  }
`;
