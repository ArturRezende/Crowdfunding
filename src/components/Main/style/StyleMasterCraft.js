import styled from "styled-components";
import "../../global-style.css";

export const StyleMasterCraft = styled.section`
  text-align: center;

  .master-craft__container {
    position: relative;
    top: -80px;
    margin: 0 auto;
    max-width: 670px;
    border: 1px solid #f4f4f4;
    background-color: #ffffff;
    border-radius: 7px;

    .master-craft__logo {
      position: relative;
      top: -32px;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      width: 100%;
    }

    p {
      color: var(--dark-gray);
      width: 100%;
      margin: 20px auto 0 auto;
      font-size: 1rem;
      line-height: 1.7;
      font-weight: 400;
    }

    .master-craft__buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 40px auto 40px auto;
      width: 94%;

      .master-craft__backProject {
        width: 190px;
        height: 50px;
      }
      .master-craft__bookmark-area {
        position: relative;
        background-color: #f4f8f9;
        border-radius: 40px;
        width: 200px;
        padding: 20px;
        display: block;

        span {
          color: var(--moderate-cyan);
          font-family: "Commissioner", sans-serif;
          font-weight: 700;
          margin-left: 45px;
          cursor: pointer;

          &::before {
            content: "Bookmarked";
          }

          &:hover {
            color: var(--dark-gray);

            &::before {
              content: " ";
            }
            &::after {
              content: "Bookmark";
            }
          }
        }
      }

      .master-craft__bookmark {
        position: absolute;
        top: 0;
        left: 0;
      }

      .master-craft__backProject {
        &:hover {
          background-color: var(--dark-cyan);
        }
      }

      .master-craft__bookmark--gray {
        display: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .master-craft__container {
      width: 85%;
      top: -50px;

      h2 {
        font-size: 18px;
        width: 80%;
        margin: 0 auto;
      }

      p {
        margin: 30px auto 0 auto;
        padding: 0 20px;
        font-size: 14px;
      }

      .master-craft__buttons {
        display: flex;
        margin: 30px 20px 40px 20px;

        .master-craft__bookmark {
          margin-left: 10px;
        }

        .master-craft__bookmark-area {
          display: none;
        }

        .master-craft__bookmark--gray {
          display: block;
          margin: 0 30px 0 0;
        }
      }
    }
  }
`;
