import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    .titlePage {
      padding: 80px 5%;
      text-align: center;
      background-color: ${({ theme }) => theme.COLORS.BLUE};
      position: relative;

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
`;

export const SectionPets = styled.section`
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;

    .controls-search {
      display: flex;
      justify-content: space-between;

      gap: 24px;

      .search {
        flex: 1;
      }

      .filter {
        width: 214px;
      }
    }
  }
`;
export const Content = styled.div`
  width: min(100%, 1140px);
  margin: 0 auto;

  margin-top: 40px;

  display: flex;

  &.align-start {
    align-items: flex-start;
  }

  justify-content: space-between;

  gap: 24px;

  .containerFIlter {
    position: relative;
    width: 338px;
  }
`;
export const Filterbar = styled.div`
  border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  position: sticky;
  top: 13%;
`;

export const ListsPets = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  .subtitle {
    color: rgb(51, 51, 51);
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;
