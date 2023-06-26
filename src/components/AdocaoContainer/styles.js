import styled from "styled-components";

export const GridAdotar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 32px;

  .item-adotar {
    width: 30%;
    margin: 0px;
    flex: 2;
    display: flex;
    flex-direction: column;

    text-align: left;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 5px;

    border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};

    padding: 12px;

    justify-content: space-between;

    img {
      width: 100px;
      height: auto;
      margin: 0 auto;
    }
    h3 {
      width: 100%;

      &.last_title {
        margin-top: 12px;
      }
    }
    p {
      width: 100%;

      &.last_paragraph {
        margin-top: 12px;
      }
    }
  }
`;
