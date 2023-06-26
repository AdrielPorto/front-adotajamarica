import { Link } from "react-router-dom";

import { Container, SectionNotFound } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import petNotFound from "../../assets/images/petNotFound.png";

const NotFound = () => {
  return (
    <Container>
      <Header />
      <main>
        <SectionNotFound>
          <div className="headerNotFound">
            <img src={petNotFound} alt="Pet não encontrado" />
            <h1>404</h1>
          </div>
          <p className="subtitle">Página não encontrada</p>
          <p className="text">
            Infelizmente, a página que procurava não foi encontrada.
          </p>
          <Link to="/" className="btnHome">
            Ir para o início
          </Link>
        </SectionNotFound>
      </main>
      <Footer />
    </Container>
  );
};

export default NotFound;
