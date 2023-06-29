import { useState } from "react";
import { useFormik } from "formik";
import { Container } from "./styles";
import { api } from "../../services/api";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsEnvelopeAt } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import BigButton from "../../components/BigButton";
import petConfirm from "../../assets/images/pet_confirm.png";

const Esquecido = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "E-mail obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "E-mail inválido";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    validateOnChange: false,

    onSubmit: (values) => {
      setLoading(true);

      api
        .post(`/users/recovery`, values)
        .then((res) => {
          values.resetLink = res.data.resetLink;

          emailjs
            .send(
              "service_jqbvoah",
              "template_0f4ac2r",
              values,
              "WLmcJNm8EayW0UQTQ"
            )
            .then(
              (res) => {
                toast("E-mail enviado com sucesso!", {
                  type: "success",
                  autoClose: 3000,
                  hideProgressBar: true,
                });
                setShowMessage(true);
                setLoading(false);
              },
              (err) => {
                toast("Erro ao enviar mensagem!", {
                  type: "error",
                  hideProgressBar: true,
                  autoClose: 3000,
                });
                console.log(err);
                setLoading(false);
              }
            );
        })
        .catch((err) => {
          console.log(err.response.data.message);
          console.log(err.response);
          if (err.response.data.message) {
            toast(err.response.data.message, {
              type: "error",
              autoClose: 3000,
              hideProgressBar: true,
            });
          } else {
            toast("Erro ao enviar e-mail!", {
              type: "error",
              hideProgressBar: true,
              autoClose: 3000,
            });
          }

          setLoading(false);
        });
    },
  });

  return (
    <Container>
      <Header />
      <main>
        <div
          className={showMessage ? "container container-message" : "container"}
        >
          {showMessage ? (
            <>
              <img src={petConfirm} alt="Pet confirm" />{" "}
              <p className="message">
                Em breve <strong>{formik.values.email}</strong>, você receberá
                um e-mail com instruções sobre como redefinir sua senha. Se o
                e-mail não chegar, verifique sua caixa de spam.
              </p>
              <Link className="reset-password" to="/login">
                Voltar para o login
              </Link>
            </>
          ) : (
            <>
              <h1>Recuperar senha </h1>

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

                <BigButton
                  type="submit"
                  width="100%"
                  className="button-authenticate"
                  background="#000"
                  color="#fff"
                  disabled={loading}
                >
                  {loading ? (
                    <CgSpinner size={30} className="loading" />
                  ) : (
                    "Recuperar"
                  )}
                </BigButton>
              </form>

              <Link className="reset-password" to="/login">
                Cancelar
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

export default Esquecido;
