import styled from "styled-components";

export const SectionPaginate = styled.div`
  width: min(100%, 1140px);
  margin: 0 auto;

  margin-top: -50px;
  margin-bottom: 20px;

  ul {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    padding: 0;
    gap: 10px;
  }

  ul a {
    cursor: default;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  ul li:not(.disabled) a:hover {
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
  }
  ul li.selected {
    a {
      background: ${({ theme }) => theme.COLORS.ORANGE};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .paginationActive {
    a {
      background: ${({ theme }) => theme.COLORS.ORANGE};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  ul li a {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li.active a {
    color: #fff;
    background: #6c7ac9;
  }

  ul li.disabled a {
    pointer-events: none;
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
  }
`;
