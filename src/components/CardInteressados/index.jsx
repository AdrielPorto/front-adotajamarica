import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { api } from "../../services/api";
import { verificaHTTPS } from "../../utils/containsHTTPSAvatar";
import { formatWhatsAppNumber } from "../../utils/formatNumber";

import { IoLogoWhatsapp } from "react-icons/io5";
import { BsFillEnvelopeAtFill, BsFillCheckCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { ContainerCard } from "./styles";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import ModalConfirm from "../../components/ModalConfirm";

const CardInteressados = ({ interessado, handleDelete, handleConfirm }) => {
  return (
    <ContainerCard>
      <div className="card-header">
        <Link to={`/user/${interessado?.usuario_id}`}>
          {interessado?.usuario_avatar ? (
            <img
              src={
                verificaHTTPS(interessado?.usuario_avatar)
                  ? interessado?.usuario_avatar
                  : `${api.defaults.baseURL}/files/${interessado?.usuario_avatar}`
              }
              alt={interessado?.usuario_nome}
              className="profile"
            />
          ) : (
            <FaUserCircle size={50} className="profile" color="black" />
          )}
        </Link>
        <div className="card-header_title">
          <Link to={`/user/${interessado?.usuario_id}`}>
            {interessado?.usuario_nome}{" "}
          </Link>
          <span>Quer adotar</span>
        </div>
      </div>
      <div className="card-media">
        {" "}
        <Link to={`/pet/${interessado?.pet_id}`}>
          <img
            src={`${api.defaults.baseURL}/files/${interessado?.foto_pet_url[0]}`}
            alt="pet"
            className="card-media_img"
          />
        </Link>
      </div>

      <div className="card-content">
        <Link to={`/pet/${interessado?.pet_id}`}>{interessado?.pet_nome}</Link>
      </div>
      <div className="card-action">
        <div className="card-action_icons">
          <ModalConfirm
            isNotDonate={true}
            handleDelete={handleDelete}
            usuarios_interessados_id={interessado?.usuarios_interessados_id}
            openerElement={
              <button
                className="card-action_icons-not"
                data-tooltip-id="no-tooltip"
                data-tooltip-content="Recusar adoção"
              >
                <RiCloseCircleFill size={30} />
              </button>
            }
            title="Rejeitar adoção"
          >
            <p>
              Você tem certeza que deseja recusar a adoção do pet{" "}
              <strong>{interessado?.pet_nome}</strong> para o usuário(a){" "}
              <strong>{interessado?.usuario_nome}</strong>?
            </p>
          </ModalConfirm>
          <ModalConfirm
            isDonate={true}
            handleConfirm={handleConfirm}
            usuarios_interessados_id={interessado?.usuarios_interessados_id}
            openerElement={
              <button
                className="card-action_icons-okay"
                data-tooltip-id="yes-tooltip"
                data-tooltip-content="Aceitar adoção"
              >
                <BsFillCheckCircleFill size={25} />
              </button>
            }
            title="Confirmar adoção"
          >
            <p>
              Você tem certeza que deseja doar o pet{" "}
              <strong>{interessado?.pet_nome}</strong> para o usuário(a){" "}
              <strong>{interessado?.usuario_nome}</strong>?
            </p>
          </ModalConfirm>
        </div>
        <div className="card-action_contacts">
          <a
            href={`https://api.whatsapp.com/send?phone=${formatWhatsAppNumber(
              interessado?.usuario_telefone
            )}`}
            className="card-action_contacts-zap"
          >
            <IoLogoWhatsapp size={25} />
          </a>

          <a
            href={`mailto:${interessado?.usuario_email}`}
            className="card-action_contacts-email"
          >
            <BsFillEnvelopeAtFill size={25} />
          </a>
        </div>
        <Tooltip id="no-tooltip" />
        <Tooltip id="yes-tooltip" />
      </div>
    </ContainerCard>
  );
};

export default CardInteressados;
