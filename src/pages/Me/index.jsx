import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import axios from "axios";
import { api, apiCep } from "../../services/api";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";
import { ToastContainer, toast } from "react-toastify";

import { FaUserCircle, FaCamera, FaUserAlt } from "react-icons/fa";
import { BsBuildingsFill, BsEnvelopeAt } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BiUser, BiPhone } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import {
  RiLockPasswordLine,
  RiHome7Line,
  RiShieldUserFill,
} from "react-icons/ri";
import { BiMap } from "react-icons/bi";

import {
  Container,
  SectionProfile,
  EditProfile,
  AboutMe,
  Address,
  Categories,
  Password,
} from "./styles";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import Loading from "../../components/Loading";

const maskOptions = {
  mask: "(99) 99999-9999",
};

const cepMaskOptions = {
  mask: "99999-999",
};
const SelectCategorias = [
  { value: "", label: "Selecione uma categoria" },
  { value: "ONG", label: "ONG" },
  { value: "pessoa física", label: "Pessoa Física" },
];

const Me = () => {
  const { user, updateProfile } = useAuth();
  const [nome, setNome] = useState(user.nome);
  const [avatarFile, setAvatarFile] = useState(null);
  const [descricao, setDescricao] = useState(user.descricao);
  const [telefone, setTelefone] = useState(user.telefone);
  const [cep, setCep] = useState(user.cep);
  const [bairro, setBairro] = useState(user.bairro);
  const [novaSenha, setNovaSenha] = useState("");
  const [velhaSenha, setVelhaSenha] = useState("");
  const [loading, setLoading] = useState({
    perfil: false,
    sobre: false,
    endereco: false,
    categoria: false,
    senha: false,
  });
  const [categoria, setCategoria] = useState(user.categoria);

  const avatarUrl = verificaHTTPS(user.avatar)
    ? user.avatar
    : `${api.defaults.baseURL}/files/${user.avatar}`;

  const [avatar, setAvatar] = useState(avatarUrl);

  const [passwordsVisibility, setPasswordsVisibility] = useState({
    password1: false,
    password2: false,
  });

  const togglePasswordVisibility = (passwordId) => {
    setPasswordsVisibility((prevState) => ({
      ...prevState,
      [passwordId]: !prevState[passwordId],
    }));
  };

  const toggleLoading = (loadingId) => {
    setLoading((prevState) => ({
      ...prevState,
      [loadingId]: !prevState[loadingId],
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formClass = e.target.className;

    if (formClass === "form-editar-perfil") {
      if (!nome || nome.length < 3 || nome.trim() === "") {
        toast("Nome inválido", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
        return;
      }
      const updated = {
        nome: nome,
      };
      toggleLoading("perfil");

      try {
        await updateProfile({ updateUser: updated, avatarFile });
      } catch (erro) {
      } finally {
        toggleLoading("perfil");
      }

      return;
    }

    if (formClass === "form-sobre-mim") {
      const updated = {
        descricao: descricao,
      };
      toggleLoading("sobre");

      try {
        await updateProfile({ updateUser: updated });
      } catch (erro) {
        console.log(erro);
      } finally {
        toggleLoading("sobre");
      }

      return;
    }

    if (formClass === "form-endereco") {
      const updated = {
        cep,
        bairro,
        telefone,
      };
      toggleLoading("endereco");

      try {
        await updateProfile({ updateUser: updated });
      } catch (erro) {
        console.log(erro);
      } finally {
        toggleLoading("endereco");
      }

      return;
    }

    if (formClass === "form-categoria") {
      const updated = {
        categoria,
      };
      toggleLoading("categoria");

      try {
        await updateProfile({ updateUser: updated });
      } catch (erro) {
        console.log(erro);
      } finally {
        toggleLoading("categoria");
      }

      return;
    }

    if (formClass === "form-alterar-senha") {
      if (novaSenha.length < 8) {
        toast("A senha deve ter no mínimo 8 caracteres", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });
        return;
      }

      const updated = {
        senha: novaSenha,
        senha_velha: velhaSenha,
      };
      toggleLoading("senha");

      try {
        await updateProfile({ updateUser: updated });
      } catch (erro) {
        console.log(erro);
      } finally {
        toggleLoading("senha");
        setNovaSenha("");
        setVelhaSenha("");
      }

      return;
    }
  };

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  };

  const handleChangeCep = (event) => {
    const cep = event.target.value;
    setCep(cep);
    if (/^\d{5}-\d{3}$/.test(cep)) {
      buscaCep(cep);
    }
  };

  const buscaCep = async (cep) => {
    try {
      const { data } = await apiCep.get(`/${cep}/json/`);

      if (data.erro) {
        toast("Ocorreu um erro ao encontrar os dados do CEP ", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });

        setBairro("");
        setCep("");

        return;
      }

      if (data.localidade !== "Maricá") {
        toast("O CEP informado não é de Maricá", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });

        setBairro("");
        setCep("");

        return;
      }

      setBairro(data.bairro);
    } catch (erro) {
      toast("Ocorreu um erro ao encontrar os dados do CEP ", {
        type: "error",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <SectionProfile>
            <EditProfile className="area-box">
              <h2>Editar Perfil</h2>
              <form onSubmit={handleUpdate} className="form-editar-perfil">
                <div className="group-avatar">
                  {console.log(avatar)}
                  {avatar && !avatar.includes("/null") ? (
                    <img src={avatar} alt="Avatar" />
                  ) : (
                    <FaUserCircle size={190} />
                  )}
                  <label htmlFor="avatar">
                    <FaCamera size={20} />
                    <input
                      type="file"
                      id="avatar"
                      onChange={handleChangeAvatar}
                    />
                  </label>
                </div>

                <div className="group-inputs">
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nome"
                      value={nome}
                      icon={BiUser}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>

                  <div className="form-group form-group_disabled">
                    <label htmlFor="email">E-mail</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      defaultValue={user.email}
                      readOnly
                      icon={BsEnvelopeAt}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-salvar"
                    disabled={loading.perfil}
                  >
                    {loading.perfil ? (
                      <CgSpinner size={35} className="loading" />
                    ) : (
                      "Salvar"
                    )}
                  </button>
                </div>
              </form>
            </EditProfile>

            <AboutMe className="area-box">
              <h2>Sobre Mim</h2>
              <form onSubmit={handleUpdate} className="form-sobre-mim">
                <div className="area-btn-editar">
                  <TextArea
                    placeholder="Quem é você e o que faz"
                    defaultValue={descricao ? descricao : ""}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-salvar"
                  disabled={loading.sobre}
                >
                  {loading.sobre ? (
                    <CgSpinner size={35} className="loading" />
                  ) : (
                    "Salvar"
                  )}
                </button>
              </form>
            </AboutMe>

            <Address className="area-box">
              <h2>Endereço</h2>
              <form onSubmit={handleUpdate} className="form-endereco">
                <div className="group-address">
                  <div className="form-group">
                    <label htmlFor="cep">Cep</label>
                    <Input
                      type="text"
                      id="cep"
                      name="cep"
                      placeholder="20000-000"
                      {...cepMaskOptions}
                      icon={RiHome7Line}
                      value={cep}
                      onChange={handleChangeCep}
                    />
                  </div>

                  <div className="form-group form-group_disabled">
                    <label htmlFor="bairro">Bairro</label>
                    <Input
                      type="text"
                      id="bairro"
                      name="bairro"
                      placeholder="Ex: Centro"
                      icon={BiMap}
                      readOnly
                      value={bairro}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <Input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(21) 99999-9999"
                    {...maskOptions}
                    icon={BiPhone}
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-salvar"
                  disabled={loading.endereco}
                >
                  {loading.endereco ? (
                    <CgSpinner size={35} className="loading" />
                  ) : (
                    "Salvar"
                  )}
                </button>
              </form>
            </Address>

            <Categories className="area-box">
              <h2>Categoria</h2>
              {user.categoria && (
                <p>
                  Usuario está cadastrado nas seguinte categoria:{" "}
                  <strong>
                    {user.categoria === "ONG" ? (
                      <>
                        <BsBuildingsFill size={20} /> {"ONG"}
                      </>
                    ) : (
                      <>
                        <RiShieldUserFill size={20} /> {"Pessoa Física"}
                      </>
                    )}
                  </strong>
                </p>
              )}

              {!user.categoria && (
                <form onSubmit={handleUpdate} className="form-categoria">
                  <div className="form-group form-group-categoria">
                    <label htmlFor="categoria">
                      Selecione uma categoria para o seu perfil:
                    </label>
                    <Select
                      id="categoria"
                      name="categoria"
                      options={SelectCategorias}
                      onChange={(e) => setCategoria(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-salvar"
                    disabled={loading.categoria}
                  >
                    {loading.categoria ? (
                      <CgSpinner size={35} className="loading" />
                    ) : (
                      "Salvar"
                    )}
                  </button>
                </form>
              )}
            </Categories>

            {!user.google_id && (
              <Password className="area-box">
                <h2>Alterar Senha</h2>
                <form onSubmit={handleUpdate} className="form-alterar-senha">
                  <div className="form-group form-group_senha">
                    <label htmlFor="senha">Senha Atual</label>
                    <Input
                      type={passwordsVisibility.password1 ? "text" : "password"}
                      id="senha"
                      name="senha"
                      placeholder="Senha Atual"
                      icon={RiLockPasswordLine}
                      value={velhaSenha}
                      onChange={(e) => setVelhaSenha(e.target.value)}
                    />
                    <span
                      className="password-icon"
                      onClick={() => togglePasswordVisibility("password1")}
                      style={{ cursor: "pointer" }}
                    >
                      {passwordsVisibility.password1 ? (
                        <AiOutlineEyeInvisible size={20} color=" #666" />
                      ) : (
                        <AiOutlineEye size={20} color=" #666" />
                      )}
                    </span>
                  </div>

                  <div className="form-group form-group_senha">
                    <label htmlFor="novaSenha">Nova Senha</label>
                    <Input
                      type={passwordsVisibility.password2 ? "text" : "password"}
                      id="novaSenha"
                      name="novaSenha"
                      placeholder="Nova Senha"
                      icon={RiLockPasswordLine}
                      value={novaSenha}
                      onChange={(e) => setNovaSenha(e.target.value)}
                    />
                    <span
                      className="password-icon"
                      onClick={() => togglePasswordVisibility("password2")}
                      style={{ cursor: "pointer" }}
                    >
                      {passwordsVisibility.password2 ? (
                        <AiOutlineEyeInvisible size={20} color=" #666" />
                      ) : (
                        <AiOutlineEye size={20} color=" #666" />
                      )}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn-salvar"
                    disabled={loading.senha}
                  >
                    {loading.senha ? (
                      <CgSpinner size={35} className="loading" />
                    ) : (
                      "Salvar"
                    )}
                  </button>
                </form>
              </Password>
            )}
          </SectionProfile>
        </div>
      </main>
      <Footer />

      <ToastContainer />
    </Container>
  );
};

export default Me;
