import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    .headerContact {
      width: 100%;
      padding: 80px 5%;
      position: relative;
      background-color: ${({ theme }) => theme.COLORS.ORANGE};

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

export const SectionContact = styled.section`
  width: 100%;
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 100px;

    .content {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin-top: 40px;
      flex: 1;

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        font-size: 2.4rem;
        transition: all 0.3s ease-in-out;

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
