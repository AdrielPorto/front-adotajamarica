import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";
import { qtdPetsDisponiveis, qtdPetsDoados } from "../../utils/containsArray";
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
  const client = useQueryClient();

  const {
    data: petsData,
    isLoading: isLoadingPet,
    isError: isErrorPet,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: () => api.get(`/pets/petUser/${user.id}`),
  });

  const deleteMutation = useMutation((id) => api.delete(`/pets/${id}`), {
    onSuccess: () => {
      client.invalidateQueries("pets");
    },
    onError: (error) => {
      console.log(error);
      toast("Erro ao deletar pet", {
        type: "error",
        autoClose: 3000,
        hideProgressBar: true,
      });
    },
  });

  const handleDeletePet = async (id) => {
    try {
      await deleteMutation.mutateAsync(id);

      toast("Pet deletado com sucesso", {
        type: "success",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (err) {
      console.log(err);
      toast("Erro ao deletar pet", {
        type: "error",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  if (isLoadingPet) <Loading />;

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
                  <h5>Disponiveis</h5>
                  <h3 className="color-green">
                    {petsData?.data?.length > 0 &&
                    qtdPetsDisponiveis(petsData?.data) > 0
                      ? qtdPetsDisponiveis(petsData?.data)
                      : "-"}
                  </h3>
                </div>
              </CardInfoPet>

              <CardInfoPet className="area-box">
                <span className="media-icons bg-blue">
                  <img src={Adopeted} alt="Adotado" />
                </span>
                <div className="title-info">
                  <h5>Doados</h5>
                  <h3 className="color-blue">
                    {petsData?.data?.length > 0 &&
                    qtdPetsDoados(petsData?.data) > 0
                      ? qtdPetsDoados(petsData?.data)
                      : "-"}
                  </h3>
                </div>
              </CardInfoPet>

              <CardInfoPet className="area-box">
                <span className="media-icons bg-red">
                  <img src={Dog} alt="Adotado" />
                </span>
                <div className="title-info">
                  <h5>Adotados</h5>
                  <h3 className="color-red">-</h3>
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
              <Select options={optionsFilter} />
            </BannerFilterPets>
            {petsData?.data?.length === 0 && (
              <p>
                Você ainda não possui pets cadastrados,{" "}
                <Link to="/add-pet">clique aqui</Link> para cadastrar um pet.
              </p>
            )}
            {petsData?.data?.length > 0 && (
              <ContainerMyPets className="area-box">
                {petsData?.data?.map((pet, index) => (
                  <CardMyPets
                    key={index}
                    data={pet}
                    deletePets={handleDeletePet}
                  />
                ))}
              </ContainerMyPets>
            )}
          </Section>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default MeusPets;
