import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import Home from "../pages/Home";
import EncontrarPets from "../pages/EncontrarPets";
import Pet from "../pages/Pet";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Login from "../pages/Login";
import Registrar from "../pages/Registrar";
import NotFound from "../pages/404";
import Esquecido from "../pages/Esquecido";
//! Aqui vai ser rotas fechadas
import Reset from "../pages/Reset";

import User from "../pages/User";
import Me from "../pages/Me";
import AddPet from "../pages/AddPet";
import UpdatePet from "../pages/UpdatePet";
import Favoritos from "../pages/Favoritos";
import Interessados from "../pages/Interessados";
import MeusPets from "../pages/MeusPets";
import MeusInteresses from "../pages/MeusInteresses";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/encontrar-pets" element={<EncontrarPets />} />
      <Route path="/pet/:id" element={<Pet />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/registro" element={user ? <Home /> : <Registrar />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/esquecido" element={<Esquecido />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/meus-dados" element={user ? <Me /> : <Login />} />
      <Route path="/add-pet" element={user ? <AddPet /> : <Login />} />
      <Route path="/updatePet/:id" element={user ? <UpdatePet /> : <Login />} />
      <Route path="/favoritos" element={user ? <Favoritos /> : <Login />} />
      <Route path="/reset" element={<Reset />} />

      <Route
        path="/interessados"
        element={user ? <Interessados /> : <Login />}
      />

      <Route
        path="/meus-interesses"
        element={user ? <MeusInteresses /> : <Login />}
      />
      <Route path="/pets" element={user ? <MeusPets /> : <Login />} />
    </Routes>
  );
};

export default AppRoutes;
