import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

import pawGreen from "../../assets/images/paw-green.png";
import pawBlue from "../../assets/images/paw-blue.png";
import pawRed from "../../assets/images/paw-red.png";

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
      @media screen and (max-width: 944px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const Section = styled.section`
  ${breakAt(BreakpointSize.sm)} {
  }
`;

export const InfoPet = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media screen and (max-width: 1191px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakAt(BreakpointSize.sm)} {
  }

  @media screen and (max-width: 434px) {
    display: flex;
    flex-direction: column;

    .area-box {
      margin: 0;

      &:nth-child(1) {
        background-image: url(${pawGreen});
        background-repeat: no-repeat;
        background-position: right 20px top 5px;
      }
      &:nth-child(2) {
        background-image: url(${pawBlue});
        background-repeat: no-repeat;
        background-position: right 20px top 5px;
      }
      &:nth-child(3) {
        background-image: url(${pawRed});
        background-repeat: no-repeat;
        background-position: right 20px top 5px;
      }
    }
  }
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
    @media screen and (max-width: 434px) {
      padding: 10px 0;
    }
    img {
      width: 60px;
      height: auto;

      @media screen and (max-width: 434px) {
        width: 45px;
      }
    }

    span {
      font-size: 3.5rem;
      font-weight: 900;
      color: ${({ theme }) => theme.COLORS.ORANGE};

      @media screen and (max-width: 434px) {
        font-size: 2.5rem;
      }
    }
  }
`;

export const BannerFilterPets = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 434px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

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
    @media screen and (max-width: 434px) {
      width: 100%;
    }
  }
`;

export const ContainerMyPets = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${breakAt(BreakpointSize.md)} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakAt(BreakpointSize.sm)} {
    grid-template-columns: 1fr;
    padding: 20px 25px;
  }
`;
