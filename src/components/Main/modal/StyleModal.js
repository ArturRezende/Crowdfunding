import styled from "styled-components";
import "../../global-style.css";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh + 70%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: none;

  .modal__container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    padding: 30px 20px 30px 20px;
    background-color: #fff;
    border-radius: 7px;

    //modal - title
    .modal__title {
      div {
        display: flex;
        justify-content: space-between;

        button {
          background-color: transparent;
        }
      }
      p {
        margin: 30px 0 20px 0;
        color: var(--dark-gray);
        font-size: 16px;
      }
    }

    //modal - container
    .modal__card {
      border: 1px solid #d8d8d8;
      border-radius: 7px;
      margin-bottom: 15px;
      position: relative;

      .modal__card-title {
        display: flex;
        align-items: center;
        margin: 10px 0 20px 0;
        padding: 20px 0 20px 30px;

        div {
          display: flex;
          align-items: center;
          h3 {
            cursor: pointer;

            &:hover {
              color: var(--moderate-cyan);
            }
          }
        }

        .modal__card-choose {
          margin-right: 25px;
          width: 30px;
          height: 30px;
          border: 1px solid #d8d8d8;
          border-radius: 50%;
          color: transparent;
          cursor: default;

          .btn-check {
            background-color: var(--moderate-cyan);
            width: 15px;
            height: 15px;
            border-radius: 50%;
            display: inline-block;
            position: relative;
            top: 2px;
            left: -1px;
            display: none;
          }
        }

        h3 {
          font-size: 14px;
        }

        h4 {
          color: var(--moderate-cyan);
          margin-left: 20px;
        }
      }

      .modal__card-body {
        .modal__card-description {
          padding: 20px 0 20px 30px;

          p {
            color: var(--dark-gray);
            font-size: 16px;
            width: 97%;
            line-height: 1.8;
            padding-left: 50px;
            margin: -30px 0 15px 0;
          }

          .modal__card-text {
            width: 97%;
          }

          .modal__card-left {
            font-weight: 700;
            font-size: 1.6rem;
            color: var(--black);
            width: 150px;
            position: absolute;
            top: 50px;
            right: 20px;

            span {
              color: var(--dark-gray);
              font-weight: 400;
              font-size: 1.2rem;
              margin-left: 6px;
            }
          }
        }

        .modal__pledge {
          border-top: 1px solid #d8d8d8;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20px;
          display: none;

          h4 {
            color: var(--dark-gray);
            font-weight: 400;
            width: 100%;
          }

          .modal__pledge-buttons {
            display: flex;
            align-items: center;
            justify-content: end;
            width: 300px;
            padding-top: 10px;

            button + button {
              margin-left: 10px;
            }

            button {
              padding: 15px;
              border-radius: 20px;
            }

            .modal__pledge-buttons-number {
              border: 1px solid #d8d8d8;
              width: 100px;
              color: var(--black);
              cursor: default;

              .modal__pledge-dollar-sign {
                color: var(--dark-gray);
                margin-left: -17px;
              }

              .modal__pledge-dollar-price {
                color: var(--black);
                font-weight: 700;
                margin-left: 7px;
              }
            }

            .modal_button-continue {
              background-color: var(--moderate-cyan);
              width: 120px;

              &:hover {
                background-color: var(--dark-cyan);
              }

              span {
                color: #fff;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    height: calc(50vh + 65%);
  }

  @media screen and (min-width: 601px) and (max-width: 1023px) {
    height: calc(50vh + 73%);
    .modal__container {
      width: 85%;
    }
  }

  @media screen and (max-width: 600px) {
    height: calc(70vh + 85%);
    .modal__container {
      width: 85%;
      top: 50%;
      left: 50%;

      .modal__title {
        p {
          font-size: 13px;
        }
      }

      .modal__card {
        .modal__card-title {
          padding: 20px 0 20px 30px;

          div {
            flex-direction: column;
            align-items: flex-start;
          }

          .modal__card-choose {
            margin-right: 15px;
          }

          h4 {
            margin: 10px 0 0 0;
          }
        }

        .modal__card-body {
          .modal__card-description {
            p {
              padding-left: 0;
              font-size: 13px;
              width: 90%;
              margin-top: -30px;
            }
            .modal__card-text {
              width: 92%;
            }
            .modal__card-left {
              position: static;
              margin: 20px 0 -2px 0;
            }
          }

          .modal__pledge {
            flex-direction: column;
            align-items: flex-start;
            padding-bottom: 10px;
            overflow-x: hidden;

            h4 {
              margin: 10px 0 15px 0;
              text-align: center;
            }

            .modal__pledge-buttons {
              margin-bottom: 10px;
              display: block;
              width: 250px;
              margin-left: -2px;

              .modal_button-number {
                width: 100px;
              }
              .modal_button-continue {
                width: 120px;
              }
            }
          }
        }
      }
    }
  }
`;

export const ModalSuccess = styled.div`
  position: absolute;
  top: 0;
  height: calc(100vh * 3);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;

  .modal-success__container {
    position: fixed;
    top: 25%;
    left: 50%;
    width: 36%;
    transform: translate(-50%, -5%);
    padding: 30px 20px 30px 20px;
    background-color: #fff;
    border-radius: 7px;
    text-align: center;
    padding: 40px 0;

    img {
      margin-top: 10px;
    }

    h2 {
      margin: 25px 0 15px 0;
      font-weight: 700;
      font-size: 18px;
    }

    p {
      margin: 10px auto 25px auto;
      color: var(--dark-gray);
      width: 100%;
      font-size: 17px;
      padding: 0 20px;
    }

    button {
      padding: 15px;
      border-radius: 30px;
      background-color: var(--moderate-cyan);
      color: #fff;
      font-weight: 700;
      width: 110px;

      &:hover {
        background-color: var(--dark-cyan);
      }
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    .modal-success__container {
      width: 85%;
      top: 4%;
    }
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh * 4);

    .modal-success__container {
      width: 85%;
      padding: 30px 0;
      top: 40%;
      transform: translate(-50%, -30%);
      overflow-x: hidden;

      h2 {
        margin: 25px 0;
      }

      p {
        width: 90%;
        font-size: 14px;
      }
    }
  }
`;
