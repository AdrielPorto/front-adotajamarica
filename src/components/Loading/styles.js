import styled from "styled-components";
import LogoLoading from "../../assets/images/logo_login.png";
export const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  background-color: rgb(245 245 245 / 25%);

  backdrop-filter: blur(2px);

  .loading-container {
    height: 150px;
    width: 150px;
    border-radius: 50%;

    background: url(${LogoLoading});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    animation: animate-pulse 2s linear infinite;

    @keyframes animate-pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(252, 169, 43, 0.7),
          0 0 0 0 rgba(252, 169, 43, 0.7);
        border-radius: 50%;
      }
      40% {
        box-shadow: 0 0 0 50px rgba(252, 169, 43, 0),
          0 0 0 0 rgba(252, 169, 43, 0.7);
        border-radius: 50%;
      }
      80% {
        box-shadow: 0 0 0 50px rgba(252, 169, 43, 0),
          0 0 0 30px rgba(252, 169, 43, 0);
        border-radius: 50%;
      }
      100% {
        box-shadow: 0 0 0 0 rgba(252, 169, 43, 0),
          0 0 0 30px rgba(252, 169, 43, 0);
        border-radius: 50%;
      }
    }
  }
`;
