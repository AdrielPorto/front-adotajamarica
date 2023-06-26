import React, { useState } from "react";
import Modal from "react-modal";

import { ModalContainer } from "./styles";

Modal.setAppElement("#root");
const CustomModal = ({ openerElement, title, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalContainer>
      {React.cloneElement(openerElement, { onClick: openModal })}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="header-modal">
          <h2>{title}</h2>
        </div>

        <div className="body-modal">{children}</div>

        <div className="footer-modal">
          <button onClick={closeModal} className="closeModal">
            Fechar
          </button>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default CustomModal;
