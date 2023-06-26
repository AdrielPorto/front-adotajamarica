import styled from "styled-components";

export const BigButtonStyle = styled.button`
  border-radius: 5px;
  box-shadow: 3px 3px 0 #000;
  padding: 20px;
  border: 2px solid #000;
  font-size: 2.4rem;
  width: ${(props) => props.width || "auto"};
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.background || "transparent"};
  font-weight: 500;

  transition: all 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  &:active {
    box-shadow: 1px 1px 0 #000;
    transform: translate(2px, 2px);
  }

  &:disabled {
    cursor: not-allowed;
    svg {
      color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};

      animation: rotate 0.8s linear infinite;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  &.button-authenticate {
    box-shadow: none;
    padding: 0;
    height: 50px;
    font-size: 2rem;

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
