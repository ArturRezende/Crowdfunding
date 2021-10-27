import React from "react";
import "../global-style.css";

//contents-main
import MasterCraft from "./Mastercraft";
import PriceArea from "./PriceArea";
import AboutArea from "./AboutArea";
import Modal from "./modal/Modal";

const Main = (props) => {
  return (
    <main className="main container">
      <MasterCraft />
      <PriceArea />
      <AboutArea />
      <Modal />
    </main>
  );
};

export default Main;
