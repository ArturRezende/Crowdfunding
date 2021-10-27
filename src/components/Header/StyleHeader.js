import styled, { keyframes } from "styled-components";
import "../global-style.css";

const fadeIn = keyframes`
     0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const fadeOut = keyframes`
     0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

export const HeaderComponent = styled.header`
  position: relative;

  //heros
  img {
    width: 100%;
  }
  .header__heroDesktop {
    display: block;
  }
  .header__heroMobile {
    display: none;
  }

  //navigation menu
  .header__navigation {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px;

    .header__logo {
      position: relative;
      left: 120px;
      top: 30px;
    }

    .header__ul {
      position: absolute;
      right: 120px;
      top: 50px;
      display: flex;
      z-index: 97;

      li {
        a {
          font-weight: 500;
          color: #fff;
          cursor: pointer;

          &:hover {
            color: #ececf4;
          }
        }
      }

      li + li {
        margin-left: 20px;
      }
    }
  }

  //button
  .header__showMenu {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .header__heroDesktop {
      display: none;
    }

    .header__heroMobile {
      display: block;
    }

    .header__navigation {
      .header__logo {
        position: relative;
        left: 7px;
        top: 0;
      }

      .header__ul {
        display: none;
        background-color: #fff;
        width: 90%;
        border-radius: 6px;
        left: 50%;
        top: 90px;
        transform: translateX(-50%);

        li {
          padding: 24px;

          a {
            color: var(--black);
          }
        }

        li + li {
          border-top: 1px solid #ddd;
          margin-left: 0;
        }
      }

      //animations
      .fadeIn {
        animation-name: ${fadeIn};
        animation-duration: 1s;
        animation-fill-mode: both;
        flex-direction: column;
      }

      .fadeOut {
        animation-name: ${fadeOut};
        animation-duration: 1s;
        animation-fill-mode: both;
      }
    }

    .header__showMenu {
      display: block;
    }
  }
`;

(() => {
  window.onresize = () => {
    if (window.innerWidth > 601) {
      document.querySelector(".header__ul").style.display = "flex";
    }
  };
})();
