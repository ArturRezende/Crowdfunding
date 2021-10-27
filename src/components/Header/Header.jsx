import React, { useState } from "react";
import { HeaderComponent } from "./StyleHeader";

//images
import iconHamburger from "./img/icon-hamburger.svg";
import iconClose from "./img/icon-close-menu.svg";
import logo from "./img/logo.svg";
import heroMobile from "./img/image-hero-mobile.jpg";
import heroDesktop from "./img/image-hero-desktop.jpg";

const Header = (props) => {
  const [img, setImg] = useState(false);
  const [controlMenu, setControlMenu] = useState({
    fade: "fadeOut",
  });

  return (
    <HeaderComponent className="header">
      {/* Heros */}
      <img
        className="header__heroMobile"
        src={heroMobile}
        alt="crowdfundin-product-img-mobile"
      />
      <img
        className="header__heroDesktop"
        src={heroDesktop}
        alt="crowdfundin-product-img-mobile"
      />

      {/* navigation menu */}
      <nav className="header__navigation">
        <a href="index.html" className="header__logo">
          <img src={logo} alt="logo-crowdfundin" />
        </a>
        <button
          type="button"
          className="header__showMenu"
          onClick={() => {
            setImg(!img);
            if (controlMenu.fade === "fadeOut") {
              setControlMenu({ fade: "fadeIn" });
              document.querySelector(".header__ul").style.display = "block";
            } else {
              setControlMenu({ fade: "fadeOut" });
              setTimeout(() => {
                document.querySelector(".header__ul").style.display = "none";
              }, 1000);
            }
          }}
        >
          <img
            src={img ? iconClose : iconHamburger}
            alt="menu-hamburguer-img"
          />
        </button>

        <ul className={`header__ul ${controlMenu.fade}`}>
          <li>
            <a href=" #">About</a>
          </li>
          <li>
            <a href=" #">Discover</a>
          </li>
          <li>
            <a href=" #">Get Started</a>
          </li>
        </ul>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
