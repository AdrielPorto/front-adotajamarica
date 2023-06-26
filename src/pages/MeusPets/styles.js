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

export const Section = styled.section``;

export const InfoPet = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const CardInfoPet = styled.div`
  &.area-box.card-link {
    padding: 0;
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
  }
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  .media-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;
    background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
    padding: 10px;
    border-radius: 5px;

    &.bg-green {
      background-color: #ecfdf5;
    }

    &.bg-blue {
      background-color: #e9effd;
    }

    &.bg-red {
      background-color: #fdeaec;
    }
  }
  .title-info {
    h5 {
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 900;

      &.color-green {
        color: #10b981;
      }

      &.color-blue {
        color: ${({ theme }) => theme.COLORS.BLUE};
      }

      &.color-red {
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }
  }

  .morePet {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
      width: 60px;
      height: auto;
    }

    span {
      font-size: 3.5rem;
      font-weight: 900;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`;

export const BannerFilterPets = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-filter-pets {
    display: flex;
    align-items: center;
    gap: 10px;
    .box-icons {
      width: 50px;
      height: 50px;
      background-color: #feedd4;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 5px;
    }
  }
  > div {
    width: 220px;
    height: 50px;
  }
`;

export const ContainerMyPets = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
