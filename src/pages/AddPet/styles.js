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
        }
      }

      .btn-salvar {
        width: 250px;

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

    .avatar {
      width: 100px;
      height: 100px;
      border: 2px dashed ${({ theme }) => theme.COLORS.BLUE};
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.COLORS.BLUE};
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
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
  }
  .form-group {
    height: 50px;
    flex: 1;

    div {
      > input {
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
  }
  .form-group {
    height: 50px;
    flex: 1;
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
    }
  }
  .group-address {
    display: flex;
    gap: 20px;

    .form-group.form-group_disabled {
      width: 50%;
    }
  }
`;
