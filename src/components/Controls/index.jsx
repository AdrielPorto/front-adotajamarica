import { useState, Fragment } from "react";

import { BoxFilter } from "./styles";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
const Controls = ({
  setEspecie,
  setGenero,
  setPorteFisico,
  setFaixa_Etaria,
  setCaracteristica,
  setInputSearch,
  setSelectSearch,
  setResetar,

  especie,
  genero,
  porteFisico,
  faixa_etaria,
  caracteristica,
  resetar,
  query,
}) => {
  const [selectedOption, setSelectedOption] = useState("Aplicar");
  const [activeBoxes, setActiveBoxes] = useState([]);

  const handleOptionChange = (event) => {
    if (event.target.value === "Aplicar") {
      setResetar(false);
    }
    if (event.target.value === "Resetar") {
      setResetar(true);

      setEspecie([]);
      setGenero([]);
      setPorteFisico([]);
      setFaixa_Etaria([]);
      setCaracteristica([]);
      setInputSearch("");
      setSelectSearch("");
    }
    setSelectedOption(event.target.value);
  };

  const handleClick = (index) => {
    if (activeBoxes.includes(index)) {
      setActiveBoxes(activeBoxes.filter((item) => item !== index));
    } else {
      setActiveBoxes([...activeBoxes, index]);
    }
  };

  const handleEspecie = (event) => {
    if (event.target.checked) {
      setEspecie([...especie, event.target.value]);
    } else {
      setEspecie(especie.filter((item) => item !== event.target.value));
    }
  };

  const handleGenero = (event) => {
    if (event.target.checked) {
      setGenero([...genero, event.target.value]);
    } else {
      setGenero(genero.filter((item) => item !== event.target.value));
    }
  };

  const handlePorteFisico = (event) => {
    if (event.target.checked) {
      setPorteFisico([...porteFisico, event.target.value]);
    } else {
      setPorteFisico(porteFisico.filter((item) => item !== event.target.value));
    }
  };

  const handleFaixa_etaria = (event) => {
    if (event.target.checked) {
      setFaixa_Etaria([...faixa_etaria, event.target.value]);
    } else {
      setFaixa_Etaria(
        faixa_etaria.filter((item) => item !== event.target.value)
      );
    }
  };

  const handleCaracteristica = (event) => {
    if (event.target.checked) {
      setCaracteristica([...caracteristica, event.target.value]);
    } else {
      setCaracteristica(
        caracteristica.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <Fragment>
      <BoxFilter className="removeBd" color="rgba(35, 99, 236, 0.377)">
        <div className="btn-group">
          <label
            htmlFor="Resetar"
            className={selectedOption === "Resetar" ? "active" : ""}
          >
            <input
              className="form-check-input"
              type="radio"
              id="Resetar"
              name="controls"
              value="Resetar"
              onClick={handleOptionChange}
            />
            Resetar
          </label>

          <label
            htmlFor="Aplicar"
            className={selectedOption === "Aplicar" ? "active" : ""}
          >
            <input
              className="form-check-input"
              type="radio"
              id="Aplicar"
              name="controls"
              value="Aplicar"
              onClick={handleOptionChange}
            />
            Aplicar
          </label>
        </div>
      </BoxFilter>

      <BoxFilter className="borderTop marginTop">
        <div className="box-label">
          <button
            onClick={() => {
              handleClick(0);
            }}
          >
            Espécie
            {activeBoxes.includes(0) ? <HiMinusSm /> : <HiPlusSm />}
          </button>

          <div
            className={`innerBox ${activeBoxes.includes(0) ? "active" : ""}`}
          >
            <label htmlFor="Cachorro">
              <input
                type="checkbox"
                id="Cachorro"
                name="Cachorro"
                value="Cachorro"
                onChange={handleEspecie}
                checked={especie.includes("Cachorro") ? true : false}
              />
              Cachorro
            </label>

            <label htmlFor="Gato">
              <input
                type="checkbox"
                id="Gato"
                name="Gato"
                value="Gato"
                onChange={handleEspecie}
                checked={especie.includes("Gato") ? true : false}
              />
              Gato
            </label>
            <label htmlFor="Coelho">
              <input
                type="checkbox"
                id="Coelho"
                name="Coelho"
                value="Coelho"
                onChange={handleEspecie}
                checked={especie.includes("Coelho") ? true : false}
              />
              Coelho
            </label>
            <label htmlFor="Cavalo">
              <input
                type="checkbox"
                id="Cavalo"
                name="Cavalo"
                value="Cavalo"
                onChange={handleEspecie}
                checked={especie.includes("Cavalo") ? true : false}
              />
              Cavalo
            </label>
            <label htmlFor="Outros">
              <input
                type="checkbox"
                id="Outros"
                name="Outros"
                value="Outros"
                onChange={handleEspecie}
                checked={especie.includes("Outros") ? true : false}
              />
              Outros
            </label>
          </div>
        </div>
      </BoxFilter>

      <BoxFilter className="borderTop">
        <div className="box-label">
          <button
            onClick={() => {
              handleClick(1);
            }}
          >
            Genero
            {activeBoxes.includes(1) ? <HiMinusSm /> : <HiPlusSm />}
          </button>

          <div
            className={`innerBox ${activeBoxes.includes(1) ? "active" : ""}`}
          >
            <label htmlFor="Macho">
              <input
                type="checkbox"
                id="Macho"
                name="Macho"
                value="Macho"
                onChange={handleGenero}
                checked={genero.includes("Macho") ? true : false}
              />
              Macho
            </label>

            <label htmlFor="Fêmea">
              <input
                type="checkbox"
                id="Fêmea"
                name="Fêmea"
                value="Fêmea"
                onChange={handleGenero}
                checked={genero.includes("Fêmea") ? true : false}
              />
              Fêmea
            </label>
          </div>
        </div>
      </BoxFilter>

      <BoxFilter className="borderTop">
        <div className="box-label">
          <button
            onClick={() => {
              handleClick(2);
            }}
          >
            Faixa Etária
            {activeBoxes.includes(2) ? <HiMinusSm /> : <HiPlusSm />}
          </button>

          <div
            className={`innerBox ${activeBoxes.includes(2) ? "active" : ""}`}
          >
            <label htmlFor="Filhote">
              <input
                type="checkbox"
                id="Filhote"
                name="Filhote"
                value="Filhote"
                onChange={handleFaixa_etaria}
                checked={faixa_etaria.includes("Filhote") ? true : false}
              />
              Filhote
            </label>

            <label htmlFor="Jovem">
              <input
                type="checkbox"
                id="Jovem"
                name="Jovem"
                value="Jovem"
                onChange={handleFaixa_etaria}
                checked={faixa_etaria.includes("Jovem") ? true : false}
              />
              Jovem
            </label>

            <label htmlFor="Adulto">
              <input
                type="checkbox"
                id="Adulto"
                name="Adulto"
                value="Adulto"
                onChange={handleFaixa_etaria}
                checked={faixa_etaria.includes("Adulto") ? true : false}
              />
              Adulto
            </label>

            <label htmlFor="Idoso">
              <input
                type="checkbox"
                id="Idoso"
                name="Idoso"
                value="Idoso"
                onChange={handleFaixa_etaria}
                checked={faixa_etaria.includes("Idoso") ? true : false}
              />
              Idoso/Sênior
            </label>
          </div>
        </div>
      </BoxFilter>

      <BoxFilter className="borderTop">
        <div className="box-label">
          <button
            onClick={() => {
              handleClick(3);
            }}
          >
            Porte Físico
            {activeBoxes.includes(3) ? <HiMinusSm /> : <HiPlusSm />}
          </button>

          <div
            className={`innerBox ${activeBoxes.includes(3) ? "active" : ""}`}
          >
            <label htmlFor="Pequeno">
              <input
                type="checkbox"
                id="Pequeno"
                name="Pequeno"
                value="Pequeno"
                onChange={handlePorteFisico}
                checked={porteFisico.includes("Pequeno") ? true : false}
              />
              Pequeno Porte
            </label>

            <label htmlFor="Médio">
              <input
                type="checkbox"
                id="Médio"
                name="Médio"
                value="Médio"
                onChange={handlePorteFisico}
                checked={porteFisico.includes("Médio") ? true : false}
              />
              Médio Porte
            </label>

            <label htmlFor="Grande">
              <input
                type="checkbox"
                id="Grande"
                name="Grande"
                value="Grande"
                onChange={handlePorteFisico}
                checked={porteFisico.includes("Grande") ? true : false}
              />
              Grande Porte
            </label>
          </div>
        </div>
      </BoxFilter>

      <BoxFilter className="borderTop">
        <div className="box-label">
          <button
            onClick={() => {
              handleClick(4);
            }}
          >
            Características
            {activeBoxes.includes(4) ? <HiMinusSm /> : <HiPlusSm />}
          </button>

          <div
            className={`innerBox ${activeBoxes.includes(4) ? "active" : ""}`}
          >
            <label htmlFor="Vacinado">
              <input
                type="checkbox"
                id="Vacinado"
                name="Vacinado"
                value="Vacinado"
                onChange={handleCaracteristica}
                checked={caracteristica.includes("Vacinado") ? true : false}
              />
              Vacinado
            </label>

            <label htmlFor="Vermifugado">
              <input
                type="checkbox"
                id="Vermifugado"
                name="Vermifugado"
                value="Vermifugado"
                onChange={handleCaracteristica}
                checked={caracteristica.includes("Vermifugado") ? true : false}
              />
              Vermifugado
            </label>

            <label htmlFor="Castrado">
              <input
                type="checkbox"
                id="Castrado"
                name="Castrado"
                value="Castrado"
                onChange={handleCaracteristica}
                checked={caracteristica.includes("Castrado") ? true : false}
              />
              Castrado
            </label>
          </div>
        </div>
      </BoxFilter>
    </Fragment>
  );
};

export default Controls;
