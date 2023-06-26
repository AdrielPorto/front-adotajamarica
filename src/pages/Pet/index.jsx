import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { ToastContainer } from "react-toastify";

import { Container } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SliderPet from "../../components/SliderPet";
import DetailsPet from "../../components/DetailsPet";
import Loading from "../../components/Loading";

const Pet = () => {
  const { id } = useParams();
  const { petFavorites, getPetFavorites } = useAuth();
  const [petsData, setPetsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isInterested, setIsInterested] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/pets/${id}`);
        const interesteds = await api.get(`/interestedUsers/checkUser/${id}`);
        if (interesteds.data) {
          setIsInterested(true);
        }
        setPetsData(response.data);
        getPetFavorites();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, [id, petFavorites]);

  if (isLoading || isError) {
    return <Loading />;
  }

  if (petsData?.[0] === undefined) {
    return <Loading />;
  }

  const { fotos } = petsData?.[0];
  return (
    <Container>
      <Header />
      <main>
        <div className="containerDetailsPet">
          {fotos?.length >= 1 && <SliderPet fotos={fotos} />}
          {petsData[0] && (
            <DetailsPet
              detailsPets={petsData[0]}
              isInterested={isInterested}
              setIsInterested={setIsInterested}
            />
          )}
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Pet;
