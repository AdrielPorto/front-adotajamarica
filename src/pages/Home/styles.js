import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    .divulgacao-btn {
      margin-top: 64px;
      padding: 0 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 70px;

      position: relative;
      padding-bottom: 80px;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    }
  }
`;

export const SectionPets = styled.section`
  padding: 0 5%;

  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  position: relative;

  margin-top: 64px;

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 4.8rem;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`;

export const GridContainer = styled.div`
  margin: 80px 0;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const SectionAdotar = styled.section`
  background-color: ${({ theme }) => theme.COLORS.RED};

  padding: 80px 5%;
  position: relative;
  > .container {
    width: min(100%, 1140px);
    margin: 0 auto;

    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    h2 {
      font-size: 4.8rem;
      font-weight: 700;
    }
  }
`;

export const SectionDivulgacao = styled.section`
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  text-align: center;
  h2 {
    font-size: 4.8rem;
    font-weight: 700;
    margin-bottom: 32px;
  }

  > .container {
    width: min(100%, 1140px);
    margin: 0 auto;
  }
`;
