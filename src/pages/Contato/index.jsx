import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Container, SectionContact, Form } from "./styles";
import { toast, ToastContainer } from "react-toastify";

import { IoLogoWhatsapp } from "react-icons/io5";
import { BsFillEnvelopeAtFill, BsFillTelephoneFill } from "react-icons/bs";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import BigButton from "../../components/BigButton";
import Loading from "../../components/Loading";

import Line from "../../components/Line";

import theme from "../../assets/styles/theme";
const { COLORS } = theme;

const maskOptions = {
  mask: "(99) 99999-9999",
};
const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(nome, email, whatsApp, assunto, mensagem);
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
      toast("Preencha todos os campos!", {
        type: "error",
        hideProgressBar: true,
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      whats: whatsApp,
      assunto: assunto,
      message: mensagem,
    };

    emailjs
      .send(
        "service_jqbvoah",
        "template_l5chw2j",
        templateParams,
        "WLmcJNm8EayW0UQTQ"
      )
      .then(
        (res) => {
          toast("Mensagem enviada com sucesso!", {
            type: "success",
            hideProgressBar: true,
            autoClose: 3000,
          });

          setNome("");
          setEmail("");
          setWhatsApp("");
          setAssunto("");
          setMensagem("");
          console.log(nome, email, whatsApp, assunto, mensagem);
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
  };

  return (
    <Container>
      <Header />
      <main>
        <section className="headerContact">
          <div className="container">
            <h1>Entre em Contato</h1>
            <p>
              Estamos aqui para ajudar! Entre em contato conosco para tirar suas
              dúvidas, resolver problemas.
            </p>
          </div>
          <Line color={COLORS.ORANGE} />
        </section>

        <SectionContact>
          <div className="container">
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  value={nome}
                  required
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="whatsApp">WhatsApp:</label>
                <Input
                  type="text"
                  id="whatsApp"
                  name="whatsApp"
                  placeholder="WhatsApp"
                  onChange={(e) => setWhatsApp(e.target.value)}
                  value={whatsApp}
                  {...maskOptions}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nome">Assunto:</label>
                <Input
                  type="text"
                  id="assunto"
                  name="assunto"
                  placeholder="Digite o assunto"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <TextArea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Mensagem"
                  onChange={(e) => setMensagem(e.target.value)}
                  value={mensagem}
                  required
                />
              </div>
              <BigButton
                type="submit"
                width="100%"
                color={COLORS.WHITE}
                background={COLORS.ORANGE}
              >
                Enviar
              </BigButton>
            </Form>

            <div className="content">
              <a href="tel:(21)%98086-0707">
                <BsFillTelephoneFill color={COLORS.BLUE} size={40} />
                (21) 98086-0707
              </a>
              <a href="https://api.whatsapp.com/send?phone=21980860707">
                <IoLogoWhatsapp color="#22c55e" size={40} />
                (21) 98086-0707
              </a>

              <a href="mailto:adotajamarica@gmail.com">
                <BsFillEnvelopeAtFill color={COLORS.BLUE} size={40} />
                adotajamarica@gmail.com
              </a>
            </div>
          </div>
        </SectionContact>
      </main>

      <Footer />
      <ToastContainer />
      {loading && <Loading />}
    </Container>
  );
};

export default Contato;
