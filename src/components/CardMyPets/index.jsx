import React, { useState, useEffect, useRef } from "react";
import { api } from "../../services/api";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { BiMap, BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import {
  Container,
  ButtonOptions,
  CardHeader,
  CardBody,
  Popover,
} from "./styles";

import ModalConfirm from "../ModalConfirm";
import Loading from "../Loading";

const CardMyPets = ({ data, deletePets }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (event.target && popoverRef.current && popoverRef.current.contains) {
        if (!popoverRef.current.contains(event.target)) {
          setShowPopover(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);
  });

  const handleShowPopover = () => {
    setShowPopover(!showPopover);
  };

  if (!data.fotos || data.fotos.length === 0) {
    return <Loading />;
  }

  return (
    <Container>
      {data.disponibilidade && (
        <>
          <ButtonOptions onClick={handleShowPopover} ref={popoverRef}>
            <BiDotsVerticalRounded />
          </ButtonOptions>

          <Popover className={showPopover ? "active" : "inactive"}>
            <ul>
              <li>
                <Link to={`/updatePet/${data.id}`}>
                  Editar
                  <BiEditAlt />
                </Link>
              </li>

              <li>
                <ModalConfirm
                  openerElement={
                    <button>
                      Excluir
                      <IoMdClose />
                    </button>
                  }
                  title="Excluir pet"
                  isDeletePet={true}
                  id={data.id}
                  url={data.fotos}
                  deletePets={deletePets}
                >
                  <p>
                    Você tem certeza que deseja excluir o pet{" "}
                    <strong>{data.nome}</strong>
                  </p>
                </ModalConfirm>
              </li>
            </ul>
          </Popover>
        </>
      )}

      <CardHeader>
        <Link to={`/pet/${data.id}`}>
          <img
            src={api.defaults.baseURL + "/files/" + data.fotos[0]}
            alt="pet"
          />
        </Link>
      </CardHeader>
      <CardBody>
        {/* <div className="flag disponivel">Disponivel para adoção</div> */}
        {/* <div className="flag adotado">Adotado</div> */}

        {data.disponibilidade ? (
          <div className="flag disponivel">Disponivel </div>
        ) : (
          <div className="flag doado">Doado</div>
        )}

        <Link to={`/pet/${data.id}`}>
          {" "}
          <h5>{data.nome}</h5>
        </Link>
        <div className="address">
          <BiMap />
          <span> {data.bairro}</span>
        </div>
      </CardBody>
    </Container>
  );
};

export default CardMyPets;
