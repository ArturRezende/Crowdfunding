import React, { useState } from "react";

import IconCloseModal from "../img/icon-close-modal.svg";
import IconCheck from "../img/icon-check.svg";

import { ModalContainer } from "./StyleModal";
import { ModalSuccess } from "./StyleModal";

const Modal = (props) => {
  const [closeModal, setCloseMenu] = useState(false);
  const [bamboo, setBamboo] = useState(false);
  const [blackEdition, setBlackEdition] = useState(false);
  const [mahogany, setMahogany] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  return (
    <>
      <ModalContainer className="modal">
        <div className="modal__container">
          {/* Title*/}
          <div className="modal__title">
            <div>
              <h2>Back this project</h2>
              <button
                onClick={() => {
                  setCloseMenu(() => {
                    if (!closeModal) {
                      document
                        .querySelector(".modal")
                        .classList.remove("fadeInModal");
                      document
                        .querySelector(".modal")
                        .classList.add("fadeOutModal");

                      setTimeout(() => {
                        document.querySelector(".modal").style.display = "none";
                      }, 999);
                    }
                  });
                }}
              >
                <img src={IconCloseModal} alt="icon-close-modal" />
              </button>
            </div>

            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </div>

          {/* Pledge with no reward */}
          <div className="modal__card">
            <div className="modal__card-title">
              <button className="modal__card-choose">
                .<span className="btn-check">.</span>
              </button>
              <h3>Pledge with no reward</h3>
            </div>
            <div className="modal__card-body">
              <div className="modal__card-description">
                <p className="modal__pledge-text">
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
            </div>
          </div>

          {/* Bambbo Stand */}
          <div
            className="modal__card modal__card-bamboo"
            onMouseLeave={() => {
              if (bamboo === true) {
                document.querySelector(".modal__card-bamboo").style.border =
                  "1px solid #d8d8d8";
                document.querySelector(".btn__check-bamboo").style.display =
                  "none";
                document.querySelector(".pledge-bamboo").style.display = "none";
                setBamboo(false);
              }
            }}
            aria-hidden="true"
          >
            <div className="modal__card-title">
              <button className="modal__card-choose">
                .<span className="btn-check btn__check-bamboo">.</span>
              </button>

              <div>
                <h3
                  onClick={() => {
                    if (bamboo === false) {
                      document.querySelector(
                        ".modal__card-bamboo"
                      ).style.border = "1px solid hsl(176, 50%, 47%)";
                      document.querySelector(
                        ".btn__check-bamboo"
                      ).style.display = "inline-block";
                      document.querySelector(".pledge-bamboo").style.display =
                        "flex";
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
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>
                <p className="modal__card-left">
                  101 <span>left</span>
                </p>
              </div>

              {/* pledge */}
              <div className="modal__pledge pledge-bamboo">
                <h4>Enter your pledge</h4>
                <div className="modal__pledge-buttons">
                  <button className="modal__pledge-buttons-number">
                    <span className="modal__pledge-dollar-sign">$</span>
                    <span className="modal__pledge-dollar-price"> 25</span>
                  </button>
                  <button
                    className="modal_button-continue"
                    onClick={() => {
                      if (modalSuccess === false) {
                        document
                          .querySelector(".modal-success")
                          .classList.remove("fadeOutModal");
                        document
                          .querySelector(".modal-success")
                          .classList.add("fadeInModal");
                        document.querySelector(".modal-success").style.display =
                          "block";
                        document.querySelector(".modal").style.display = "none";
                        setModalSuccess(true);
                      }
                    }}
                  >
                    <span>Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Black Edition Stan */}
          <div
            className="modal__card modal__card-black-edition"
            onMouseLeave={() => {
              if (blackEdition === true) {
                document.querySelector(
                  ".modal__card-black-edition"
                ).style.border = "1px solid #d8d8d8";
                document.querySelector(
                  ".btn-check-black-edition"
                ).style.display = "none";
                document.querySelector(".pledge-black-edition").style.display =
                  "none";
                setBlackEdition(false);
              }
            }}
            aria-hidden="true"
          >
            <div className="modal__card-title">
              <button className="modal__card-choose">
                .<span className="btn-check btn-check-black-edition">.</span>
              </button>
              <div>
                <h3
                  onClick={() => {
                    if (blackEdition === false) {
                      document.querySelector(
                        ".modal__card-black-edition"
                      ).style.border = "1px solid hsl(176, 50%, 47%)";
                      document.querySelector(
                        ".btn-check-black-edition"
                      ).style.display = "inline-block";
                      document.querySelector(
                        ".pledge-black-edition"
                      ).style.display = "flex";
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
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
                </p>
                <p className="modal__card-left">
                  64 <span>left</span>
                </p>
              </div>
              {/* pledge */}
              <div className="modal__pledge pledge-black-edition">
                <h4>Enter your pledge</h4>
                <div className="modal__pledge-buttons">
                  <button className="modal__pledge-buttons-number">
                    <span className="modal__pledge-dollar-sign">$</span>
                    <span className="modal__pledge-dollar-price"> 75</span>
                  </button>
                  <button
                    className="modal_button-continue"
                    onClick={() => {
                      if (modalSuccess === false) {
                        document
                          .querySelector(".modal-success")
                          .classList.remove("fadeOutModal");
                        document
                          .querySelector(".modal-success")
                          .classList.add("fadeInModal");
                        document.querySelector(".modal-success").style.display =
                          "block";
                        document.querySelector(".modal").style.display = "none";
                        setModalSuccess(true);
                      }
                    }}
                  >
                    <span>Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mahogany Special Edition*/}
          <div
            className="modal__card modal__card-mahogany"
            onMouseLeave={() => {
              if (mahogany === true) {
                document.querySelector(".modal__card-mahogany").style.border =
                  "1px solid #d8d8d8";
                document.querySelector(".btn-check-mahogany").style.display =
                  "none";
                document.querySelector(".pledge-mahogany").style.display =
                  "none";
                setMahogany(false);
              }
            }}
            aria-hidden="true"
          >
            <div className="modal__card-title">
              <button className="modal__card-choose">
                .<span className="btn-check btn-check-mahogany">.</span>
              </button>
              <div>
                <h3
                  style={{ color: "#7d7d7d" }}
                  onClick={() => {
                    if (mahogany === false) {
                      document.querySelector(
                        ".modal__card-mahogany"
                      ).style.border = "1px solid hsl(176, 50%, 47%)";
                      document.querySelector(
                        ".btn-check-mahogany"
                      ).style.display = "inline-block";
                      document.querySelector(".pledge-mahogany").style.display =
                        "flex";
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
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included.
                </p>
                <p className="modal__card-left" style={{ color: "#818181" }}>
                  0 <span>left</span>
                </p>
              </div>
              {/* pledge */}
              <div className="modal__pledge pledge-mahogany">
                <h4>Enter your pledge</h4>
                <div className="modal__pledge-buttons">
                  <button className="modal__pledge-buttons-number">
                    <span className="modal__pledge-dollar-sign">$</span>
                    <span className="modal__pledge-dollar-price"> 200</span>
                  </button>
                  <button
                    className="modal_button-continue"
                    onClick={() => {
                      if (modalSuccess === false) {
                        document
                          .querySelector(".modal-success")
                          .classList.remove("fadeOutModal");
                        document
                          .querySelector(".modal-success")
                          .classList.add("fadeInModal");
                        document.querySelector(".modal-success").style.display =
                          "block";
                        document.querySelector(".modal").style.display = "none";
                        setModalSuccess(true);
                      }
                    }}
                  >
                    <span>Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
      {/* Modal - Success */}
      <ModalSuccess className="modal-success">
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
              if (modalSuccess === true) {
                document
                  .querySelector(".modal-success")
                  .classList.remove("fadeInModal");
                document
                  .querySelector(".modal-success")
                  .classList.add("fadeOutModal");
                setTimeout(() => {
                  document.querySelector(".modal-success").style.display =
                    "none";
                }, 1000);

                setModalSuccess(false);
              }
            }}
          >
            Got it!
          </button>
        </div>
      </ModalSuccess>
    </>
  );
};

export default Modal;
