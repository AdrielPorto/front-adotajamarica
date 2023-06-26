import styled from "styled-components";

export const ContainerCard = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  border-radius: 5px;

  .card-header {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    > a {
      width: 50px;
      height: auto;

      display: grid;
      place-content: center;
      .profile {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
      }
    }

    &_title {
      display: flex;
      flex-direction: column;
      > a {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-weight: bold;
      }
      span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      }
    }
  }

  .card-content {
    padding: 10px;
    font-size: 1.8rem;
    font-weight: 700;
    a {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  .card-media {
    img {
      width: 100%;

      object-fit: cover;
      height: 200px;
      overflow: hidden;
    }
  }

  .card-action {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .card-action_icons,
    .card-action_contacts {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .card-action_icons {
      button {
        background: none;
        border: none;
      }

      .card-action_icons-not {
        color: ${({ theme }) => theme.COLORS.RED};
      }
      .card-action_icons-okay {
        color: #10b981;
      }
    }

    .card-action_contacts {
      &-zap {
        color: #10b981;
      }
      &-email {
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
    }
  }
`;
