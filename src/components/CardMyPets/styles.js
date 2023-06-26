import styled from "styled-components";
export const Container = styled.div`
  border: 1.5px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  border-radius: 5px;
  position: relative;
`;

export const ButtonOptions = styled.button`
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.8rem;
  border: none;

  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.COLORS.WHITE};

  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Popover = styled.div`
  position: absolute;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  z-index: 2;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  top: 45px;
  right: 0px;
  ul {
    display: flex;
    flex-direction: column;
    width: 145px;
    text-align: center;
    li {
      a {
        width: 100%;
        display: block;
        padding: 10px 20px;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};

        font-size: 1.4rem;

        transition: all 0.2s ease-in-out;

        border-top-right-radius: 5px;
        border-top-left-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.BLUE};
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      button {
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 10px 20px;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};

        transition: all 0.2s ease-in-out;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.RED};
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 9px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
    transition: all 0.2s ease-in-out;
  }

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease-in-out;
  }
`;

export const CardHeader = styled.div`
  a {
    > img {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      width: 100%;
      height: 185px;
      object-fit: cover;
      overflow: hidden;
    }
  }
`;

export const CardBody = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  .flag {
    border-radius: 20px;
    font-weight: 600;
    padding: 4px 10px;
    font-size: 1.2rem;

    &.disponivel {
      background-color: rgb(236, 253, 245);
      color: #047857;
    }

    &.adotado {
      background-color: rgb(253, 234, 236);
      color: ${({ theme }) => theme.COLORS.RED};
    }

    &.doado {
      background-color: rgb(233, 239, 253);
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  h5 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
    /* margin-left: 5px; */
  }

  .address {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.4rem;
    svg {
      color: #10b981;
    }
  }
`;
