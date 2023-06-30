import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const BoxFilter = styled.div`
  &.removeBd {
    border: none;
    padding: 0 10px;

    @media screen and (max-width: 620px) {
      margin-bottom: -10px;
    }
  }

  .btn-group {
    display: flex;
    label {
      background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
      width: 115px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      border-top: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

      &:first-child {
        border-radius: 5px 0 0 5px;
        border-left: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
        border-right: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      }

      cursor: pointer;
      transition: all 0.2s ease-in-out;

      input[type="radio"] {
        visibility: hidden;
      }

      input[type="radio"]:checked + label {
        background-color: ${({ theme }) => theme.COLORS.BLUE};
      }
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 50%,
        ${({ theme }) => theme.COLORS.BLUE} 50%,
        ${({ theme }) => theme.COLORS.BLUE}
      );
      background-position: 100% 0;
      background-size: 200% 100%;
      transition: all 0.2s ease-in-out;
      &.active {
        background-position: 0 0;

        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      &:hover {
        opacity: 0.8;
      }
    }
    @media screen and (max-width: 620px) {
      display: none;
    }
  }
  .btn-group_mobile {
    display: none;
    @media screen and (max-width: 620px) {
      display: flex;
      margin-top: 40px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      gap: 20px;
      label {
        background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        border-top: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

        &:first-child {
          border-radius: 5px;
          border: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        }

        &:last-child {
          border-radius: 5px;
          border: 1px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        }

        cursor: pointer;
        transition: all 0.2s ease-in-out;

        input[type="radio"] {
          visibility: hidden;
        }

        input[type="radio"]:checked + label {
          background-color: ${({ theme }) => theme.COLORS.BLUE};
        }
        background-image: linear-gradient(
          to left,
          transparent,
          transparent 50%,
          ${({ theme }) => theme.COLORS.BLUE} 50%,
          ${({ theme }) => theme.COLORS.BLUE}
        );
        background-position: 100% 0;
        background-size: 200% 100%;
        transition: all 0.2s ease-in-out;
        &.active {
          background-position: 0 0;

          color: ${({ theme }) => theme.COLORS.WHITE};
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .closed-filter {
    display: none;
    @media screen and (max-width: 620px) {
      display: flex;
      align-items: center;

      justify-content: space-between;
      span {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.BLUE};
        display: flex;
        align-items: center;
        gap: 5px;
      }

      button {
        color: ${({ theme }) => theme.COLORS.BLUE};
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
      }
    }
  }

  &.borderTop {
    border-top: 1px solid #dee2e6;
  }

  &.borderBottom {
    border-bottom: 1px solid #dee2e6;
  }
  .box-label {
    display: flex;
    flex-direction: column;
    button {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.BLUE};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      width: 100%;
      height: 40px;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: rgba(35, 99, 236, 0.1);
      }
      svg {
        font-size: 2.4rem;
      }
    }
    .innerBox {
      display: flex;
      flex-direction: column;

      display: none;

      transition: all 0.2s ease-in-out;

      &.active {
        display: flex;
      }

      label {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        padding: 5px 10px;

        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
        }
      }
    }
  }

  &.removeBTborder {
    border-bottom: none;
  }
  &.marginTop {
    margin-top: 20px;
  }
`;
