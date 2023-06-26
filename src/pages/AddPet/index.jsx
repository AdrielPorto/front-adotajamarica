import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { api, apiCep } from "../../services/api";

import {
  RiLockPasswordLine,
  RiHome7Line,
  RiCloseCircleFill,
} from "react-icons/ri";
import { BiMap } from "react-icons/bi";
import { BsPlus, BsDownload } from "react-icons/bs";

import {
  Container,
  SectionRegister,
  ContainerSave,
  ContainerInfo,
  ContainerCategory,
  Address,
  ContainerAvatar,
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import InfoAlert from "../../components/InfoAlert";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import Loading from "../../components/Loading";

const cepMaskOptions = {
  mask: "99999-999",
};

const Valueoptions = [
  { value: "", label: "Selecione" },
  { value: "Cachorro", label: "Cachorro" },
  { value: "Gato", label: "Gato" },
  { value: "Coelho", label: "Coelho" },
  { value: "Cavalo", label: "Cavalo" },
  { value: "Outros", label: "Outros" },
];

const Dateoptions = [
  { value: "", label: "Selecione" },
  { value: "Filhote", label: "Filhote" },
  { value: "Jovem", label: "Jovem" },
  { value: "Adulto", label: "Adulto" },
  { value: "Idoso", label: "Idoso" },
];

const Genderoptions = [
  { value: "", label: "Selecione" },
  { value: "Macho", label: "Macho" },
  { value: "Fêmea", label: "Fêmea" },
];

const Shapeoptions = [
  { value: "", label: "Selecione" },
  { value: "Pequeno", label: "Pequeno Porte" },
  { value: "Médio", label: "Médio Porte" },
  { value: "Grande", label: "Grande Porte" },
];

const AddPet = () => {
  const [checkboxRegister, setCheckboxRegister] = useState(false);
  const [renderComponent, setRenderComponent] = useState(false);
  const [fotosPet, setFotosPet] = useState([null, null, null, null]);
  const [isChecked, setIsChecked] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const handleCheckboxRegister = () => {
    setCheckboxRegister(!checkboxRegister);
  };

  const handleRenderComponent = () => {
    if (checkboxRegister) {
      if (!user.categoria) {
        toast(
          "Você precisa escolher uma categoria de perfil (ONG ou Pessoa Física) para cadastrar o animal.",
          {
            type: "warning",
            hideProgressBar: true,
            autoClose: 3000,
          }
        );
        return;
      }

      if (!user.telefone) {
        toast("Você precisa cadastrar um telefone para cadastrar o animal.", {
          type: "warning",
          hideProgressBar: true,
          autoClose: 3000,
        });
        return;
      }
      setRenderComponent(true);
      window.scrollTo({
        top: 0,
      });
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.nome) {
      errors.nome = "Nome do animal é obrigatório.";
    }

    if (!values.especie) {
      errors.especie = "Espécie do animal é obrigatória.";
    }
    if (!values.raca) {
      errors.raca = "Raça do animal é obrigatória.";
    }
    if (!values.faixa_etaria) {
      errors.faixa_etaria = "Faixa etária do animal é obrigatória.";
    }
    if (!values.genero) {
      errors.genero = "Gênero do animal é obrigatório.";
    }
    if (!values.porte_fisico) {
      errors.porte_fisico = "Porte físico do animal é obrigatório.";
    }
    if (values.vacinado === "") {
      errors.vacinado = "Informe se o animal foi vacinado.";
    }
    if (values.vermifugado === "") {
      errors.vermifugado = "Informe se o animal foi vermifugado.";
    }
    if (values.castrado === "") {
      errors.castrado = "Informe se o animal foi castrado.";
    }
    if (!values.bairro) {
      errors.bairro = "Bairro é obrigatório.";
    }
    if (!values.cep) {
      errors.cep = "CEP é obrigatório.";
    }

    if (values.cep.length < 9) {
      errors.cep = "CEP inválido.";
    }

    if (values.photoPet[0] === null) {
      errors.photoPet = "Adicione pelo menos uma foto do animal.";
    }

    if (Object.keys(errors).length !== 0) {
      toast("Preencha todos os campos obrigatórios.", {
        type: "error",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      descricao: "",
      especie: "",
      raca: "",
      faixa_etaria: "",
      genero: "",
      porte_fisico: "",
      vacinado: "",
      vermifugado: "",
      disponibilidade: true,
      castrado: "",
      bairro: "",
      cep: "",
      photoPet: [null, null, null, null],
    },
    validateOnChange: false,
    validate,
    onSubmit: (values) => {
      const { photoPet } = values;

      api.post("/pets", values).then((response) => {
        const { id } = response.data[0];

        const fileUploadForm = new FormData();

        photoPet.forEach((photo, index) => {
          if (photo !== null) {
            fileUploadForm.append(`photoPet`, photo);
          }
        });

        api
          .post(`photos/${id}`, fileUploadForm)
          .then((response) => {
            toast("Animal cadastrado com sucesso!", {
              type: "success",
              hideProgressBar: true,
              autoClose: 3000,
            });

            formik.resetForm();
            setFotosPet([null, null, null, null]);
            setNextIndex(0);
            setIsChecked(false);
          })
          .catch((error) => {
            console.log(error);
            toast("Ocorreu um erro ao cadastrar o animal.", {
              type: "error",
              hideProgressBar: true,
              autoClose: 3000,
            });
          });
      });
    },
  });

  const handleChangeCep = (event) => {
    const cep = event.target.value;
    formik.setFieldValue("cep", cep);
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

        formik.setFieldValue("cep", "");
        formik.setFieldValue("bairro", "");

        return;
      }

      if (data.localidade !== "Maricá") {
        toast("O CEP informado não é de Maricá", {
          type: "error",
          hideProgressBar: true,
          autoClose: 3000,
        });

        formik.setFieldValue("cep", "");
        formik.setFieldValue("bairro", "");

        return;
      }
      formik.setFieldValue("bairro", data.bairro);
    } catch (erro) {
      toast("Ocorreu um erro ao encontrar os dados do CEP ", {
        type: "error",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  const handleSelectEndereco = (event) => {
    setIsChecked((prevValue) => !prevValue); // Atualiza o estado com base no valor anterior
  };

  useEffect(() => {
    getCepUser();
  }, [isChecked]);

  const getCepUser = async () => {
    try {
      if (isChecked) {
        if (user.cep) {
          formik.setFieldValue("cep", user.cep);
          formik.setFieldValue("bairro", user.bairro);
        }
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    if (selectedFiles.length + nextIndex > 4) {
      toast("Você já adicionou o número máximo de fotos permitido.", {
        type: "warning",
        hideProgressBar: true,
        autoClose: 3000,
      });
      return;
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      formik.setFieldValue(`photoPet[${nextIndex + i}]`, file);
      const reader = URL.createObjectURL(file);

      const newFotos = [...fotosPet];

      newFotos[nextIndex + i] = reader;

      setFotosPet(newFotos);
    }

    setNextIndex(nextIndex + selectedFiles.length);
  };

  const handlePhotoClick = (index) => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.onchange = (event) => handleReplacementFile(event, index);
    inputElement.click();
  };

  const handleReplacementFile = (event, index) => {
    const file = event.target.files[0];
    formik.setFieldValue(`photoPet[${index}]`, file);

    const reader = URL.createObjectURL(file);

    const newFotos = [...fotosPet];

    newFotos[index] = reader;

    setFotosPet(newFotos);
  };

  const handlePhotoDelete = (index) => {
    const { photoPet } = formik.values;
    const newFotos = [...photoPet];
    newFotos.push(newFotos.splice(index, 1)[0]);
    newFotos[newFotos.length - 1] = null;
    formik.setFieldValue("photoPet", newFotos);

    setNextIndex(nextIndex - 1);
  };

  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <Aside />
          <SectionRegister>
            {renderComponent ? (
              <form onSubmit={formik.handleSubmit}>
                <ContainerSave className="area-box">
                  <h3>Dados do animal para adoção</h3>

                  <div className="form-group">
                    <label
                      htmlFor="nome"
                      className={formik.errors.nome ? "errorLabel" : null}
                    >
                      <span className="dot_red">*</span>
                      Nome do Animal{" "}
                      <span className="strong_red">obrigatório</span>
                    </label>
                    <Input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Nome do Animal"
                      onChange={formik.handleChange}
                      value={formik.values.nome}
                      error={formik.errors.nome ? "errorInput" : null}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="descricao">Descrição do Animal</label>
                    <TextArea
                      id="descricao"
                      name="descricao"
                      placeholder="Fale um pouco sobre o animal ou motivo da doação"
                      maxLength="307"
                      onChange={formik.handleChange}
                      value={formik.values.descricao}
                    />
                  </div>
                </ContainerSave>

                <ContainerAvatar className="area-box">
                  <h3>Adicione fotos do animal.</h3>

                  <div className="form-group">
                    <span
                      htmlFor="avatar"
                      className={
                        formik.errors.photoPet ? "errorLabel label" : "label"
                      }
                    >
                      <span className="dot_red">*</span>
                      Foto do animal{" "}
                      <span className="strong_red">obrigatório</span>
                    </span>
                    <label
                      htmlFor="avatar"
                      className={formik.errors.photoPet ? "errorFile" : null}
                    >
                      <Input
                        type="file"
                        id="avatar"
                        name="avatar"
                        placeholder="Foto do animal"
                        onChange={handleFileChange}
                      />
                      <BsDownload size={30} />
                      <span>Imagem do animal</span>
                    </label>
                  </div>

                  <div className="container-avatar">
                    <div
                      className={
                        formik.errors.photoPet ? "errorFile avatar" : "avatar"
                      }
                    >
                      {formik.values.photoPet[0] ? (
                        <>
                          <img
                            src={fotosPet[0]}
                            alt="Foto do animal"
                            onClick={() => handlePhotoClick(0)}
                          />

                          <RiCloseCircleFill
                            size={20}
                            className="delete-photo"
                            type="button"
                            onClick={() => handlePhotoDelete(0)}
                          />
                        </>
                      ) : (
                        <BsPlus size={30} />
                      )}
                    </div>
                    <div
                      className={
                        formik.errors.photoPet ? "errorFile avatar" : "avatar"
                      }
                    >
                      {formik.values.photoPet[1] ? (
                        <>
                          <img
                            src={fotosPet[1]}
                            alt="Foto do animal"
                            onClick={() => handlePhotoClick(1)}
                          />
                          <RiCloseCircleFill
                            size={20}
                            className="delete-photo"
                            type="button"
                            onClick={() => handlePhotoDelete(1)}
                          />
                        </>
                      ) : (
                        <BsPlus size={30} />
                      )}
                    </div>
                    <div
                      className={
                        formik.errors.photoPet ? "errorFile avatar" : "avatar"
                      }
                    >
                      {formik.values.photoPet[2] ? (
                        <>
                          <img
                            src={fotosPet[2]}
                            alt="Foto do animal"
                            onClick={() => handlePhotoClick(2)}
                          />
                          <RiCloseCircleFill
                            size={20}
                            className="delete-photo"
                            type="button"
                            onClick={() => handlePhotoDelete(2)}
                          />
                        </>
                      ) : (
                        <BsPlus size={30} />
                      )}
                    </div>
                    <div
                      className={
                        formik.errors.photoPet ? "errorFile avatar" : "avatar"
                      }
                    >
                      {formik.values.photoPet[3] ? (
                        <>
                          <img
                            src={fotosPet[3]}
                            alt="Foto do animal"
                            onClick={() => handlePhotoClick(3)}
                          />
                          <RiCloseCircleFill
                            size={20}
                            className="delete-photo"
                            type="button"
                            onClick={() => handlePhotoDelete(3)}
                          />
                        </>
                      ) : (
                        <BsPlus size={30} />
                      )}
                    </div>
                  </div>
                </ContainerAvatar>

                <ContainerInfo className="area-box">
                  <h3>Informações do animal</h3>
                  <div className="flex-group">
                    <div className="form-group">
                      <label
                        htmlFor="especie"
                        className={formik.errors.especie ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        Espécie <span className="strong_red">obrigatório</span>
                      </label>
                      <Select
                        options={Valueoptions}
                        onChange={(e) => {
                          formik.setFieldValue("especie", e.target.value);
                        }}
                        className={formik.errors.especie ? "errorInput" : null}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="raca"
                        className={formik.errors.raca ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        Raça <span className="strong_red">obrigatório</span>
                      </label>
                      <Input
                        type="text"
                        id="raca"
                        name="raca"
                        placeholder="Raça"
                        value={formik.values.raca}
                        onChange={formik.handleChange}
                        error={formik.errors.raca ? "errorInput" : null}
                      />
                    </div>
                  </div>
                  <div className="flex-group">
                    <div className="form-group">
                      <label
                        htmlFor="idade"
                        className={
                          formik.errors.faixa_etaria ? "errorLabel" : null
                        }
                      >
                        <span className="dot_red">*</span>
                        Faixa etária do animal{" "}
                        <span className="strong_red">obrigatório</span>
                      </label>

                      <div className="flex-group">
                        <Select
                          options={Dateoptions}
                          onChange={(e) => {
                            formik.setFieldValue(
                              "faixa_etaria",
                              e.target.value
                            );
                          }}
                          className={
                            formik.errors.faixa_etaria
                              ? "errorInput select-age"
                              : "select-age"
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="sexo"
                        className={formik.errors.genero ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        Sexo <span className="strong_red">obrigatório</span>
                      </label>

                      <Select
                        options={Genderoptions}
                        onChange={(e) => {
                          formik.setFieldValue("genero", e.target.value);
                        }}
                        className={formik.errors.genero ? "errorInput" : null}
                      />
                    </div>
                  </div>
                </ContainerInfo>

                <ContainerCategory className="area-box">
                  <h3>Saúde do animal</h3>

                  <div className="flex-group">
                    <div className="form-group">
                      <label
                        htmlFor="peso"
                        className={
                          formik.errors.porte_fisico ? "errorLabel" : null
                        }
                      >
                        <span className="dot_red">*</span>
                        Porte fisico{" "}
                        <span className="strong_red">obrigatório</span>
                      </label>
                      <Select
                        options={Shapeoptions}
                        onChange={(e) => {
                          formik.setFieldValue("porte_fisico", e.target.value);
                        }}
                        className={
                          formik.errors.porte_fisico ? "errorInput" : null
                        }
                      />
                    </div>
                    <div className="form-group margin-input">
                      <label
                        htmlFor="vacinado"
                        className={formik.errors.vacinado ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        Está Vacinado?{" "}
                        <span className="strong_red">obrigatório</span>
                      </label>

                      <label
                        htmlFor="Sim_vacinado"
                        className={formik.errors.vacinado ? "errorLabel" : null}
                      >
                        <input
                          type="radio"
                          id="Sim_vacinado"
                          name="vacinado"
                          value="true"
                          checked={formik.values.vacinado === true}
                          onChange={() => {
                            formik.setFieldValue("vacinado", true);
                          }}
                        />
                        Sim
                      </label>

                      <label
                        htmlFor="Não_vacinado"
                        className={formik.errors.vacinado ? "errorLabel" : null}
                      >
                        <input
                          type="radio"
                          id="Não_vacinado"
                          name="vacinado"
                          value="false"
                          checked={formik.values.vacinado === false}
                          onChange={() => {
                            formik.setFieldValue("vacinado", false);
                          }}
                        />
                        Não
                      </label>
                    </div>
                  </div>

                  <div className="flex-group">
                    <div className="form-group margin-input">
                      <label
                        htmlFor="castrado"
                        className={formik.errors.castrado ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        Está Castrado?{" "}
                        <span className="strong_red">obrigatório</span>
                      </label>

                      <label
                        htmlFor="Sim_castrado"
                        className={formik.errors.castrado ? "errorLabel" : null}
                      >
                        <input
                          type="radio"
                          id="Sim_castrado"
                          name="castrado"
                          value="true"
                          checked={formik.values.castrado === true}
                          onChange={() => {
                            formik.setFieldValue("castrado", true);
                          }}
                        />
                        Sim
                      </label>

                      <label
                        htmlFor="Não_castrado"
                        className={formik.errors.castrado ? "errorLabel" : null}
                      >
                        <input
                          type="radio"
                          id="Não_castrado"
                          name="castrado"
                          value="false"
                          checked={formik.values.castrado === false}
                          onChange={() => {
                            formik.setFieldValue("castrado", false);
                          }}
                        />
                        Não
                      </label>
                    </div>

                    <div className="form-group margin-input">
                      <label
                        htmlFor="vermifugado"
                        className={
                          formik.errors.vermifugado ? "errorLabel" : null
                        }
                      >
                        <span className="dot_red">*</span>
                        Está Vermifugado?{" "}
                        <span className="strong_red">obrigatório</span>
                      </label>

                      <label
                        htmlFor="Sim_vermifugado"
                        className={
                          formik.errors.vermifugado ? "errorLabel" : null
                        }
                      >
                        <input
                          type="radio"
                          id="Sim_vermifugado"
                          name="vermifugado"
                          value="true" // Define o valor como "true" para o rádio "Sim"
                          checked={formik.values.vermifugado === true} // Marca o rádio se o valor selecionado for "true"
                          onChange={() => {
                            formik.setFieldValue("vermifugado", true);
                          }}
                        />
                        Sim
                      </label>

                      <label
                        htmlFor="Não_vermifugado"
                        className={
                          formik.errors.vermifugado ? "errorLabel" : null
                        }
                      >
                        <input
                          type="radio"
                          id="Não_vermifugado"
                          name="vermifugado"
                          value="false" // Define o valor como "false" para o rádio "Não"
                          checked={formik.values.vermifugado === false} // Marca o rádio se o valor selecionado for "false"
                          onChange={() => {
                            formik.setFieldValue("vermifugado", false);
                          }}
                        />
                        Não
                      </label>
                    </div>
                  </div>
                </ContainerCategory>

                <Address className="area-box">
                  <h3>Endereço</h3>

                  <div className="form-group">
                    <input
                      type="checkbox"
                      id="active_address"
                      name="active_address"
                      checked={isChecked}
                      value={isChecked}
                      onChange={handleSelectEndereco}
                    />

                    <label htmlFor="active_address">
                      Endereço do animal é o mesmo do usuário
                    </label>
                  </div>

                  <div className="group-address">
                    <div
                      className={
                        isChecked ? "form-group disabled_cep" : "form-group"
                      }
                    >
                      <label
                        htmlFor="cep"
                        className={formik.errors.cep ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        CEP <span className="strong_red">obrigatório</span>
                      </label>
                      <Input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="20000-000"
                        icon={RiHome7Line}
                        value={formik.values.cep}
                        onChange={handleChangeCep}
                        error={formik.errors.cep ? "errorInput" : null}
                        readOnly={isChecked}
                        {...cepMaskOptions}
                      />
                    </div>

                    <div className="form-group form-group_disabled">
                      <label
                        htmlFor="bairro"
                        className={formik.errors.bairro ? "errorLabel" : null}
                      >
                        <span className="dot_red">*</span>
                        Bairro <span className="strong_red">obrigatório</span>
                      </label>
                      <Input
                        type="text"
                        id="bairro"
                        name="bairro"
                        placeholder="Ex: Centro"
                        readOnly
                        icon={BiMap}
                        value={formik.values.bairro}
                        onChange={formik.handleChange}
                        error={formik.errors.bairro ? "errorInput" : null}
                      />
                    </div>
                  </div>
                </Address>

                <button type="submit" className="btn-salvar">
                  Salvar
                </button>

                {loading && <Loading />}
              </form>
            ) : (
              <div className="container-section-info area-box">
                {" "}
                <InfoAlert />
                <div className="form-agree">
                  <span className="form-group">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      value="agree"
                      onChange={handleCheckboxRegister}
                    />
                    <label htmlFor="agree">
                      Eu li e concordo com os termos de uso do site
                    </label>
                  </span>

                  <button
                    className={
                      checkboxRegister ? "btn-salvar " : "btn-salvar disabled"
                    }
                    onClick={handleRenderComponent}
                  >
                    Continuar com o cadastro
                  </button>
                </div>
              </div>
            )}
          </SectionRegister>
        </div>
      </main>
      <Footer />

      <ToastContainer />
    </Container>
  );
};

export default AddPet;
