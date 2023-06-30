import { createGlobalStyle } from "styled-components";
import { BreakpointSize, breakAt } from "../../assets/styles/responsive";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        
    }
    html{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
        position: relative;
    }

    main{
        margin-top:78px;
        
    }

    body, input, button, textarea{
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration: none;
    }
    button,
    a{
        cursor: pointer;
    }

    img{
        max-width: 100%;
    }

    li{
        list-style: none;
    }
    .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    z-index: 999;
    align-items: center;
  }

  
    .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    width: 90%;
    max-width: 576px;
    background: white;
    border-radius: 5px;    
   
    }
    .header-modal{
        border-bottom: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }

    .body-modal{
        padding: 10px;


        p{
            font-size: 1.6rem;
            font-weight: 400;
            margin-bottom: 5px;
        }
    }

    .footer-modal{
        
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
        margin-bottom: 10px;
        padding: 0 10px;

        button{
            font-size: 1.6rem;
            font-weight: 600;
            background-color: ${({ theme }) => theme.COLORS.RED};
            color: ${({ theme }) => theme.COLORS.WHITE};
            border:1px solid ${({ theme }) => theme.COLORS.RED};
            padding: 10px 20px;
            border-radius: 5px;

            transition: all 0.2s ease-in-out;

            &:hover{
              opacity: 0.8;
            }
        }
    }
    .modal-confirm{
      width: 90%;
      max-width: 420px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 5px;

    .footer-modal{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      .confirmModal{
        background-color: ${({ theme }) => theme.COLORS.BLUE};
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
      }
    }
    }


  
    .area-box {
      border: 2px solid ${({ theme }) => theme.COLORS.BLACK_LIGHT};
      border-radius: 5px;
      padding: 20px 25px;
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.02);
      margin-bottom: 25px;

      label {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
        margin-bottom: 5px;
        display: block;
        font-weight: 500;
      }
      .form-group {
        margin-bottom: 10px;
        position: relative;

        &_senha {
          input {
            padding-right: 30px;
          }
        }

        .password-icon {
          position: absolute;
          top: 50%;
          right: 10px;
        }
        &.form-group_disabled, &.disabled_cep {
          > div {
            background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
          }
        }
        input[disabled] {
          background-color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};
        }
      }
    }

    .btn-salvar {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 50px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS.BLUE};
      border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #4e83ef;
        border: 2px solid #4e83ef;
      }

      &:disabled {
        background-color: #7ba2f3;
        border: 2px solid #7ba2f3;
        cursor: not-allowed;

        svg{
          color: ${({ theme }) => theme.COLORS.WHITE_LIGHT};

          animation: rotate .8s linear infinite;

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
    }
    .error {
        color: ${({ theme }) => theme.COLORS.RED};
        font-size: 1.4rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;

        &.marginNegative {
          margin-top: -12px;
        }
      }

      .errorLabel {
        color: ${({ theme }) => theme.COLORS.RED} !important;
      }
      select.errorInput {
        border: 2px solid ${({ theme }) => theme.COLORS.RED} !important;
      }
      .errorFile{
        border: 2px dashed ${({ theme }) => theme.COLORS.RED} !important;
        color: ${({ theme }) => theme.COLORS.RED} !important;
        span{
          color: ${({ theme }) => theme.COLORS.RED} !important;
        }

        svg{
          color: ${({ theme }) => theme.COLORS.RED} !important;
        }
      }

      
`;
