import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.RED};
    text-transform: uppercase;
  }
  .container_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      text-align: left;
      font-size: 1.6rem;
      font-weight: 400;
      strong {
        font-weight: 700;
      }
    }
  }
`;
