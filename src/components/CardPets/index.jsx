import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { FormatDate } from "../../utils/formatDate";

import { Link } from "react-router-dom";

import { CardContainer, CardHeader, CardBody, CardFooter } from "./styles";

import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";

const CardPets = ({
  id,
  nome,
  bairro,
  faixa_etaria,
  porte_fisico,
  genero,
  fotos,
  disponivel,
  className,
  data,
  usuario_id,
  isFavoritePet,
  handleDeleteFavorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const avatarUrl = `${api.defaults.baseURL}/files/${fotos}`;

  const {
    user,
    petFavorites,
    addFavoritePet,
    removeFavoritePet,
    setPetFavorites,
  } = useAuth();

  const handleFavorite = async (id) => {
    setDisabled(true);
    if (user) {
      if (usuario_id === user.id) {
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
    const existingFavorite = favorites.find((item) => item.id === id);

    if (existingFavorite) {
      const newFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
      setDisabled(false);
    } else {
      const dataFavorites = {
        id: id,
        usuario_id: usuario_id,
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
    if (isFavoritePet) {
      if (isFavorite) {
        handleDeleteFavorites(id);
        setIsFavorite(false);
        setPetFavorites((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        return;
      }
    }

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
        if (petFavorites.length > 0) {
          const existingFavorite = petFavorites.find((item) => item.id === id);
          if (existingFavorite) {
            setIsFavorite(true);
          }
        }
        if (isFavoritePet) {
          setIsFavorite(true);
        }
      }

      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      const existingFavorite = favorites.find((item) => item.id === id);
      if (existingFavorite) {
        setIsFavorite(true);
      }
    };

    fetchFavorites();
  }, [isFavorite, petFavorites]);

  return (
    <CardContainer>
      <CardHeader className="card-header">
        <Link to={`/pet/${id}`}>
          <img src={avatarUrl} alt="pet" className={className} />
        </Link>
      </CardHeader>

      <CardBody>
        <time>{FormatDate(data)}</time>
        <div className="container-title">
          <Link to={`/pet/${id}`}>{nome}</Link>

          {disponivel && (
            <button
              className="container-favorites"
              onClick={() => handleFavorite(id)}
              disabled={disabled}
            >
              {isFavorite ? <TiHeartFullOutline /> : <TiHeartOutline />}
            </button>
          )}
        </div>

        <p className="region">Maricá - {bairro}</p>
      </CardBody>

      <CardFooter>
        <span>{genero}</span>
        <span>{faixa_etaria}</span>
        <span>{porte_fisico} Porte</span>
      </CardFooter>
    </CardContainer>
  );
};

export default CardPets;
