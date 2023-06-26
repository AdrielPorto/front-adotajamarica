import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  main {
    width: 425px;
    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 30px;

    h1 {
      margin-bottom: 20px;
      text-align: center;
    }

    > span {
      margin-top: 10px;
      display: block;
      text-align: center;
    }
    form {
      .form-group {
        position: relative;

        &_senha {
          input {
            padding-right: 30px;
          }
        }
        label {
          text-align: left;
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 4px;
          display: block;
        }

        .password-icon {
          position: absolute;
          top: 55%;
          right: 10px;
        }
      }
      .form-group-termos {
        display: flex;
        align-items: center;
        gap: 8px;
        div {
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        span {
          font-size: 1.3rem;
          color: ${({ theme }) => theme.COLORS.BLUE};
          cursor: pointer;
        }
      }
      > div {
        margin-bottom: 16px;
      }

      select {
        width: 100%;
        height: 50px;
      }
      button {
        margin-top: 25px;
      }
    }
    > p {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      margin-top: 18px;
      a {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-weight: 300;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
