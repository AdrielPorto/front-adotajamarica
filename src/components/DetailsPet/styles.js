import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  > a {
  }
  h1 {
    font-weight: 700;
    font-size: 4.3rem;
    color: ${({ theme }) => theme.COLORS.BLUE};

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container-favorites {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 4rem;
    width: fit-content;
    height: fit-content;
    color: ${({ theme }) => theme.COLORS.RED};

    &:disabled {
      svg {
        filter: drop-shadow(0px 0px 2px ${({ theme }) => theme.COLORS.RED});
      }
    }
  }

  .widget-pet {
    display: flex;

    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .data-publicação {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
  }

  .description {
    margin-bottom: 20px;
    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: #111;
      margin-bottom: 6px;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    }
  }

  .moreInfo {
    margin-bottom: 20px;
    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: #111;
      margin-bottom: 6px;
    }
    > div {
      display: flex;
      gap: 10px;
    }
  }
  .address {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 400;
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .faixa {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
    padding: 5px 10px;
    height: 50px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);

    font-size: 2rem;
    font-weight: 700;

    text-transform: capitalize;
  }
`;

export const DynamicInfo = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const BoxMoreInfo = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.RED};
  border-radius: 5px;
  padding: 10px;
  /* border: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT}; */
  color: ${({ theme }) => theme.COLORS.WHITE};
  min-width: 85px;
  height: 80px;
  font-size: 1.2rem;
  > img {
    width: 32px;
    height: 32px;
  }
`;

export const DetailsUser = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  .infoUserPet {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      svg {
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      }

      .avatarUserPet {
        width: 45px;
        height: 45px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: fill;
        }
      }
    }

    .nameUserPet {
      display: flex;
      flex-direction: column;

      font-size: 1.4rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};

      a {
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        font-weight: 700;
        strong {
          font-size: 1.6rem;
          font-weight: 700;
        }
      }
    }
  }

  .contactUserPet {
    display: flex;
    align-items: center;
    gap: 10px;
    .iconZap,
    .iconEmail {
      color: ${({ theme }) => theme.COLORS.WHITE};

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 5px;
    }
    .iconEmail {
      background-color: ${({ theme }) => theme.COLORS.BLUE};
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
    .iconZap {
      background-color: #00af9c;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const ButtonAdopt = styled.button``;
