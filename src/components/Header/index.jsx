import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";

import { AiOutlineUserAdd, AiFillPlusCircle } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";
import { FaUserCircle, FaPaw } from "react-icons/fa";
import { BsFillGearFill, BsFillPersonLinesFill } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import { ImExit } from "react-icons/im";
import { HiPlus } from "react-icons/hi";

import {
  HeaderContainer,
  HeaderContet,
  HeaderLogo,
  HeaderMenu,
  AuthLinks,
  UserAuthentication,
  UserMenu,
  UserMenuHeader,
  UserMenuLink,
} from "./styles";

import Logo from "../../assets/images/logoAdotaJaMarica.png";

export const Header = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  const { user, signOut } = useAuth();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsMenuFixed(true);
    } else {
      setIsMenuFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/encontrar-pets", name: "Encontrar Pets" },
    { path: "/sobre", name: "Sobre" },
    { path: "/contato", name: "Contato" },
  ];

  return (
    <HeaderContainer className={isMenuFixed ? "header__fixed" : ""}>
      <HeaderContet>
        <HeaderLogo to="/">
          <img src={Logo} alt="Logo Adota Já Maricá" />
        </HeaderLogo>

        <HeaderMenu>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </HeaderMenu>

        {user ? (
          <UserAuthentication
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/meus-dados">
              {user.avatar ? (
                <img
                  src={
                    verificaHTTPS(user.avatar)
                      ? user.avatar
                      : `${api.defaults.baseURL}/files/${user.avatar}`
                  }
                  alt={user.nome}
                  className="avatarMenuMain"
                />
              ) : (
                <FaUserCircle />
              )}
            </Link>

            <UserMenu className={isHovered ? "user-menu__active" : ""}>
              <div className="user-menu__item">
                <UserMenuHeader>
                  <span>
                    {user.avatar ? (
                      <img
                        src={
                          verificaHTTPS(user.avatar)
                            ? user.avatar
                            : `${api.defaults.baseURL}/files/${user.avatar}`
                        }
                        alt={user.nome}
                        className="avatarMenuBar"
                      />
                    ) : (
                      <FaUserCircle />
                    )}
                    {user.nome}
                  </span>
                  <Link to="/meus-dados">
                    <BsFillGearFill />
                  </Link>
                </UserMenuHeader>

                <UserMenuLink to="/add-pet">
                  <span className="circle-color_blue">
                    <HiPlus />
                  </span>
                  Cadastrar pet
                </UserMenuLink>

                <UserMenuLink to="/favoritos">
                  <span className="circle-color_red">
                    <TiHeartFullOutline />
                  </span>
                  Meus favoritos
                </UserMenuLink>
                <UserMenuLink to="/interessados">
                  <span className="circle-color_white">
                    <BsFillPersonLinesFill />
                  </span>
                  Intessados no pet
                </UserMenuLink>
                <UserMenuLink to="/pets">
                  <span className="circle-color_orange">
                    <FaPaw />
                  </span>
                  Meus pets
                </UserMenuLink>

                <button
                  className="buttonExit"
                  onClick={() => {
                    signOut();
                    navigate("/");
                  }}
                >
                  <ImExit />
                  Sair
                </button>
              </div>
            </UserMenu>
          </UserAuthentication>
        ) : (
          <AuthLinks>
            <Link to="/login">
              <CgLogIn />
              Login
            </Link>
            <Link to="/registro">
              <AiOutlineUserAdd />
              Cadastrar
            </Link>
          </AuthLinks>
        )}
      </HeaderContet>
    </HeaderContainer>
  );
};

export default Header;
