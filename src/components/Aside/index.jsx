import { useAuth } from "../../hooks/auth";

import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaPaw, FaUserCog } from "react-icons/fa";
import {
  BsFillGearFill,
  BsFillPersonLinesFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import { ImExit } from "react-icons/im";
import { HiPlus } from "react-icons/hi";
import { IoLogoOctocat } from "react-icons/io5";

import { Container, NavAside } from "./styles";

const Aside = ({ atualiza }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const topPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <h2>Painel do Usuário</h2>
      <NavAside>
        <div className="nav-itens">
          <NavLink
            to="/add-pet"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            data-option="cadastrar-pet"
            onClick={topPage}
          >
            <span className="circle-color_blue">
              <HiPlus />
            </span>

            {atualiza ? "Atualizar pet" : "Cadastrar pet"}
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            data-option="favoritos"
            onClick={topPage}
          >
            <span className="circle-color_red">
              <TiHeartFullOutline />
            </span>
            Meus favoritos
          </NavLink>
          <NavLink
            to="/meus-interesses"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            data-option="meus-interesses"
            onClick={topPage}
          >
            <span className="circle-color_yellow">
              <IoLogoOctocat />
            </span>
            Meus interesses
          </NavLink>
          <NavLink
            to="/interessados"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            data-option="interessados"
            onClick={topPage}
          >
            <span className="circle-color_white">
              <BsFillPersonLinesFill />
            </span>
            Intessados no pet
          </NavLink>
          <NavLink
            to="/pets"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            data-option="meus-pets"
            onClick={topPage}
          >
            <span className="circle-color_orange">
              <FaPaw />
            </span>
            Meus pets
          </NavLink>
          <NavLink
            to="/meus-dados"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            data-option="meus-dados"
            onClick={topPage}
          >
            <span className="circle-color_gray">
              <FaUserCog />
            </span>
            Meus dados
          </NavLink>

          <BsFillBookmarkFill className="markLink" />
        </div>
        <button
          className="exit"
          onClick={() => {
            signOut();
            navigate("/");
          }}
        >
          <ImExit />
          Sair
        </button>
      </NavAside>
    </Container>
  );
};

export default Aside;
