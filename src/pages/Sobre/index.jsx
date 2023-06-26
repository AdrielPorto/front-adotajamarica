import { Container, SectionSobre } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Line from "../../components/Line";

import mission from "../../assets/images/mission.jpg";
import vision from "../../assets/images/vision.jpg";
import values from "../../assets/images/values.jpg";

import theme from "../../assets/styles/theme";
const { COLORS } = theme;

const Sobre = () => {
  return (
    <Container>
      <Header />
      <main>
        <section className="titlePage">
          <div className="container">
            <h1>Sobre o AdotaJáMaricá </h1>
            <p>
              Transformando vidas e promovendo o bem-estar animal: conheça o
              AdotaJáMaricá
            </p>
          </div>
          <Line color={COLORS.RED} />
        </section>

        <SectionSobre>
          <div className="container">
            <div className="content">
              <h2>NOSSA MISSÃO</h2>
              <p>
                Nossa missão é facilitar e promover a adoção responsável de
                pets, visando reduzir o número de animais abandonados e
                proporcionar alegria e companheirismo nas vidas das famílias
                adotantes.
              </p>
              <p>
                Através da nossa plataforma, buscamos conscientizar a sociedade
                sobre a importância da adoção e fornecer um ambiente seguro e
                confiável para conectar aqueles que desejam adotar um animal com
                aqueles que estão prontos para doar.
              </p>
            </div>

            <img src={mission} alt="Missão imagem" />
          </div>
          <Line color={COLORS.WHITE} />
        </SectionSobre>

        <SectionSobre>
          <div className="container">
            <div className="content">
              <h2>NOSSA VISÃO</h2>
              <p>
                Nossa visão é criar um mundo onde todos os pets encontrem um lar
                amoroso e responsável. Desejamos ser a plataforma de referência
                para adoção de animais de estimação, conectando pessoas e
                organizações comprometidas com o bem-estar animal.
              </p>
            </div>

            <img src={vision} alt="Visão imagem" />
          </div>
          <Line color={COLORS.WHITE} />
        </SectionSobre>

        <SectionSobre>
          <div className="container">
            <div className="content">
              <h2>NOSSOS VALORES</h2>
              <ul>
                <li>
                  <p>
                    <strong>Bem-estar animal:</strong> Colocamos o bem-estar dos
                    animais em primeiro lugar, garantindo que todos os pets
                    cadastrados em nossa plataforma sejam tratados com respeito,
                    cuidado e amor.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Respeito:</strong> respeitamos a vida e a dignidade
                    de todos os animais.
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Educação e conscientização: </strong>
                    Acreditamos que a educação e a conscientização são a chave
                    para a mudança. Por isso, buscamos educar a sociedade sobre
                    a importância da adoção responsável e conscientizar sobre a
                    posse responsável de animais de estimação.
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Transparência:</strong> somos transparentes em todas
                    as nossas ações e decisões.
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Excelência e inovação:</strong> Buscamos
                    constantemente a excelência em nossos serviços e inovação em
                    nossa plataforma, utilizando tecnologia avançada para
                    facilitar a adoção e melhorar a experiência de todos os
                    envolvidos..
                  </p>
                </li>
              </ul>
            </div>

            <img src={values} alt="Valores imagem" />
          </div>
        </SectionSobre>
      </main>
      <Footer />
    </Container>
  );
};

export default Sobre;
