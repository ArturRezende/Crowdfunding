import React, { useState, useContext } from "react";

//style - container
import { StyleAboutArea } from "./style/StyleAboutArea";

//style - card
import { StyleAboutCard } from "./style/StyleAboutArea";

//style - global button
import { MainBtn } from "./style/MainBtn";

import { AppContext } from "../../data/Store";

const AboutArea = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { openModal } = useContext(AppContext);

  return (
    <>
      <StyleAboutArea className="abount-area">
        <div className="abount-area__container">
          <div className="abount-area__description">
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </div>
          <div className="about-area__cards">
            {/* Bamboo Stand */}
            <StyleAboutCard className="about-card">
              <div className="about-card__title">
                <h3>Bamboo Stand</h3>
                <h4>Pledge $25 or more</h4>
              </div>
              <div className="about-card__body">
                <p className="about-card__description">
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>
              </div>
              <div className="about-card__footer">
                <p className="about-card__left">
                  101 <span>left</span>
                </p>
                <MainBtn
                  background
                  className="about-card__button"
                  onClick={() => {
                    setShowModal(() => {
                      if (!showModal) {
                        openModal();
                      }
                    });
                  }}
                >
                  Select Reward
                </MainBtn>
              </div>
            </StyleAboutCard>

            {/* Black Edition Stand */}
            <StyleAboutCard className="about-card">
              <div className="about-card__title">
                <h3>Black Edition Stand</h3>
                <h4>Pledge $75 or more</h4>
              </div>
              <div className="about-card__body">
                <p className="about-card__description">
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
                </p>
              </div>
              <div className="about-card__footer">
                <p className="about-card__left">
                  64 <span>left</span>
                </p>

                <MainBtn
                  className="about-card__button"
                  background
                  onClick={() => {
                    setShowModal(() => {
                      if (!showModal) {
                        openModal();
                      }
                    });
                  }}
                >
                  Select Reward
                </MainBtn>
              </div>
            </StyleAboutCard>

            {/* Mahogany Special Edition */}
            <StyleAboutCard
              className="about-card about-mahogany"
              onClick={() => {
                setShowModal(() => {
                  if (!showModal) {
                    openModal();
                  }
                });
              }}
            >
              <div className="about-card__title">
                <h3 style={{ color: "#7d7d7d" }}>Mahogany Special Edition</h3>
                <h4 style={{ color: "#a5d4ce" }}>Pledge $200 or more</h4>
              </div>
              <div className="about-card__body">
                <p
                  className="about-card__description"
                  style={{ color: "#b9b9b9" }}
                >
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included.
                </p>
              </div>
              <div className="about-card__footer">
                <p className="about-card__left" style={{ color: "#818181" }}>
                  0 <span>left</span>
                </p>

                <MainBtn className="about-card__button-mahogany">
                  Out of Stock
                </MainBtn>
              </div>
            </StyleAboutCard>
          </div>
        </div>
      </StyleAboutArea>
    </>
  );
};

export default AboutArea;
