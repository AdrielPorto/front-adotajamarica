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
import { IoLogoOctocat } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

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
  OverlayMenu,
  MenuMobile,
  UserAuthenticationMobile,
  ContainerAuth,
} from "./styles";

import Logo from "../../assets/images/logoAdotaJaMarica.png";
import LogoMobile from "../../assets/images/logoMenuMobile.png";

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

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

  const handleShowMenuMobile = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  const handleShowAuth = () => {
    setShowAuth(!showAuth);
  };

  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/encontrar-pets", name: "Encontrar Pets" },
    { path: "/sobre", name: "Sobre" },
    { path: "/contato", name: "Contato" },
  ];
  const menuItemsMobile = [
    { path: "/", name: "Ir para Home" },
    { path: "/encontrar-pets", name: "Encontrar Pets" },
    { path: "/sobre", name: "Sobre" },
    { path: "/contato", name: "Contato" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderContainer
      className={isMenuFixed && !showAuth ? "header__fixed" : ""}
    >
      <HeaderContet>
        <button className="button-menu" onClick={handleShowMenuMobile}>
          <GiHamburgerMenu size={18} />
          Menu
        </button>
        <HeaderLogo to="/">
          <img src={Logo} alt="Logo Adota Já Maricá" />

          <img
            src={LogoMobile}
            alt="Logo Adota Já Maricá"
            className="mobile-logo"
          />
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
          <>
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
                  <UserMenuLink to="/meus-interesses">
                    <span className="circle-color_yellow">
                      <IoLogoOctocat />
                    </span>
                    Meus interesses
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
            <UserAuthenticationMobile onClick={handleShowAuth}>
              <span className="conta_avatar">
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
              </span>
            </UserAuthenticationMobile>
          </>
        ) : (
          <AuthLinks>
            <Link to="/login">
              <CgLogIn />
              Entrar
            </Link>
            <Link to="/registro">
              <AiOutlineUserAdd />
              Cadastrar
            </Link>
          </AuthLinks>
        )}
      </HeaderContet>

      <OverlayMenu
        className={showMenuMobile ? "overlay-menu__active" : ""}
        onClick={handleShowMenuMobile}
      >
        <MenuMobile
          className={showMenuMobile ? "menu-mobile__active" : ""}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="buttonClose" onClick={handleShowMenuMobile}>
            <IoMdClose size={24} /> Fechar
          </button>
          {!user && (
            <div className="container_auth">
              <AuthLinks className="container_auth--component">
                <Link to="/login">
                  <CgLogIn />
                  Entrar
                </Link>
                <Link to="/registro">
                  <AiOutlineUserAdd />
                  Cadastrar
                </Link>
              </AuthLinks>
            </div>
          )}

          <nav className="nave_mobile">
            <ul>
              {menuItemsMobile.map((item) => (
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
          </nav>
        </MenuMobile>
      </OverlayMenu>

      {user && showAuth && (
        <ContainerAuth className={showAuth ? "container_auth--active" : ""}>
          <UserMenu className="user-menu__active user-menu__mobile">
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
                <Link
                  to="/meus-dados"
                  onClick={() => {
                    setShowAuth(false);
                  }}
                >
                  <BsFillGearFill size={25} />
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
              <UserMenuLink to="/meus-interesses">
                <span className="circle-color_yellow">
                  <IoLogoOctocat />
                </span>
                Meus interesses
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
        </ContainerAuth>
      )}
    </HeaderContainer>
  );
};

export default Header;
