import { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormatDate } from "../../utils/formatDate";
import { api } from "../../services/api";
import { formatWhatsAppNumber } from "../../utils/formatNumber";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

import { Container, DynamicInfo, BoxMoreInfo, DetailsUser } from "./styles";

import { BiMap } from "react-icons/bi";
import { FaUserCircle, FaPaw, FaRegThumbsUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import {
  BsGenderMale,
  BsGenderFemale,
  BsRulers,
  BsFillCalendarFill,
  BsFillEnvelopeAtFill,
} from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { CgSpinner } from "react-icons/cg";

import vaccine from "../../assets/images/vaccine.png";
import medicine from "../../assets/images/medicine.png";
import sterilization from "../../assets/images/sterilization.png";
import certificatePet from "../../assets/images/certificate.png";

import BigButton from "../BigButton";

const DetailsPet = ({ detailsPets, isInterested, setIsInterested }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    user,
    petFavorites,
    addFavoritePet,
    removeFavoritePet,
    setPetFavorites,
    getPetFavorites,
  } = useAuth();

  const onAdopt = async () => {
    setIsLoaded(true);
    if (!user) {
      toast("Você precisa estar logado para adotar um pet", {
        type: "warning",
        hideProgressBar: true,
        autoClose: 3000,
      });
      setIsLoaded(false);
      return;
    }

    if (user.id === detailsPets?.usuario_id) {
      toast("Você não pode adotar seu próprio pet", {
        type: "warning",
        hideProgressBar: true,
        autoClose: 3000,
      });
      setIsLoaded(false);
      return;
    }

    if (user.telefone === null || user.telefone === "") {
      toast("Você precisa adicionar um telefone para adotar um animal", {
        type: "warning",
        hideProgressBar: true,
        autoClose: 3000,
      });
      setIsLoaded(false);
      return;
    }

    if (!user.categoria) {
      toast(
        "Você precisa escolher uma categoria de perfil (ONG ou Pessoa Física) para adotar um animal",
        {
          type: "warning",
          hideProgressBar: true,
          autoClose: 3000,
        }
      );
      setIsLoaded(false);
      return;
    }

    const data = {
      pet_id: detailsPets?.id,
      dono_pet_id: detailsPets?.usuario_id,
    };

    try {
      await api.post("/interestedUsers", data);

      toast("Pedido de adoção enviado com sucesso", {
        type: "success",
        hideProgressBar: true,
        autoClose: 3000,
      });
      setIsInterested(true);
    } catch (error) {
      if (error.response.data.message) {
        toast(error.response.data.message, {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      } else {
        toast("Erro ao adotar pet", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
      }
    }
  };

  const handleFavorite = async (id) => {
    setDisabled(true);
    if (user) {
      if (user.id === detailsPets?.usuario_id) {
        toast("Você não pode favoritar seu próprio pet", {
          type: "warning",
          autoClose: 3000,
          hideProgressBar: true,
        });
        setDisabled(false);
        return;
      }
      toggleFavoriteOnServer(id, user);
      setDisabled(false);
      return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const existingFavorite = favorites.find(
      (item) => item.id === detailsPets?.id
    );

    if (existingFavorite) {
      const newFavorites = favorites.filter(
        (item) => item.id !== detailsPets?.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
      setDisabled(false);
    } else {
      const dataFavorites = {
        id: id,
        usuario_id: detailsPets?.usuario_id,
      };

      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, dataFavorites])
      );
      setIsFavorite(true);
      favorites.push(id);

      setDisabled(false);
    }
  };

  const toggleFavoriteOnServer = (id, user) => {
    if (isFavorite) {
      removeFavoritePet(id);

      setIsFavorite(false);

      setPetFavorites((prevState) =>
        prevState.filter((item) => item.id !== id)
      );

      return;
    }

    addFavoritePet(id);

    setPetFavorites((prevState) => [...prevState, { id: id }]);
  };

  useEffect(() => {
    const fetchFavorites = () => {
      if (user) {
        getPetFavorites();

        if (petFavorites.length > 0) {
          const existingFavorite = petFavorites.find(
            (item) => item.id === detailsPets?.id
          );
          if (existingFavorite) {
            setIsFavorite(true);
          }
        }
      }

      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      const existingFavorite = favorites.find(
        (item) => item.id === detailsPets?.id
      );
      if (existingFavorite) {
        setIsFavorite(true);
      }

      if (user) {
      }
    };

    fetchFavorites();
  }, [isFavorite, petFavorites]);

  return (
    <Container>
      <h1>
        {detailsPets?.nome}
        {detailsPets?.disponibilidade && (
          <button
            className="container-favorites"
            onClick={() => handleFavorite(detailsPets?.id)}
            disabled={disabled}
          >
            {isFavorite ? <TiHeartFullOutline /> : <TiHeartOutline />}
          </button>
        )}
      </h1>
      <p className="address">
        <BiMap />
        {detailsPets?.bairro}, Maricá - RJ
      </p>
      <div className="widget-pet">
        <DynamicInfo>
          <FaPaw />
          {detailsPets?.especie}
        </DynamicInfo>
        <DynamicInfo>
          <BsGenderMale />
          {detailsPets?.genero}
        </DynamicInfo>
        <DynamicInfo>
          <FaBirthdayCake />
          {detailsPets?.faixa_etaria}
        </DynamicInfo>
        <DynamicInfo>
          <BsRulers />
          {detailsPets?.porte_fisico} Porte
        </DynamicInfo>
      </div>
      <div className="data-publicação">
        <BsFillCalendarFill />
        Publicado em {FormatDate(detailsPets?.data_criacao)}
      </div>
      <div className="description">
        {detailsPets?.descricao ? (
          <Fragment>
            <h2>Sobre o {detailsPets?.nome}</h2>

            <p>{detailsPets?.descricao}</p>
          </Fragment>
        ) : (
          <p>Esse pet ainda não possui uma descrição</p>
        )}
      </div>

      <div className="moreInfo">
        <h2>Informações adicionais</h2>
        <div>
          {detailsPets?.vacinado && (
            <BoxMoreInfo>
              <img src={vaccine} />
              Vacinado
            </BoxMoreInfo>
          )}
          {detailsPets?.vermifugado && (
            <BoxMoreInfo>
              <img src={medicine} />
              Vermifugado
            </BoxMoreInfo>
          )}
          {detailsPets?.castrado && (
            <BoxMoreInfo>
              <img
                src={sterilization}
                style={{
                  marginLeft: "1rem",
                }}
              />
              Castrado
            </BoxMoreInfo>
          )}
          <BoxMoreInfo>
            <img src={certificatePet} />
            {detailsPets?.raca}
          </BoxMoreInfo>
        </div>
      </div>

      {detailsPets?.disponibilidade ? (
        <>
          {isInterested && (
            <DetailsUser>
              <span className="infoUserPet">
                <Link to={`/user/${detailsPets?.usuario_id}`}>
                  {detailsPets?.avatar ? (
                    <div className="avatarUserPet">
                      <img
                        src={
                          verificaHTTPS(detailsPets?.avatar)
                            ? detailsPets?.avatar
                            : `${api.defaults.baseURL}/files/${detailsPets?.avatar}`
                        }
                        alt={detailsPets?.nome_usuario}
                      />
                    </div>
                  ) : (
                    <FaUserCircle size={40} />
                  )}
                </Link>
                <span className="nameUserPet">
                  <Link to={`/user/${detailsPets?.usuario_id}`}>
                    <strong>{detailsPets?.nome_usuario}</strong>
                  </Link>
                  {detailsPets?.categoria === "ONG"
                    ? "ONG responsável pelo pet"
                    : "Tutor do pet"}
                </span>
              </span>
              <span className="contactUserPet">
                <a
                  href={`https://api.whatsapp.com/send?phone=${formatWhatsAppNumber(
                    detailsPets?.telefone
                  )}`}
                  className="iconZap"
                >
                  <IoLogoWhatsapp size={20} />
                </a>
                <a href={`mailto:${detailsPets?.email}`} className="iconEmail">
                  <BsFillEnvelopeAtFill size={20} />
                </a>
              </span>
            </DetailsUser>
          )}

          {!isInterested && (
            <BigButton
              background="#2364ec"
              color="#fff"
              onClick={onAdopt}
              disabled={isLoaded}
            >
              {isLoaded ? (
                <CgSpinner className="spinner" size={40} />
              ) : (
                "Me adota!"
              )}
            </BigButton>
          )}
        </>
      ) : (
        <div className="faixa">
          <FaRegThumbsUp />
          Esse pet já foi adotado!
        </div>
      )}
    </Container>
  );
};

export default DetailsPet;
