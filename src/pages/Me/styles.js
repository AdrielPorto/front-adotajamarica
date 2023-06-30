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

export const SectionProfile = styled.section``;

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
      }
    }

    .group-inputs {
      flex: 1;
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
  }
`;

export const Address = styled.div`
  form {
    margin-top: 20px;
    .group-address {
      display: flex;
      gap: 20px;
    }
    .form-group {
      > div {
        width: 350px;
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
    strong {
      color: ${({ theme }) => theme.COLORS.BLUE};
      display: inline-flex;
      align-items: center;
      gap: 3px;
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
  h2 {
    margin-bottom: 10px;
  }
`;
