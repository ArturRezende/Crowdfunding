import styled from "styled-components";
import "../../global-style.css";

export const MainBtn = styled.button`
  background-color: ${(props) =>
    props.background ? "var(--moderate-cyan)" : "#cbcbcb"};
  width: ${(props) => (props.widthDefault ? "210px" : "155px")};
  height: ${(props) => (props.heigthDefault ? "55px" : "50px")};
  border-radius: 40px;
  color: #fff;
`;
