import styled from "styled-components";
import "../../global-style.css";

export const StyleAboutArea = styled.section`
  .abount-area__container {
    margin: 20px auto;
    max-width: 670px;
    border: 1px solid #f4f4f4;
    background-color: #ffffff;
    border-radius: 7px;
    padding: 30px 25px 20px 25px;

    .abount-area__description {
      h2 {
        margin: 10px 0 30px 0;
        font-weight: 700;
      }

      p {
        margin-bottom: 30px;
        color: var(--dark-gray);
        font-weight: 400;
        font-size: 15px;
        width: 96%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .abount-area__container {
      width: 85%;

      .abount-area__description {
        p {
          font-size: 12px;
          width: 94%;
        }
      }
    }
  }
`;

export const StyleAboutCard = styled.div`
  border: 1px solid #d8d8d8;
  padding: 20px;
  border-radius: 7px;
  margin-bottom: 15px;

  .about-card__title {
    display: flex;
    justify-content: space-between;
    margin-right: 15px;

    h3 {
      font-weight: 700;
      font-size: 1.2rem;
    }

    h4 {
      color: var(--moderate-cyan);
      font-size: 14px;
    }
  }

  .about-card__body {
    .about-card__description {
      margin: 25px 0;
      color: var(--dark-gray);
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      line-height: 1.8;
    }
  }

  .about-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    .about-card__left {
      font-weight: 700;
      font-size: 1.6rem;

      span {
        color: var(--dark-gray);
        font-weight: 400;
        font-size: 1.2rem;
      }
    }

    .about-card__button {
      /* background-color: var(--moderate-cyan);
      width: 210px;
      height: 55px;
      border-radius: 40px;
      color: #fff; */

      &:hover {
        background-color: var(--dark-cyan);
      }
    }
  }

  //about mahogany button
  .about-mahogany {
    .about-card__button-mahogany {
      &:hover {
        background-color: none !important;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .about-card__title {
      flex-direction: column;

      h3 {
        margin-bottom: 7px;
        font-size: 14px;
      }
    }

    .about-card__body {
      .about-card__description {
        font-size: 12px;
        width: 93%;
        line-height: 1.5;
      }
    }

    .about-card__footer {
      flex-direction: column;
      align-items: flex-start;

      .about-card__left {
        margin-bottom: 25px;
      }
    }
  }
`;
