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

    .empty {
      border: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      width: 210px;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 600;
      padding: 0 12px;
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.BLACK};
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.02);
    }

    div.card-header {
      img {
        height: 200px;
        object-fit: cover;
      }
    }
  }
`;
