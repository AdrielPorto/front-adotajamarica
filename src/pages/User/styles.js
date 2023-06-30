import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const SectionUser = styled.section`
  background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
  position: relative;
  min-height: 450px;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: min(100%, 700px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    h1 {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      margin-top: 10px;
    }
    h4 {
      font-size: 1.8rem;
      margin-top: -5px;
    }
    > p {
      font-size: 1.8rem;
      letter-spacing: 0.2px;
      color: #4a4a4a;
      text-align: center;
      margin: 20px 0;
      ${breakAt(BreakpointSize.sm)} {
        font-size: 1.6rem;
        margin: 20px;
      }
    }
    .meta {
      .meta_item {
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
        padding: 5px 10px;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 5px;
      }
    }
  }
`;

export const SectionUserPets = styled.section`
  padding: 80px 5%;
  border-top: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

  .container {
    width: min(100%, 1140px);
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    ${breakAt(BreakpointSize.md)} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${breakAt(BreakpointSize.sm)} {
      grid-template-columns: 1fr;
    }
  }
`;
