import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, SectionInteressados } from "./styles";
import { toast, ToastContainer } from "react-toastify";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import CardInteressados from "../../components/CardInteressados";
import Loading from "../../components/Loading";

import notFound from "../../assets/images/petNotFound.png";

const MeusInteresses = () => {
  const { user } = useAuth();
  const [interessados, setInteressados] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (usuarios_interessados_id) => {
    try {
      await api.delete(`/interestedUsers/${usuarios_interessados_id}`);
      toast("Usuário removido com sucesso", {
        type: "success",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setInteressados(
        interessados.filter(
          (interessado) =>
            interessado.usuarios_interessados_id !== usuarios_interessados_id
        )
      );
    } catch (err) {
      console.log(err);
      toast("Erro ao deletar usuário", {
        type: "error",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const getInteressados = async () => {
        try {
          const { data } = await api.get("/interestedUsers/showInteresses");

          setInteressados(data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

      getInteressados();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <SectionInteressados>
            <div className="area-box">
              <h2>Meus interesses</h2>
              {interessados && interessados.length > 0 ? (
                <div className="box">
                  {interessados.map((interessado, index) => (
                    <CardInteressados
                      interessado={interessado}
                      handleDelete={handleDelete}
                      key={index}
                      donopet={true}
                      isConfirmed={false}
                      isTextInteressado={true}
                      title={"Abadonar pet"}
                    />
                  ))}
                </div>
              ) : (
                <div className="box">
                  <Link to="/encontrar-pets" className="card-notFind">
                    <img src={notFound} alt="Nenhum pet encontrado" />
                    <h3>Nenhum pet encontrado</h3>

                    <p>Explore a plataforma e encontre o pet ideal para você</p>
                  </Link>
                </div>
              )}
            </div>
          </SectionInteressados>
        </div>
      </main>

      <ToastContainer />

      {loading && <Loading />}

      <Footer />
    </Container>
  );
};

export default MeusInteresses;
