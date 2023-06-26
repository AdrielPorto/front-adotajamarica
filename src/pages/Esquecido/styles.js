import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  main {
    min-height: 90vh;
    display: grid;
    place-items: center;
    .container {
      width: 425px;
      margin: 0 auto;
      text-align: center;

      &.container-message {
        width: 530px;
      }
      h1 {
        margin-bottom: 20px;
      }

      > span {
        margin: 10px 0;
        display: block;
      }

      > .message {
        margin: 10px 0;
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        letter-spacing: 1px;
      }

      form {
        .form-group {
          position: relative;

          label {
            text-align: left;
            font-size: 1.6rem;
            font-weight: 600;
            margin-bottom: 4px;
            display: block;
          }
        }
        div {
          margin-bottom: 16px;
        }
        button {
          margin-top: 25px;
        }
      }

      .reset-password {
        margin-top: 18px;
        display: block;
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-weight: 400;

        &:hover {
          text-decoration: underline;
        }
      }

      > p {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        margin-top: 9px;
        a {
          color: ${({ theme }) => theme.COLORS.BLUE};
          font-weight: 400;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
