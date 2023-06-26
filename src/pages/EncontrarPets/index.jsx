import { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import { api } from "../../services/api";
import queryString from "query-string";

import {
  Container,
  SectionPets,
  Content,
  Filterbar,
  ListsPets,
} from "./styles";

import { BiSearch } from "react-icons/bi";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Line from "../../components/Line";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Controls from "../../components/Controls";
import CardPets from "../../components/CardPets";
import Paginate from "../../components/Paginate";
import Loading from "../../components/Loading";

const Valueoptions = [
  { value: "", label: "Ordenar Por" },
  { value: "ASC", label: "Nome de A - Z" },
  { value: "DESC", label: "Nome de Z - A" },
  { value: "MAIS_ANTIGO", label: "Mais Antigo" },
  { value: "MAIS_RECENTE", label: "Mais Recente" },
];

const EncontrarPets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const [inputSearch, setInputSearch] = useState("");
  const [selectSearch, setSelectSearch] = useState("");

  const [resetar, setResetar] = useState(false);
  const [aplicar, setAplicar] = useState(false);

  const [especie, setEspecie] = useState([]);
  const [genero, setGenero] = useState([]);
  const [porteFisico, setPorteFisico] = useState([]);
  const [faixa_etaria, setFaixa_Etaria] = useState([]);
  const [caracteristica, setCaracteristica] = useState([]);
  const [petsData, setPetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const query = queryString.stringify({
    busca: inputSearch,
    ordenar: selectSearch,
    especie: especie,
    raca: inputSearch,
    bairro: inputSearch,
    genero: genero,
    porte_fisico: porteFisico,
    faixa_etaria: faixa_etaria,
    caracteristica: caracteristica,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/pets/allPetsAvailable?${query}`);

        setPetsData(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!resetar) {
          const response = await api.get(`/pets/allPetsAvailable?${query}`);

          setPetsData(response.data);
          setCurrentPage(1);
          setPostsPerPage(9);
        }
        if (resetar) {
          const response = await api.get(`/pets/allPetsAvailable`);
          setPetsData(response.data);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, resetar]);

  if (isLoading) return <Loading />;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = petsData.slice(indexOfFirstPost, indexOfLastPost);

  const HandleSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const HandleSelect = (e) => {
    setSelectSearch(e.target.value);
  };

  return (
    <Container>
      <Header />
      <main>
        <section className="titlePage">
          <h1>Encontre seu novo melhor amigo(a)</h1>
          <p>
            Conecte-se com um companheiro perfeito para todas as aventuras da
            vida!
          </p>
          <Line color="#2364ec" />
        </section>

        <SectionPets>
          <div className="container">
            <div className="controls-search">
              <div className="search">
                <Input
                  icon={BiSearch}
                  placeholder="Encontre um pet"
                  type="search"
                  value={inputSearch}
                  onChange={HandleSearch}
                />
              </div>
              <div className="filter">
                <Select
                  options={Valueoptions}
                  value={selectSearch}
                  onChange={HandleSelect}
                />
              </div>
            </div>
          </div>

          <Content className={currentPosts.length < 4 ? "align-start" : ""}>
            <div className="containerFIlter">
              <Filterbar>
                <Controls
                  setEspecie={setEspecie}
                  setGenero={setGenero}
                  setPorteFisico={setPorteFisico}
                  setFaixa_Etaria={setFaixa_Etaria}
                  setCaracteristica={setCaracteristica}
                  setInputSearch={setInputSearch}
                  setSelectSearch={setSelectSearch}
                  setResetar={setResetar}
                  setAplicar={setAplicar}
                  especie={especie}
                  genero={genero}
                  porteFisico={porteFisico}
                  faixa_etaria={faixa_etaria}
                  caracteristica={caracteristica}
                  resetar={resetar}
                  aplicar={aplicar}
                />
              </Filterbar>
            </div>

            <ListsPets>
              {currentPosts?.length === 0 && (
                <p className="subtitle">Nenhum pet encontrado!</p>
              )}

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
                      className={"cardPetsImage"}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ListsPets>
          </Content>
        </SectionPets>

        <Paginate
          totalPosts={petsData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
      <Footer />

      <ToastContainer />
    </Container>
  );
};

export default EncontrarPets;
