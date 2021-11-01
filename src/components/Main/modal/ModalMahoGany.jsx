import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../../../data/Store";

const ModalMahoGany = (props) => {
  const [mahogany, setMahogany] = useState(false);
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
        if (mahogany === true) {
          refBorder.current.style.border = "1px solid #d8d8d8";
          refBtnCheck.current.style.display = "none";
          refPledge.current.style.display = "none";
          setMahogany(false);
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
            style={{ color: "#7d7d7d" }}
            onClick={() => {
              if (mahogany === false) {
                refBorder.current.style.border = "1px solid hsl(176, 50%, 47%)";
                refBtnCheck.current.style.display = "inline-block";
                refPledge.current.style.display = "flex";
                setMahogany(true);
              }
            }}
            aria-hidden="true"
          >
            Mahogany Special Edition
          </h3>
          <h4 style={{ color: "#a5d4ce" }}>Pledge $200 or more</h4>
        </div>
      </div>

      <div className="modal__card-body">
        <div className="modal__card-description">
          <p className="modal__card-text" style={{ color: "#b9b9b9" }}>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <p className="modal__card-left" style={{ color: "#818181" }}>
            0 <span>left</span>
          </p>
        </div>
        {/* pledge */}
        <div className="modal__pledge" ref={refPledge}>
          <h4>Enter your pledge</h4>
          <div className="modal__pledge-buttons">
            <button className="modal__pledge-buttons-number">
              <span className="modal__pledge-dollar-sign">$</span>
              <span className="modal__pledge-dollar-price"> 200</span>
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

export default ModalMahoGany;
