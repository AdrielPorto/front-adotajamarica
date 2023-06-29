import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: footer;
  padding: 0 5%;

  ${breakAt(BreakpointSize.sm)} {
    height: auto;
    padding-bottom: 16px;
  }

  .footer-container {
    width: min(100%, 1140px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakAt(BreakpointSize.md)} {
      flex-direction: column;
    }

    .logos {
      display: flex;
      align-items: center;
      gap: 50px;
      ${breakAt(BreakpointSize.sm)} {
        flex-direction: column;
        gap: 0;
      }
      .social_media {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 16px;
        margin-top: 16px;
      }
    }
    .desenvolvedores {
      margin-top: 16px;

      font-size: 1.5rem;
      text-align: right;
      ${breakAt(BreakpointSize.sm)} {
        text-align: center;
        span {
          width: 100%;
          text-align: center;
          font-size: 1.3rem;
        }
      }
      P {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        ${breakAt(BreakpointSize.sm)} {
          text-align: center;
          font-size: 1.3rem;
        }
        a {
          color: ${({ theme }) => theme.COLORS.ORANGE};
          font-weight: 700;
        }
      }
    }
  }
`;

export const Icones = styled.a`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

  color: ${({ theme }) => theme.COLORS.BLUE};

  font-size: 2rem;

  width: 40px;
  height: 40px;

  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
