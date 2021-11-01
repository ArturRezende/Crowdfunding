import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../../../data/Store";

const ModalBamboo = (props) => {
  const [bamboo, setBamboo] = useState(false);
  const { handleModal } = useContext(AppContext);
  //refs
  const refBorder = useRef(null);
  const refBtnCheck = useRef(null);
  const refPledge = useRef(null);

  return (
    <>
      <div
        className="modal__card"
        ref={refBorder}
        onMouseLeave={() => {
          if (bamboo === true) {
            refBorder.current.style.border = "1px solid #d8d8d8";
            refBtnCheck.current.style.display = "none";
            refPledge.current.style.display = "none";
            setBamboo(false);
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
                if (bamboo === false) {
                  refBorder.current.style.border =
                    "1px solid hsl(176, 50%, 47%)";
                  refBtnCheck.current.style.display = "inline-block";
                  refPledge.current.style.display = "flex";
                  setBamboo(true);
                }
              }}
              aria-hidden="true"
            >
              Bamboo Stand
            </h3>
            <h4>Pledge $25 or more</h4>
          </div>
        </div>

        <div className="modal__card-body">
          <div className="modal__card-description">
            <p className="modal__card-text">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <p className="modal__card-left">
              101 <span>left</span>
            </p>
          </div>

          {/* pledge */}
          <div className="modal__pledge" ref={refPledge}>
            <h4>Enter your pledge</h4>
            <div className="modal__pledge-buttons">
              <button className="modal__pledge-buttons-number">
                <span className="modal__pledge-dollar-sign">$</span>
                <span className="modal__pledge-dollar-price"> 25</span>
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
    </>
  );
};

export default ModalBamboo;
