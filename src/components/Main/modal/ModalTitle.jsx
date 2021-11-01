import React, { useState, useContext } from "react";
import { AppContext } from "../../../data/Store";
import IconCloseModal from "../img/icon-close-modal.svg";

const ModalTitle = (props) => {
  const [closeModal, setCloseMenu] = useState(false);
  const { closeModalMain } = useContext(AppContext);
  return (
    <div className="modal__title">
      <div>
        <h2>Back this project</h2>
        <button
          onClick={() => {
            setCloseMenu(() => {
              if (!closeModal) {
                closeModalMain();
              }
            });
          }}
        >
          <img src={IconCloseModal} alt="icon-close-modal" />
        </button>
      </div>

      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
    </div>
  );
};

export default ModalTitle;
