import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    .titlePage {
      position: relative;

      padding: 80px 5%;
      text-align: center;
      background-color: ${({ theme }) => theme.COLORS.RED};
      color: ${({ theme }) => theme.COLORS.WHITE};

      .container {
        width: min(100%, 1140px);
        margin: 0px auto;
        h1 {
          font-size: 4.8rem;
          font-weight: 800;

          color: ${({ theme }) => theme.COLORS.WHITE};
          margin-bottom: 20px;
        }

        p {
          font-size: 1.8rem;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
    }
  }
`;

export const SectionSobre = styled.section`
  padding-right: 5%;
  padding-left: 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  position: relative;

  .container {
    width: min(100%, 1140px);
    margin: 0px auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100%;
      max-width: 505px;
      height: auto;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: centers;
      h2 {
        font-size: 3.6rem;
        font-weight: 800;
        margin-bottom: 20px;
        letter-spacing: 1px;
      }

      > p {
        font-size: 1.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        margin-bottom: 20px;

        width: 70%;
        letter-spacing: 0.5px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          display: flex;
          align-items: center;
          letter-spacing: 0.5px;
          gap: 10px;
          p {
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
            strong {
              font-weight: 600;
              font-size: 1.8rem;
              color: ${({ theme }) => theme.COLORS.BLACK};
            }
          }
        }
      }
    }
  }
`;
