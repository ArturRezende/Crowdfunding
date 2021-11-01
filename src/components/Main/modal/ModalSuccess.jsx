import React, { useRef } from "react";
import IconCheck from "../img/icon-check.svg";
import { ModalSuccess } from "./StyleModal";

const ModalSuccessComponent = (props) => {
  const refSuccess = useRef(null);
  return (
    <ModalSuccess className="modal-success" ref={refSuccess}>
      <div className="modal-success__container">
        <img src={IconCheck} alt="icon - check" />
        <h2>Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          onClick={() => {
            if (props.modalSuccess === true) {
              refSuccess.current.classList.remove("fadeInModal");
              refSuccess.current.classList.add("fadeOutModal");
              setTimeout(() => {
                refSuccess.current.style.display = "none";
              }, 1000);

              props.setModalSuccess(false);
            }
          }}
        >
          Got it!
        </button>
      </div>
    </ModalSuccess>
  );
};

export default ModalSuccessComponent;
