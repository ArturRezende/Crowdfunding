import React, { useState } from "react";
import { StyleMasterCraft } from "./style/StyleMasterCraft";
import { MainBtn } from "./style/MainBtn.js";

//images
import LogoMasterCraft from "./img/logo-mastercraft.svg";
import IconBookMarkCyan from "./img/icon-bookmark-cyan.svg";
import IconBookMarkGray from "./img/icon-bookmark-gray.svg";

const MasterCraft = (props) => {
  const [iconBookMark, setIconBookmark] = useState(IconBookMarkCyan);
  return (
    <StyleMasterCraft className="master-craft">
      <div className="master-craft__container">
        {/*Logo*/}
        <img
          className="master-craft__logo"
          src={LogoMasterCraft}
          alt="logo-mastercraft"
        />

        {/*Description*/}
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        {/*Buttons*/}
        <div className="master-craft__buttons">
          <MainBtn
            className="master-craft__backProject"
            background
            widthDefault
            heigthDefault
          >
            Back this project
          </MainBtn>

          {/*bookmark-area state*/}
          <div className="master-craft__bookmark-area">
            <span
              onMouseEnter={() => {
                setIconBookmark(IconBookMarkGray);
              }}
              onMouseLeave={() => {
                setIconBookmark(IconBookMarkCyan);
              }}
            ></span>
            <button className="master-craft__bookmark">
              <img src={iconBookMark} alt="Icon-book-mark" />
            </button>
          </div>

          {/*Icon Book Mark gray*/}
          <button className="master-craft__bookmark--gray">
            <img src={IconBookMarkGray} alt="icon-book-mark"></img>
          </button>
        </div>
      </div>
    </StyleMasterCraft>
  );
};

export default MasterCraft;
