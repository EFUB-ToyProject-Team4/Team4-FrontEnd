import React from "react";
import styled from "styled-components";

function Button({ text, onClick }) {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}

const ButtonStyle = styled.div`
  width: 5.5em;
  height: 2.2em;
  background-color: #1d9bf0;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 3em;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: 100ms ease-out;
  }
`;
export default Button;
