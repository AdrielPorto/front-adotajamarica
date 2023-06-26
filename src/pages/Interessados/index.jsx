import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Container, SectionInteressados } from "./styles";
import { toast, ToastContainer } from "react-toastify";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import CardInteressados from "../../components/CardInteressados";
import Loading from "../../components/Loading";

import notFound from "../../assets/images/petNotFound.png";

const Interessados = () => {
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
            interessado.usuarios_interessados_id !==
            interessado.usuarios_interessados_id
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

  const handleConfirm = async (usuarios_interessados_id) => {
    try {
      setLoading(true);
      const data = {
        usuarios_interessados_id,
      };
      console.log(data);
      await api.patch(`/interestedUsers`, data);
      toast("Doação confirmada com sucesso", {
        type: "success",
        autoClose: 3000,
        hideProgressBar: true,
      });

      api
        .get("/interestedUsers")
        .then((response) => {
          setInteressados(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      toast("Erro ao confirmar doação", {
        type: "error",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const getInteressados = async () => {
        try {
          const { data } = await api.get("/interestedUsers");
          setInteressados(data);
          console.log(data);
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
              <h2>Interessados em adotar</h2>
              {interessados && interessados.length > 0 ? (
                <div className="box">
                  {interessados.map((interessado, index) => (
                    <CardInteressados
                      interessado={interessado}
                      handleDelete={handleDelete}
                      handleConfirm={handleConfirm}
                      key={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="box">
                  <div className="card-notFind">
                    <img src={notFound} alt="Nenhum pet encontrado" />
                    <h3>Não há interessados no momento</h3>

                    <p>
                      Quando houver interessados, eles aparecerão aqui. Fique de
                      olho!
                    </p>
                  </div>
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

export default Interessados;
