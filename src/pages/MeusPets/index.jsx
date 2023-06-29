import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";
import {
  qtdPetsDisponiveis,
  qtdPetsDoados,
  qtdPetsAdotados,
} from "../../utils/containsArray";
import { ToastContainer, toast } from "react-toastify";

import {
  Container,
  Section,
  InfoPet,
  CardInfoPet,
  BannerFilterPets,
  ContainerMyPets,
} from "./styles";

import Adopt from "../../assets/images/dog-training.png";
import Adopeted from "../../assets/images/love.png";
import AddMore from "../../assets/images/vet.png";
import CatLove from "../../assets/images/cat.png";
import Dog from "../../assets/images/dog.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import Select from "../../components/Select";
import CardMyPets from "../../components/CardMyPets";
import Loading from "../../components/Loading";

const optionsFilter = [
  {
    value: "Todos",
    label: "Todos",
  },
  {
    value: "disponiveis",
    label: "Disponiveis para adoção",
  },
  {
    value: "doados",
    label: "Doados",
  },
  {
    value: "adotados",
    label: "Adotados",
  },
  {
    value: "Cachorro",
    label: "Cachorro",
  },
  {
    value: "Gato",
    label: "Gato",
  },
  {
    value: "Coelho",
    label: "Coelho",
  },
  {
    value: "Cavalo",
    label: "Cavalo",
  },
  {
    value: "Outros",
    label: "Outros",
  },
];

const MeusPets = () => {
  const { user } = useAuth();

  const [petsData, setPetsData] = useState([]);
  const [filterPets, setFilterPets] = useState("Todos");
  const [quantidadeDisponiveis, setQuantidadeDisponiveis] = useState(0);
  const [quantidadeDoados, setQuantidadeDoados] = useState(0);
  const [quantidadeAdotados, setQuantidadeAdotados] = useState(0);

  const [isLoadingPet, setIsLoadingPet] = useState(true);

  const handleDeletePet = async (id) => {
    try {
      await api.delete(`/pets/${id}`);
      toast("Pet deletado com sucesso", {
        type: "success",
        autoClose: 3000,
        hideProgressBar: true,
      });

      fetchPetsData();
    } catch (error) {
      console.log(error);
      toast("Erro ao deletar pet", {
        type: "error",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const handleFilterPets = (e) => {
    const selectedFilter = e.target.value;

    setFilterPets(() => {
      fetchPetsData(selectedFilter);
      return selectedFilter;
    });
  };

  const fetchPetsData = async (filter) => {
    try {
      setIsLoadingPet(true);

      if (filter === "Todos") {
        const response = await api.get(`/interestedUsers/showUser`);
        setPetsData(response.data);

        setIsLoadingPet(false);
        return;
      }
      if (filter === "disponiveis") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsDisponiveis = response.data.filter((pet) => {
          return pet.disponibilidade === true;
        });
        setPetsData(petsDisponiveis);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "doados") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsDoados = response.data.filter((pet) => {
          return pet.disponibilidade === false && pet.usuario_id === user.id;
        });
        setPetsData(petsDoados);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "adotados") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsAdotados = response.data.filter((pet) => {
          return pet.disponibilidade === false && pet.usuario_id !== user.id;
        });
        setPetsData(petsAdotados);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "Cachorro") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsCachorro = response.data.filter((pet) => {
          return pet.especie === "Cachorro";
        });
        setPetsData(petsCachorro);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "Gato") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsGato = response.data.filter((pet) => {
          return pet.especie === "Gato";
        });
        setPetsData(petsGato);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "Coelho") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsCoelho = response.data.filter((pet) => {
          return pet.especie === "Coelho";
        });
        setPetsData(petsCoelho);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "Cavalo") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsCavalo = response.data.filter((pet) => {
          return pet.especie === "Cavalo";
        });
        setPetsData(petsCavalo);

        setIsLoadingPet(false);
        return;
      }

      if (filter === "Outros") {
        const response = await api.get(`/interestedUsers/showUser`);

        const petsOutros = response.data.filter((pet) => {
          return pet.especie === "Outros";
        });
        setPetsData(petsOutros);

        setIsLoadingPet(false);
        return;
      }

      const response = await api.get(`/interestedUsers/showUser`);

      setPetsData(response.data);

      setQuantidadeDisponiveis(qtdPetsDisponiveis(response.data));
      setQuantidadeDoados(qtdPetsDoados(response.data, user.id));
      setQuantidadeAdotados(qtdPetsAdotados(response.data, user.id));

      setIsLoadingPet(false);
    } catch (error) {
      setIsLoadingPet(false);
      // Tratar erros, se necessário
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPetsData();
    }, 100);

    return () => clearTimeout(timer);
  }, [user.id]);

  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <Section>
            {" "}
            <InfoPet>
              <CardInfoPet className="area-box">
                <span className="media-icons bg-green">
                  <img src={Adopt} alt="Adotar" />
                </span>
                <div className="title-info">
                  <h5>
                    {quantidadeDisponiveis > 1 ? "Disponíveis" : "Disponível"}
                  </h5>
                  <h3 className="color-green">
                    {quantidadeDisponiveis > 0 ? quantidadeDisponiveis : "-"}
                  </h3>
                </div>
              </CardInfoPet>

              <CardInfoPet className="area-box">
                <span className="media-icons bg-blue">
                  <img src={Adopeted} alt="Adotado" />
                </span>
                <div className="title-info">
                  <h5>{quantidadeDoados > 1 ? "Doados" : "Doado"}</h5>
                  <h3 className="color-blue">
                    {quantidadeDoados > 0 ? quantidadeDoados : "-"}
                  </h3>
                </div>
              </CardInfoPet>

              <CardInfoPet className="area-box">
                <span className="media-icons bg-red">
                  <img src={Dog} alt="Adotado" />
                </span>
                <div className="title-info">
                  <h5>{quantidadeAdotados > 1 ? "Adotados" : "Adotado"}</h5>
                  <h3 className="color-red">
                    {quantidadeAdotados > 0 ? quantidadeAdotados : "-"}
                  </h3>
                </div>
              </CardInfoPet>

              <CardInfoPet className="area-box card-link">
                <Link to="/add-pet" className="morePet">
                  <img src={AddMore} alt="Adicionar" />
                  <span>PETS</span>
                </Link>
              </CardInfoPet>
            </InfoPet>
            <BannerFilterPets className="area-box">
              <span className="title-filter-pets">
                <span className="box-icons">
                  <img src={CatLove} alt="Gato" />
                </span>
                <h2>Meus Pets</h2>
              </span>
              <Select
                options={optionsFilter}
                value={filterPets}
                onChange={handleFilterPets}
              />
            </BannerFilterPets>
            {petsData?.length === 0 && (
              <p>
                Você ainda não possui pets cadastrados,{" "}
                <Link to="/add-pet">clique aqui</Link> para cadastrar um pet.
              </p>
            )}
            {petsData?.length > 0 && (
              <ContainerMyPets className="area-box">
                {petsData?.map((pet) => (
                  <CardMyPets
                    key={pet.id}
                    data={pet}
                    handleDeletePet={handleDeletePet}
                    user_id={user.id}
                  />
                ))}
              </ContainerMyPets>
            )}
          </Section>
        </div>
      </main>
      <Footer />
      <ToastContainer />
      {isLoadingPet && <Loading />}
    </Container>
  );
};

export default MeusPets;
