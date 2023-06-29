import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

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

      ${breakAt(BreakpointSize.sm)} {
        width: 100%;
        padding: 0 5%;
      }
      h1 {
        margin-bottom: 20px;
      }

      > span {
        margin: 10px 0;
        display: block;
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
            top: 50%;
            right: 10px;
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
