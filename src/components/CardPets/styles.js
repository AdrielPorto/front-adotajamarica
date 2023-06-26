import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  display: flex;

  flex-direction: column;

  border-radius: 5px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    height: auto;
    width: 100%;
    > img {
      width: 100%;
      height: 270px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 2px 2px 0 0;
      margin-bottom: -4px;

      &.cardPetsImage {
        height: 200px;
      }
    }
  }
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > time {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    font-weight: 500;
  }

  .container-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    margin: 8px 0;

    a {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }

    .container-favorites {
      font-size: 2.4rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border: 0;
      background-color: transparent;

      color: ${({ theme }) => theme.COLORS.RED};

      cursor: pointer;

      &:disabled {
        svg {
          filter: drop-shadow(0px 0px 2px ${({ theme }) => theme.COLORS.RED});
        }
      }
    }
  }

  .region {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    font-weight: 500;
  }
`;

export const CardFooter = styled.div`
  padding: 0 20px 20px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  flex-wrap: wrap;

  span {
    border: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    font-size: 1.1rem;
    font-weight: 400;
    border-radius: 4px;
    padding: 4px 8px;

    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
