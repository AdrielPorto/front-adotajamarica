import styled from "styled-components";
import { Link } from "react-router-dom";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const HeaderContainer = styled.header`
  grid-area: header;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease;
  grid-area: header;

  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5%;
  height: 78px;

  top: 0;

  position: fixed;
  z-index: 999;

  &.header__fixed {
    border-bottom-color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    z-index: 999;
    position: fixed;
  }

  .button-menu {
    background: ${({ theme }) => theme.COLORS.WHITE};
    height: 40px;
    width: 100px;

    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 1.6rem;
    font-weight: 600;
    gap: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    display: none;

    @media screen and (max-width: 944px) {
      display: flex;
    }
  }
`;

export const HeaderContet = styled.div`
  width: min(100%, 1140px);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  gap: 50px;
`;

export const HeaderLogo = styled(Link)`
  > img {
    width: 150px;
    height: auto;

    ${breakAt(BreakpointSize.sm)} {
      display: none;
    }

    &.mobile-logo {
      display: none;
      ${breakAt(BreakpointSize.sm)} {
        display: block;
        width: auto;
      }
    }
  }
`;

export const HeaderMenu = styled.ul`
  @media screen and (max-width: 944px) {
    background-color: red;
    display: none;
  }
  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    li {
      a {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-weight: 600;
        font-size: 1.6rem;
        padding: 6px;
        display: block;

        transition: all 0.2s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.COLORS.ORANGE};
        }
      }
      .active {
        color: ${({ theme }) => theme.COLORS.ORANGE};
      }
    }
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 600;
    font-size: 1.6rem;
    padding: 6px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

    background-color: ${({ theme }) => theme.COLORS.BLUE};

    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      fill: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 600;
    }

    @media screen and (max-width: 944px) {
      display: none;
    }

    &:first-child {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.BLUE};
      display: flex;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BLUE};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      svg {
        fill: ${({ theme }) => theme.COLORS.BLUE};
      }
    }
  }

  &.container_auth--component {
    width: 100%;
    a {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const UserAuthentication = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  ${breakAt(BreakpointSize.md)} {
    display: none;
  }

  .avatarMenuMain {
    width: 40px;
    height: 40px;

    border-radius: 9999px;
    object-fit: cover;

    overflow: hidden;
  }

  > a {
    margin-bottom: -6px;

    svg {
      font-size: 4rem;
      fill: ${({ theme }) => theme.COLORS.BLUE};
    }
  }
`;

export const UserAuthenticationMobile = styled.div`
  display: none;

  ${breakAt(BreakpointSize.md)} {
    display: flex;
  }

  .conta_avatar {
    height: 50px;
    width: 50px;
    cursor: pointer;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const UserMenu = styled.div`
  transition: all 0.2s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 39px;
  right: 0;
  z-index: 2;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  .avatarMenuBar {
    width: 20px;
    height: 20px;

    border-radius: 9999px;
    object-fit: cover;
  }

  &.user-menu__active {
    opacity: 1;
    visibility: visible;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;

    flex-direction: column;
    min-width: 250px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);

    .buttonExit {
      border: 0;
      padding: 0.8rem 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;

      background-color: white;
      transition: all 0.2s ease-in-out;

      border-top: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.RED};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  &.user-menu__mobile {
    position: static;
    padding: 0;
    margin-top: 0.75rem;

    .user-menu__item {
      border: none;
      box-shadow: none;

      p {
        padding: 0 0.75rem;
        span {
          font-size: 1.8rem;

          img {
            width: 50px;
            height: 50px;
          }
        }
      }

      > a {
        padding: 0 0.75rem;
        height: 50px;
        font-size: 1.6rem;

        > span {
          height: 30px;
          width: 30px;
        }
      }

      .buttonExit {
        width: 120px;
        height: 40px;
        background-color: ${({ theme }) => theme.COLORS.RED};
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        border-radius: 5px;
        font-size: 1.6rem;
        margin-left: 0.75rem;
        margin-top: 1rem;

        justify-content: center;
      }
    }
  }
`;

export const UserMenuHeader = styled.p`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  position: relative;
  > span {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    gap: 5px;
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    svg {
      font-size: 2.5rem;
    }
  }
  > a {
    position: absolute;
    top: 1%;
    right: 0;
    top: 16%;
    right: 10px;
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  }

  margin-bottom: 1rem;
`;

export const UserMenuLink = styled(Link)`
  padding: 0.5rem;
  font-size: 1.4rem;
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
  span.circle-color_yellow {
    background-color: #04b4e2;
  }
  span.circle-color_white {
    background-color: #69cf95;
  }
`;

export const OverlayMenu = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1000;
  cursor: pointer;
  visibility: hidden;

  &.overlay-menu__active {
    visibility: visible;
  }
`;

export const MenuMobile = styled.div`
  height: 102vh;
  min-width: 2.75rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  outline: none;
  overflow: hidden auto;
  will-change: transform;

  width: min(100%, 425px);

  cursor: default;

  position: fixed;
  top: 0;
  left: -100%;
  z-index: 1002;

  transition: all 0.2s ease-in-out;

  &.menu-mobile__active {
    left: 0;
  }

  .buttonClose {
    display: flex;
    width: 100%;
    border: 0;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    height: 50px;
    align-items: center;
    gap: 5px;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.RED};
    padding: 0 0.75rem;
  }

  .container_auth {
    background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
    padding: 0 0.75rem;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nave_mobile {
    display: flex;
    flex-direction: column;

    li {
      width: 100%;

      height: 50px;
      border-bottom: 1px solid rgba(236, 236, 236);
      a {
        display: flex;
        align-items: center;

        height: 100%;
        width: 100%;
        padding: 0 0.75rem;
        font-size: 1.8rem;
        font-weight: 400;
        color: #3873ed;

        &.active {
          background-color: #e9effd;
        }
      }
    }
  }
`;

export const ContainerAuth = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: fixed;
  top: 78px;
  left: 0;
  width: 100vw;
  height: 100%;

  display: none;

  &.container_auth--active {
    display: block;
  }
`;
