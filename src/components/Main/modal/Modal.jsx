import React, { useState } from "react";

import { ModalContainer } from "./StyleModal";

//modal - components
import ModalTitle from "./ModalTitle";
import ModalBamboo from "./ModalBamboo";
import ModalPledge from "./ModalPledge";
import ModalBlackEdition from "./ModalBlackEdition";
import ModalMahoGany from "./ModalMahoGany";
import ModalSuccessComponent from "./ModalSuccess";
import { useModal } from "../../../data/Store";

const Modal = (props) => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const { ModalRef } = useModal();
  return (
    <>
      <ModalContainer className="modal" ref={ModalRef}>
        <div className="modal__container">
          {/* card - title */}
          <ModalTitle />

          {/* card - Pledge */}
          <ModalPledge />

          {/* card - Pledge */}
          <ModalBamboo
            modalSuccess={modalSuccess}
            setModalSuccess={setModalSuccess}
          />

          {/* card - Black Edition */}
          <ModalBlackEdition
            modalSuccess={modalSuccess}
            setModalSuccess={setModalSuccess}
          />

          {/* card - Mahogany */}
          <ModalMahoGany
            modalSuccess={modalSuccess}
            setModalSuccess={setModalSuccess}
          />
        </div>
      </ModalContainer>

      {/* Modal - Success */}
      <ModalSuccessComponent
        modalSuccess={modalSuccess}
        setModalSuccess={setModalSuccess}
      />
    </>
  );
};

export default Modal;
