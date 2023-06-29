import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    .headerContact {
      width: 100%;
      padding: 80px 5%;
      position: relative;
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      ${breakAt(BreakpointSize.sm)} {
        padding: 40px 5%;
      }

      .container {
        width: min(100%, 1140px);
        margin: 0 auto;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        h1 {
          font-size: 4.8rem;
          font-weight: 800;
          color: ${({ theme }) => theme.COLORS.WHITE};
          margin-bottom: 20px;

          ${breakAt(BreakpointSize.sm)} {
            font-size: 3.3rem;
            margin-bottom: 10px;
          }
        }

        p {
          font-size: 1.8rem;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.WHITE};

          ${breakAt(BreakpointSize.sm)} {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
`;

export const SectionContact = styled.section`
  width: 100%;
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

  ${breakAt(BreakpointSize.sm)} {
    padding: 40px 5%;
  }

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 100px;

    ${breakAt(BreakpointSize.lg)} {
      gap: 25px;
    }

    ${breakAt(BreakpointSize.md)} {
      flex-direction: column;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin-top: 40px;
      flex: 1;

      ${breakAt(BreakpointSize.sm)} {
        margin-top: 0px;
        gap: 0px;
      }

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        font-size: 2.4rem;
        transition: all 0.3s ease-in-out;

        ${breakAt(BreakpointSize.sm)} {
          font-size: 1.8rem;
          gap: 5px;

          svg {
            width: 25px;
          }
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
