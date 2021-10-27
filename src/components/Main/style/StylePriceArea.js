import styled from "styled-components";
import "../../global-style.css";

export const StylePriceArea = styled.section`
  .price-area__container {
    margin: -60px auto 0 auto;
    max-width: 670px;
    border: 1px solid #f4f4f4;
    background-color: #ffffff;
    border-radius: 7px;
    padding: 20px;
    text-align: center;

    .price-area__content {
      display: flex;

      .price-area__box {
        margin: 20px 0;
        border-right: 1px solid #cbcbcb;

        &:last-child {
          border-right: 0;
        }

        h2 {
          font-weight: 700;
          font-size: 2rem;
        }

        p {
          margin-top: 7px;
          color: var(--dark-gray);
          font-weight: 400;
          font-size: 15px;
        }
      }

      .box-first {
        padding: 0 50px 0 20px;
        text-align: left;
      }

      .box-second {
        text-align: left;
        padding: 0 90px 0 50px;
      }

      .box-third {
        text-align: left;
        padding-left: 30px;
      }
    }

    .price-area__progress-bar {
      &::before {
        content: ".";
        color: #f4f4f4;
      }

      background-color: #f4f4f4;
      border-radius: 20px;
      margin: 30px 10px;
      text-align: left;

      span {
        &::before {
          content: ".";
          color: var(--moderate-cyan);
        }
        display: inline-block;
        background-color: var(--moderate-cyan);
        border-radius: 20px;
        margin-right: auto;
        width: 75%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .price-area__container {
      margin: -20px auto 0 auto;
      max-width: 85%;

      .price-area__content {
        flex-direction: column;

        .box-first,
        .box-second,
        .box-third {
          padding: 0;
          text-align: center;
        }

        .price-area__box {
          border-right: 0;
          padding-right: 0;
          span {
            &::before {
              content: " .";
              color: #fff;
            }
            border-bottom: 1px solid var(--dark-gray);
            display: inline-block;
            width: 90px;
            margin: 10px 0;
          }
        }
      }

      .price-area__progress-bar {
        margin: 20px 0;
      }
    }
  }
`;
