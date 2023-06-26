import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { toast, ToastContainer } from "react-toastify";

import { Container, SectionFavorites } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import CardPets from "../../components/CardPets";
import Loading from "../../components/Loading";

const Favoritos = () => {
  const [loading, setLoading] = useState(true);
  const [addFavorites, setAddFavorites] = useState(false);
  const { petFavorites, setPetFavorites, getPetFavorites } = useAuth();

  const { data: petsData, isLoading: isLoadingPets } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => api.get("/favorites/"),

    onSuccess: (data) => {
      setLoading(false);
      setPetFavorites(data.data);
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation((data) => api.post(`/favorites`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("favorites");
    },

    onError: (error) => {
      if (error.response) {
        toast(error.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    },
  });

  const mutationDelete = useMutation(
    (petId) => api.delete(`/favorites/${petId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favorites");
      },
      onError: (error) => {
        if (error.response) {
          toast(error.response.data.message, {
            type: "warning",
            hideProgressBar: true,
            autoClose: 3000,
          });
        }
      },
    }
  );

  const handleAddFavorites = async (petId) => {
    setAddFavorites(true);
    await mutation.mutateAsync(petId);
    setAddFavorites(false);
  };

  const handleDeleteFavorites = async (petId) => {
    setAddFavorites(true);
    await mutationDelete.mutateAsync(petId);
    setAddFavorites(false);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length > 0) {
      const addFavoritesPromises = favorites.map((petId) => {
        return new Promise((resolve, reject) => {
          const data = {
            pet_id: petId.id,
          };
          setTimeout(() => {
            handleAddFavorites(data);
            resolve(); // Resolva a promessa após a função handleAddFavorites ser concluída
          }, 300);
        });
      });

      Promise.all(addFavoritesPromises)
        .then(() => {
          getPetFavorites();
          setLoading(false); // Defina o estado de carregamento para false após todas as promessas serem resolvidas
        })
        .catch((error) => {
          console.error("Ocorreu um erro ao adicionar os favoritos:", error);
        });
      localStorage.removeItem("favorites");
    }
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <SectionFavorites>
            <div className=" area-box">
              <h2>Meus Favoritos</h2>
              <div className="box">
                {petsData?.data?.length > 0 ? (
                  petsData?.data?.map((pet) => (
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
                      isFavoritePet={true}
                      handleDeleteFavorites={handleDeleteFavorites}
                    />
                  ))
                ) : (
                  <Link to="/encontrar-pets" className="empty">
                    Explore o animal de estimação da sua escolha.
                  </Link>
                )}
              </div>
            </div>
          </SectionFavorites>
        </div>
      </main>
      <Footer />
      {loading && <Loading />}
      {isLoadingPets && <Loading />}
      <ToastContainer />
    </Container>
  );
};

export default Favoritos;
