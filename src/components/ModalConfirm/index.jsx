import React, { useState } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { ModalContainer } from "./styles";

Modal.setAppElement("#root");
const ModalConfirm = ({
  openerElement,
  title,
  children,
  isDeletePet,
  id,
  url,
  deletePets,
  isDonate,
  handleConfirm,
  isNotDonate,
  handleDelete,
  usuarios_interessados_id,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmModal = async (id) => {
    if (isDeletePet) {
      try {
        if (url.length > 0) {
          url.forEach((photo) => {
            const data = {
              pet_id: id,
              url: photo,
            };

            api.delete(`/photos/deleteByPetUrl`, { data: data });
          });
        }

        deletePets(id);
      } catch (err) {
        console.log(err);
        toast("Erro ao deletar pet", {
          type: "error",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }

    if (isDonate) {
      handleConfirm(usuarios_interessados_id);
    }

    if (isNotDonate) {
      handleDelete(usuarios_interessados_id);
    }

    closeModal();
  };

  return (
    <ModalContainer>
      {React.cloneElement(openerElement, { onClick: openModal })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-confirm"
      >
        <div className="header-modal">
          <h2>{title}</h2>
        </div>

        <div className="body-modal">{children}</div>

        <div className="footer-modal">
          <button onClick={closeModal} className="closeModal">
            Cancelar
          </button>
          <button
            onClick={() => handleConfirmModal(id)}
            className="confirmModal"
          >
            Confirmar
          </button>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default ModalConfirm;
