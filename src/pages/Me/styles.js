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
      position: relative;

      @media screen and (max-width: 1111px) {
        grid-template-columns: 1fr;
        aside {
          display: none;
        }
      }
    }
  }
`;

export const SectionProfile = styled.section`
  .form-editar-perfil {
    ${breakAt(BreakpointSize.sm)} {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const EditProfile = styled.div`
  form {
    display: flex;
    gap: 32px;
    margin-top: 20px;
    align-items: center;

    .group-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      ${breakAt(BreakpointSize.sm)} {
        margin-bottom: -15px;
      }

      label {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        right: 16px;
        cursor: pointer;
        input {
          display: none;
        }
      }

      > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;

        ${breakAt(BreakpointSize.sm)} {
          width: 150px;
          height: 150px;
        }
      }
    }

    .group-inputs {
      flex: 1;

      ${breakAt(BreakpointSize.sm)} {
        width: 100%;
      }
    }
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin-bottom: 10px;
  }
  .area-btn-editar {
    margin-bottom: 10px;

    ${breakAt(BreakpointSize.sm)} {
      textarea {
        height: 150px;
      }
    }
  }
`;

export const Address = styled.div`
  form {
    margin-top: 20px;
    .form-endereco {
      ${breakAt(BreakpointSize.sm)} {
        display: flex;
        flex-direction: column;
      }
    }
    .group-address {
      display: flex;
      gap: 20px;
      @media screen and (max-width: 833px) {
        justify-content: space-between;
      }

      ${breakAt(BreakpointSize.sm)} {
        flex-direction: column;
        gap: 0px;
      }
    }
    .form-group {
      > div {
        width: 350px;

        @media screen and (max-width: 833px) {
          width: 100%;
        }
      }
    }
  }
`;

export const Categories = styled.div`
  h2 {
    margin-bottom: 10px;
  }
  p {
    display: flex;
    align-items: center;

    ${breakAt(BreakpointSize.sm)} {
      display: block;
    }
    strong {
      color: ${({ theme }) => theme.COLORS.BLUE};
      display: inline-flex;
      align-items: center;
      gap: 3px;

      ${breakAt(BreakpointSize.sm)} {
        margin-bottom: -5px;
        display: inline-block;

        svg {
          margin-bottom: -5px;
        }
      }
    }
  }

  .form-group-categoria {
    display: flex;
    align-items: center;
    label {
      flex: 1;
    }

    > div {
      height: 50px;
      flex: 1;
    }
  }
`;

export const Password = styled.div`
  width: 50%;

  ${breakAt(BreakpointSize.sm)} {
    width: 100%;
  }
  h2 {
    margin-bottom: 10px;
  }
`;
