import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../../../data/Store";

const ModalBlackEdition = (props) => {
  const [blackEdition, setBlackEdition] = useState(false);
  const { handleModal } = useContext(AppContext);
  //refs
  const refBorder = useRef(null);
  const refBtnCheck = useRef(null);
  const refPledge = useRef(null);

  return (
    <div
      className="modal__card"
      ref={refBorder}
      onMouseLeave={() => {
        if (blackEdition === true) {
          refBorder.current.style.border = "1px solid #d8d8d8";
          refBtnCheck.current.style.display = "none";
          refPledge.current.style.display = "none";
          setBlackEdition(false);
        }
      }}
      aria-hidden="true"
    >
      <div className="modal__card-title">
        <button className="modal__card-choose">
          .
          <span className="btn-check" ref={refBtnCheck}>
            .
          </span>
        </button>
        <div>
          <h3
            onClick={() => {
              if (blackEdition === false) {
                refBorder.current.style.border = "1px solid hsl(176, 50%, 47%)";
                refBtnCheck.current.style.display = "inline-block";
                refPledge.current.style.display = "flex";
                setBlackEdition(true);
              }
            }}
            aria-hidden="true"
          >
            Black Edition Stand
          </h3>
          <h4>Pledge $75 or more</h4>
        </div>
      </div>

      <div className="modal__card-body">
        <div className="modal__card-description">
          <p className="modal__card-text">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <p className="modal__card-left">
            64 <span>left</span>
          </p>
        </div>
        {/* pledge */}
        <div className="modal__pledge" ref={refPledge}>
          <h4>Enter your pledge</h4>
          <div className="modal__pledge-buttons">
            <button className="modal__pledge-buttons-number">
              <span className="modal__pledge-dollar-sign">$</span>
              <span className="modal__pledge-dollar-price"> 75</span>
            </button>
            <button
              className="modal_button-continue"
              onClick={() => {
                if (props.modalSuccess === false) {
                  handleModal();
                  props.setModalSuccess(true);
                }
              }}
            >
              <span>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBlackEdition;
