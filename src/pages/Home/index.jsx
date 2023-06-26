import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/auth";
import { ToastContainer } from "react-toastify";
import { api } from "../../services/api";

import { GiDogHouse } from "react-icons/gi";
import { TbSpeakerphone } from "react-icons/tb";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/slider";
import SliderItem from "../../components/sliderItem";
import Line from "../../components/Line";
import CardPets from "../../components/CardPets";
import { BigButtonLink } from "../../components/BigButtonLink";
import AdocaoContainer from "../../components/AdocaoContainer";
import Carrousel from "../../components/Carrousel";
import Loading from "../../components/Loading";

import {
  HomeContainer,
  SectionPets,
  GridContainer,
  SectionAdotar,
  SectionDivulgacao,
} from "./styles";
import theme from "../../assets/styles/theme";
const { COLORS } = theme;

import item1 from "../../assets/images/slide-1.png";
import item2 from "../../assets/images/slide-2.png";

const Home = () => {
  const { user } = useAuth();
  const [petsData, setPetsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const response = await api.get("/pets/recentPets");
        setPetsData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPetsData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <Header />
      <main>
        <Slider segPlay={5000}>
          <SliderItem>
            <img src={item1} alt="item1" />
          </SliderItem>
          <SliderItem>
            <img src={item2} alt="item2" />
          </SliderItem>
        </Slider>

        <section className="divulgacao-btn">
          <BigButtonLink
            to="/encontrar-pets"
            width="470px"
            color={COLORS.WHITE}
            background={COLORS.BLUE}
          >
            <GiDogHouse />
            Quero Adotar Um Pet
          </BigButtonLink>

          <BigButtonLink to="/add-pet" width="470px" color={COLORS.BLUE}>
            <TbSpeakerphone />
            Quero Doar Um Pet
          </BigButtonLink>
          <Line color={COLORS.WHITE} />
        </section>

        <SectionPets>
          <div className="container">
            <h2>Últimos Pets Cadastrados</h2>

            <GridContainer>
              {petsData.map((pet) => {
                if (pet.fotos?.length > 0) {
                  return (
                    <CardPets
                      key={pet.id}
                      id={pet.id}
                      nome={pet.nome}
                      bairro={pet.bairro}
                      faixa_etaria={pet.faixa_etaria}
                      porte_fisico={pet.porte_fisico}
                      genero={pet.genero}
                      fotos={pet.fotos[0]}
                      data={pet.data_criacao}
                      usuario_id={pet.usuario_id}
                      disponivel={pet.disponibilidade}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </GridContainer>
          </div>
          <Line color={COLORS.WHITE} />
        </SectionPets>

        <SectionAdotar>
          <div className="container">
            <h2>Por Que Adotar?</h2>
            <AdocaoContainer />
          </div>
          <Line color={COLORS.RED} />
        </SectionAdotar>

        <SectionDivulgacao>
          <div className="container">
            <h2>
              Nossos Apoiadores <span>🐾</span>
            </h2>

            <Carrousel />
          </div>
        </SectionDivulgacao>
      </main>

      <Footer />
      <ToastContainer />
    </HomeContainer>
  );
};

export default Home;
