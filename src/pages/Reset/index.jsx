import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";

import BigButton from "../../components/BigButton";
import Loading from "../../components/Loading";

import { RiLockPasswordLine, RiErrorWarningLine } from "react-icons/ri";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";

const Reset = () => {
  const { setMessage } = useAuth();
  const { search } = useLocation();

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [concluded, setConcluded] = useState(false);

  useEffect(() => {
    function getParams() {
      const params = new URLSearchParams(search);
      const token = params.get("token");
      const email = params.get("email");
      if (token) {
        setToken(token);
        setEmail(email);
      }
    }

    getParams();
  }, []);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.senha) {
      errors.senha = "Senha é obrigatório";
    } else if (values.senha.length < 8) {
      errors.senha = "Senha deve conter no mínimo 8 caracteres";
    }

    if (!values.confirmaSenha) {
      errors.confirmaSenha = "Confirmação de senha é obrigatório";
    } else if (values.confirmaSenha !== values.senha) {
      errors.confirmaSenha = "Senhas não coincidem";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      senha: "",
      confirmaSenha: "",
    },
    validateOnChange: false,
    validate,
    onSubmit: (values) => {
      values.token = token;
      values.email = email;
      setLoading(true);

      api
        .patch("/users/reset", values)
        .then((response) => {
          setMessage("Senha resetada com sucesso! Faça login para continuar.");
          navigate("/login");
        })
        .catch((error) => {
          if (error.response.data.message) {
            toast(error.response.data.message, {
              type: "error",
              autoClose: 3000,
              hideProgressBar: true,
            });
          } else {
            toast("Erro ao resetar senha", {
              type: "error",
              autoClose: 3000,
              hideProgressBar: true,
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <Container>
      <Header />
      <main>
        <div className="content">
          {concluded ? (
            <p>ola</p>
          ) : (
            <>
              <h1>Resetar senha</h1>

              <form
                className="registration-form"
                onSubmit={formik.handleSubmit}
              >
                <div className="form-group form-group_senha">
                  <label
                    htmlFor="senha"
                    className={formik.errors.senha ? "errorLabel" : null}
                  >
                    Senha:
                  </label>
                  <Input
                    type={passwordShown ? "text" : "password"}
                    id="senha"
                    name="senha"
                    placeholder="Digite sua nova senha"
                    icon={RiLockPasswordLine}
                    onChange={formik.handleChange}
                    value={formik.values.senha}
                    error={formik.errors.senha ? "errorInput" : null}
                    autoComplete="new-password"
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

                <div className="form-group form-group_senha">
                  <label
                    htmlFor="confirmaSenha"
                    className={
                      formik.errors.confirmaSenha ? "errorLabel" : null
                    }
                  >
                    Confirmar Senha:
                  </label>
                  <Input
                    type={confirmPasswordShown ? "text" : "password"}
                    id="confirmaSenha"
                    name="confirmaSenha"
                    placeholder="Confirme sua nova senha"
                    icon={RiLockPasswordLine}
                    onChange={formik.handleChange}
                    value={formik.values.confirmaSenha}
                    error={formik.errors.confirmaSenha ? "errorInput" : null}
                    autoComplete="new-password"
                  />
                  <span
                    className="password-icon"
                    onClick={toggleConfirmPasswordVisiblity}
                    style={{ cursor: "pointer" }}
                  >
                    {confirmPasswordShown ? (
                      <AiOutlineEyeInvisible size={20} color=" #666" />
                    ) : (
                      <AiOutlineEye size={20} color=" #666" />
                    )}
                  </span>
                </div>
                {formik.errors.confirmaSenha && (
                  <div className="error marginNegative">
                    <RiErrorWarningLine size={18} />
                    {formik.errors.confirmaSenha}
                  </div>
                )}

                <BigButton
                  className="button-authenticate"
                  type="submit"
                  width="100%"
                  background="#000"
                  color="#fff"
                  disabled={loading}
                >
                  {loading ? (
                    <CgSpinner size={30} color="#fff" />
                  ) : (
                    "Alterar Senha"
                  )}
                </BigButton>
              </form>
              <Link className="backLink" to="/login">
                Voltar para login
              </Link>
            </>
          )}
        </div>
      </main>
      <Footer />

      <ToastContainer />
    </Container>
  );
};

export default Reset;
