import styled from "styled-components";

export const Container = styled.aside`
  position: sticky;
  height: 350px;

  top: 79px;
  left: 0;

  z-index: 999;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.COLORS.BLACK};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  padding: 20px 0px;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;

    margin: 0 25px;
    margin-bottom: 13px;
  }
`;

export const NavAside = styled.nav`
  display: flex;
  flex-direction: column;

  .nav-itens {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    .nav-item {
      padding: 0.5rem 25px;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      gap: 5px;

      color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};

      transition: all 0.2s ease-in-out;

      font-weight: 400;

      &:hover {
        background-color: #2f957f33;
      }
      svg {
        font-size: 1.8rem;
      }
      > svg {
        color: ${({ theme }) => theme.COLORS.BLUE};
      }
      span {
        border-radius: 50px;
        width: 25px;
        height: 25px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
      span.circle-color_blue {
        background-color: ${({ theme }) => theme.COLORS.BLUE};
      }
      span.circle-color_red {
        background-color: ${({ theme }) => theme.COLORS.RED};
      }
      span.circle-color_orange {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
      }
      span.circle-color_white {
        background-color: #69cf95;
      }
      span.circle-color_gray {
        background-color: #666;
      }
    }

    .nav-item[data-option="cadastrar-pet"].active:nth-child(1) ~ .markLink {
      @keyframes teste {
        100% {
          transform: rotate(90deg) translate(-0.2%);
        }
      }

      animation: teste 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }

    .nav-item.nav-item[data-option="favoritos"].active:nth-child(2)
      ~ .markLink {
      top: 21%;
    }

    .nav-item.nav-item[data-option="interessados"].active:nth-child(3)
      ~ .markLink {
      top: 42%;
    }

    .nav-item.nav-item[data-option="meus-pets"].active:nth-child(4)
      ~ .markLink {
      top: 63%;
    }

    .nav-item[data-option="meus-dados"].active:nth-child(5) ~ .markLink {
      @keyframes identifier {
        0% {
          transform: rotate(90deg) translate(516%);
        }
        100% {
          transform: rotate(90deg) translate(516%);
        }
      }

      animation: identifier 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }

    .markLink {
      transform: rotate(90deg);
      font-size: 3.5rem;
      color: #f43f5e;
      position: absolute;
      right: 0%;

      transition: all 0.2s ease-in-out;
    }
  }
  .exit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.RED};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 2px solid ${({ theme }) => theme.COLORS.RED};
    border-radius: 5px;

    transition: all 0.2s ease-in-out;

    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.RED};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
