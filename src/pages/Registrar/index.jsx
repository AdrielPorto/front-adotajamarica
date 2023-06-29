import { auth, provider } from "../../services/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Select from "../../components/Select";
import BigButton from "../../components/BigButton";
import Loading from "../../components/Loading";

import { BiUser, BiPhone } from "react-icons/bi";
import { RiLockPasswordLine, RiErrorWarningLine } from "react-icons/ri";
import { BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import CustomModal from "../../components/Modal";

const Valueoptions = [
  { value: "", label: "Selecione uma opção" },
  { value: "ONG", label: "ONG" },
  { value: "pessoa física", label: "Pessoa Física" },
];

const maskOptions = {
  mask: "(99) 99999-9999",
};

const Registrar = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const { signIn, signInGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const {
          displayName: nome,
          email,
          phoneNumber: telefone,
          photoURL: avatar,
          uid: google_id,
        } = result.user;

        const data = {
          nome,
          email,
          telefone,
          avatar,
          google_id,
        };

        api
          .post("/users/google", data)
          .then((response) => {
            setOverlay(true);

            signInGoogle({
              email: data.email,
              google_id: data.google_id,
            });

            navigate("/");
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
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.nome) {
      errors.nome = "Nome é obrigatório";
    }

    if (!values.email) {
      errors.email = "Email é obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Endereço de email inválido";
    }

    if (!values.telefone) {
      errors.telefone = "Telefone é obrigatório";
    } else if (values.telefone.length < 15) {
      errors.telefone = "Telefone inválido";
    } else if (!values.telefone.startsWith("(21)")) {
      errors.telefone = "O número de telefone deve ter o DDD 21";
    }

    if (!values.categoria) {
      errors.categoria = "Categoria é obrigatório";
    }

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
      nome: "",
      email: "",
      senha: "",
      confirmaSenha: "",
      telefone: "",
      categoria: "",
    },
    validateOnChange: false,
    validate,
    onSubmit: (values) => {
      api
        .post("/users", values)
        .then((response) => {
          setOverlay(true);

          signIn({
            email: values.email,
            senha: values.senha,
          });

          navigate("/");
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
    },
  });

  return (
    <Container>
      <Header />
      <main>
        <h1>Criar uma nova conta</h1>
        <BigButton
          type="submit"
          width="100%"
          className="button-authenticate"
          onClick={handleGoogleSignIn}
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
          Cadastrar com o Google
        </BigButton>

        <span>ou</span>
        <form className="registration-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label
              htmlFor="nome"
              className={formik.errors.nome ? "errorLabel" : null}
            >
              Nome:
            </label>
            <Input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome ou nome da ONG"
              icon={BiUser}
              onChange={formik.handleChange}
              value={formik.values.nome}
              error={formik.errors.nome ? "errorInput" : null}
            />{" "}
            {formik.errors.nome && (
              <div className="error">
                <RiErrorWarningLine size={18} />
                {formik.errors.nome}
              </div>
            )}
          </div>

          <div className="form-group">
            <label
              htmlFor="email"
              className={formik.errors.email ? "errorLabel" : null}
            >
              E-mail:
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              icon={BsEnvelopeAt}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email ? "errorInput" : null}
            />

            {formik.errors.email && (
              <div className="error">
                <RiErrorWarningLine size={18} />
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="form-group">
            <label
              htmlFor="telefone"
              className={formik.errors.telefone ? "errorLabel" : null}
            >
              Telefone:
            </label>
            <Input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Digite seu telefone com DDD"
              icon={BiPhone}
              {...maskOptions}
              onChange={formik.handleChange}
              value={formik.values.telefone}
              error={formik.errors.telefone ? "errorInput" : null}
            />
            {formik.errors.telefone && (
              <div className="error">
                <RiErrorWarningLine size={18} />
                {formik.errors.telefone}
              </div>
            )}
          </div>

          <div className="form-group">
            <label
              htmlFor="categoria"
              className={formik.errors.categoria ? "errorLabel" : null}
            >
              Categoria:
            </label>
            <Select
              options={Valueoptions}
              id="categoria"
              name="categoria"
              onChange={formik.handleChange}
              value={formik.values.categoria}
              className={formik.errors.categoria ? "errorSelect" : null}
            />

            {formik.errors.categoria && (
              <div className="error">
                <RiErrorWarningLine size={18} />
                {formik.errors.categoria}
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
              type={passwordShown ? "text" : "password"}
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              icon={RiLockPasswordLine}
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

          <div className="form-group form-group_senha">
            <label
              htmlFor="confirmaSenha"
              className={formik.errors.confirmaSenha ? "errorLabel" : null}
            >
              Confirmar Senha:
            </label>
            <Input
              type={confirmPasswordShown ? "text" : "password"}
              id="confirmaSenha"
              name="confirmaSenha"
              placeholder="Confirme sua senha"
              icon={RiLockPasswordLine}
              onChange={formik.handleChange}
              value={formik.values.confirmaSenha}
              error={formik.errors.confirmaSenha ? "errorInput" : null}
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
          <div className="form-group-termos">
            <div htmlFor="termos">
              Eu li e concordo com os{" "}
              <CustomModal
                openerElement={
                  <span>Termos de Uso e Política de Privacidade</span>
                }
                title="Termos de Uso"
              >
                <p>
                  Eu declaro que aceito e concordo com os termos e condições do
                  sistema de adoção de cachorros abandonados, e autorizo a
                  coleta, armazenamento, uso e compartilhamento dos meus dados
                  pessoais pela <strong>AdotaJáMaricá</strong>, em conformidade
                  com as disposições da{" "}
                  <a
                    target="_blank"
                    href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                  >
                    Lei Geral de Proteção de Dados (LGPD) 13.709/2018
                  </a>{" "}
                  do Brasil.
                </p>
                <p>
                  Declaro também que fui informado(a) sobre meus direitos de
                  acesso, correção, exclusão, anonimização e portabilidade dos
                  meus dados pessoais, bem como sobre as responsabilidades da{" "}
                  <strong>AdotaJáMaricá</strong> em relação à segurança dos meus
                  dados pessoais.
                </p>
                <p>
                  Este termo de aceitação entra em vigor a partir da data de
                  minha adesão ao sistema de adoção de cachorros abandonados, e
                  permanece válido até a revogação expressa por minha parte, nos
                  termos da <strong>LGPD</strong>.
                </p>
              </CustomModal>
            </div>
            <input type="checkbox" name="termos" id="termos" required />
          </div>

          <div className="form-group-termos_mobile">
            <div htmlFor="termos">
              <input type="checkbox" name="termos" id="termos" required /> Eu li
              e concordo com os:{" "}
            </div>
            <CustomModal
              openerElement={
                <span>Termos de Uso e Política de Privacidade</span>
              }
              title="Termos de Uso"
            >
              <p>
                Eu declaro que aceito e concordo com os termos e condições do
                sistema de adoção de cachorros abandonados, e autorizo a coleta,
                armazenamento, uso e compartilhamento dos meus dados pessoais
                pela <strong>AdotaJáMaricá</strong>, em conformidade com as
                disposições da{" "}
                <a
                  target="_blank"
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                >
                  Lei Geral de Proteção de Dados (LGPD) 13.709/2018
                </a>{" "}
                do Brasil.
              </p>
              <p>
                Declaro também que fui informado(a) sobre meus direitos de
                acesso, correção, exclusão, anonimização e portabilidade dos
                meus dados pessoais, bem como sobre as responsabilidades da{" "}
                <strong>AdotaJáMaricá</strong> em relação à segurança dos meus
                dados pessoais.
              </p>
              <p>
                Este termo de aceitação entra em vigor a partir da data de minha
                adesão ao sistema de adoção de cachorros abandonados, e
                permanece válido até a revogação expressa por minha parte, nos
                termos da <strong>LGPD</strong>.
              </p>
            </CustomModal>
          </div>

          <BigButton
            className="button-authenticate"
            type="submit"
            width="100%"
            background="#000"
            color="#fff"
          >
            Criar Conta
          </BigButton>
        </form>
        <p>
          Já possui uma conta? <Link to="/login">Entrar</Link>
        </p>
      </main>
      <Footer />

      <ToastContainer />

      {overlay && <Loading />}
    </Container>
  );
};

export default Registrar;
