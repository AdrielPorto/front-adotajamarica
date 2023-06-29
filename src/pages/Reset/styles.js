import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  main {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 30px;
    display: grid;
    place-content: center;

    ${breakAt(BreakpointSize.sm)} {
      margin: 0;
    }

    .content {
      width: 425px;

      ${breakAt(BreakpointSize.sm)} {
        width: 100vw;
        padding: 0 5%;
      }

      .backLink {
        margin-top: 18px;
        display: block;
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-weight: 400;
        text-align: center;
        &:hover {
          text-decoration: underline;
        }
      }
    }

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

      > div {
        margin-bottom: 16px;
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
