import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  > main {
    padding: 20px 5%;
    .container {
      min-height: 100vh;
      width: min(100%, 1140px);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 3fr;

      gap: 20px;

      position: relative;
    }
  }
`;

export const SectionFavorites = styled.section`
  .box {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    .card-notFind {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding: 20px;
      text-align: center;
      border: 2px solid ${({ theme }) => theme.COLORS.BLACK};

      color: ${({ theme }) => theme.COLORS.BLACK};

      height: 280px;
      h3 {
        font-size: 1.8rem;
        margin: 10px 0;
      }

      p {
        font-size: 1.4rem;
      }
    }

    div.card-header {
      img {
        height: 200px;
        object-fit: cover;
      }
    }
  }
`;
