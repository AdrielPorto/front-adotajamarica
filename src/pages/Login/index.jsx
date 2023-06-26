import { auth, provider } from "../../services/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { RiLockPasswordLine, RiErrorWarningLine } from "react-icons/ri";
import { BsEnvelopeAt } from "react-icons/bs";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import BigButton from "../../components/BigButton";

const Login = () => {
  const { signIn, signInGoogle, data, message, setMessage } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const rotaAtual = location.pathname;

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "E-mail obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "E-mail inválido";
    }

    if (!values.senha) {
      errors.senha = "Senha obrigatória";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validate,
    validateOnChange: false,

    onSubmit: (values) => {
      signIn(values);
      if (data) {
        if (rotaAtual === "/login") {
          navigate("/");
        }
      }
    },
  });

  const handleGoogleLogin = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const { email, uid: google_id } = result.user;

          const values = {
            email,
            google_id,
          };

          signInGoogle(values);

          if (data) {
            if (rotaAtual === "/login") {
              navigate("/");
            }

            return;
          }
        })
        .catch((error) => {
          if (error.response) {
            toast(error.response.data.message, {
              type: "error",
              hideProgressBar: true,
              autoClose: 3000,
            });
          } else {
            toast("Erro ao realizar o cadastro!", {
              type: "error",
              hideProgressBar: true,
              autoClose: 3000,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (message) {
        toast(message, {
          type: "success",
          hideProgressBar: true,
        });
        setMessage("");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <h1>Faça Login</h1>
          <BigButton
            type="submit"
            width="100%"
            className="button-authenticate"
            onClick={handleGoogleLogin}
          >
            <svg
              className="svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                fillRule="evenodd"
                fillOpacity="1"
                fill="#4285f4"
                stroke="none"
              ></path>
              <path
                d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
                fillRule="evenodd"
                fillOpacity="1"
                fill="#34a853"
                stroke="none"
              ></path>
              <path
                d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                fillRule="evenodd"
                fillOpacity="1"
                fill="#fbbc05"
                stroke="none"
              ></path>
              <path
                d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                fillRule="evenodd"
                fillOpacity="1"
                fill="#ea4335"
                stroke="none"
              ></path>
            </svg>
            Entrar com o Google
          </BigButton>
          <span>ou</span>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label
                htmlFor="email"
                className={formik.errors.email ? "errorLabel" : null}
              >
                E-mail:
              </label>
              <Input
                placeholder="Digite seu e-mail"
                icon={BsEnvelopeAt}
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email ? "errorInput" : null}
              />

              {formik.errors.email && (
                <div className="error marginNegative">
                  <RiErrorWarningLine size={18} />
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="form-group form-group_senha">
              <label
                htmlFor="senha"
                className={formik.errors.senha ? "errorLabel" : null}
              >
                Senha:
              </label>
              <Input
                placeholder="Digite sua senha"
                icon={RiLockPasswordLine}
                type={passwordShown ? "text" : "password"}
                name="senha"
                id="senha"
                onChange={formik.handleChange}
                value={formik.values.senha}
                error={formik.errors.senha ? "errorInput" : null}
              />
              <span
                className="password-icon"
                onClick={togglePasswordVisiblity}
                style={{ cursor: "pointer" }}
              >
                {passwordShown ? (
                  <AiOutlineEyeInvisible size={20} color=" #666" />
                ) : (
                  <AiOutlineEye size={20} color=" #666" />
                )}
              </span>
            </div>
            {formik.errors.senha && (
              <div className="error marginNegative">
                <RiErrorWarningLine size={18} />
                {formik.errors.senha}
              </div>
            )}
            <BigButton
              type="submit"
              width="100%"
              className="button-authenticate"
              background="#000"
              color="#fff"
            >
              Entrar
            </BigButton>
          </form>

          <Link className="reset-password" to="/esquecido">
            Esqueci minha senha
          </Link>

          <p>
            Não tem uma conta? <Link to="/registro"> Cadastre-se</Link>
          </p>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Login;
