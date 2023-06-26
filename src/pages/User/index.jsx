import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";

import { FaUserCircle } from "react-icons/fa";

import { Container, SectionUser, SectionUserPets } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Line from "../../components/Line";
import Paginate from "../../components/Paginate";
import Loading from "../../components/Loading";

import CardPets from "../../components/CardPets";

const User = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useQuery({
    queryKey: ["usuarios"],
    queryFn: () => api.get(`/users/${id}`),
  });
  const {
    data: petsData,
    isLoading: isLoadingPet,
    isError: isErrorPet,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: () => api.get(`/pets/petUser/${id}`),
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = petsData?.data?.slice(indexOfFirstPost, indexOfLastPost);
  if (isLoadingUser) <Loading />;
  if (isLoadingPet) <Loading />;
  return (
    <Container>
      <Header />
      <main>
        <SectionUser>
          <div className="container">
            {userData?.data?.avatar ? (
              <div className="avatar">
                <img
                  src={
                    verificaHTTPS(userData?.data?.avatar)
                      ? userData?.data?.avatar
                      : `${api.defaults.baseURL}/files/${userData?.data?.avatar}`
                  }
                  alt={userData?.data?.nome}
                />
              </div>
            ) : (
              <FaUserCircle size={100} />
            )}

            <h1>{userData?.data?.nome}</h1>
            <h4>{userData?.data?.categoria}</h4>
            <p>
              {userData?.data?.descricao || "Este usuário não possui descrição"}
            </p>
            <div className="meta">
              <span className="meta_item">
                {petsData?.data.length} Pets para adoção
              </span>
            </div>
          </div>
          <Line color="#f5f5f5" />
        </SectionUser>
        <SectionUserPets>
          <div className="container">
            {currentPosts?.map((pet) => {
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
          </div>
        </SectionUserPets>

        <Paginate
          totalPosts={petsData?.data?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
      <Footer />
    </Container>
  );
};

export default User;
