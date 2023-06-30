import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

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
      @media screen and (max-width: 944px) {
        grid-template-columns: 1fr;
      }

      ${breakAt(BreakpointSize.sm)} {
        display: flex;
        flex-direction: column;

        select {
          height: 50px;
        }

        textarea {
          height: 150px;
        }

        .btn-salvar {
          width: 100%;
        }
      }
    }
    h3 {
      margin-bottom: 8px;
    }

    .form-group {
      label,
      .label {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        margin-bottom: 8px;
        display: block;

        .dot_red {
          color: ${({ theme }) => theme.COLORS.RED};
        }

        .strong_red {
          color: ${({ theme }) => theme.COLORS.RED};
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
    .flex-group {
      display: flex;
      gap: 30px;
      ${breakAt(BreakpointSize.sm)} {
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

export const SectionRegister = styled.section`
  .container-section-info {
    .form-agree {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      .form-group {
        display: flex;
        align-items: center;
        gap: 5px;
        label {
          margin: 0;
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
          ${breakAt(BreakpointSize.sm)} {
            font-size: 1.2rem;
          }
        }
      }

      .btn-salvar {
        width: 250px;
        ${breakAt(BreakpointSize.sm)} {
          width: 100%;
        }
        &.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
`;

export const ContainerSave = styled.div``;

export const ContainerAvatar = styled.div`
  .form-group {
    label {
      border: 2px dashed ${({ theme }) => theme.COLORS.BLUE};
      display: flex !important;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: ${({ theme }) => theme.COLORS.BLUE};
      gap: 10px;
      svg {
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
      span {
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
      > div {
        border: none;
        input {
          display: none;
        }
      }
    }
  }

  .container-avatar {
    display: flex;
    align-items: center;
    gap: 20px;
    ${breakAt(BreakpointSize.sm)} {
      gap: 10px;
    }
    .avatar {
      width: 100px;
      height: 100px;
      border: 2px dashed ${({ theme }) => theme.COLORS.BLUE};
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.COLORS.BLUE};
      position: relative;

      ${breakAt(BreakpointSize.sm)} {
        object-fit: cover;
        height: 75px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .delete-photo {
        background: white;
        width: fit-content;
        height: fit-content;
        border-radius: 50%;
        border: none;
        color: ${({ theme }) => theme.COLORS.RED};
        position: absolute;
        top: -10%;
        right: -9px;
        cursor: pointer;
      }
    }
  }
`;

export const ContainerInfo = styled.div`
  .flex-group {
    margin-bottom: 30px;
    ${breakAt(BreakpointSize.sm)} {
      margin-bottom: 15px;
    }
  }
  .form-group {
    height: 50px;
    flex: 1;
    ${breakAt(BreakpointSize.sm)} {
      flex: none;
      height: 70px;
    }
    div {
      > input {
        width: 120px;
      }
    }
    .select-age {
      height: 50px;
    }
  }
`;

export const ContainerCategory = styled.div`
  .flex-group {
    margin-bottom: 30px;
    ${breakAt(BreakpointSize.sm)} {
      margin-bottom: 15px;
    }
  }
  .form-group {
    height: 50px;
    flex: 1;
    ${breakAt(BreakpointSize.sm)} {
      flex: none;
      height: 70px;
    }
  }
  .margin-input {
    label {
      input {
        margin-right: 5px;
      }
    }
  }
`;

export const Address = styled.div`
  > .form-group {
    display: flex;
    align-items: center;
    gap: 5px;
    label {
      margin: 0 !important;
      ${breakAt(BreakpointSize.sm)} {
        font-size: 1.2rem;
      }
    }
  }
  .group-address {
    display: flex;
    gap: 20px;
    ${breakAt(BreakpointSize.sm)} {
      flex-direction: column;
      gap: 10px;
    }
    .form-group.form-group_disabled {
      width: 50%;
      ${breakAt(BreakpointSize.sm)} {
        width: 100%;
      }
    }
  }
`;
