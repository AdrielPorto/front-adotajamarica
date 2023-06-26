import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 170px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  grid-area: footer;

  padding: 0 5%;

  .footer-container {
    width: min(100%, 1140px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logos {
      display: flex;
      align-items: center;
      gap: 50px;
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
      P {
        color: ${({ theme }) => theme.COLORS.ORANGE};
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
