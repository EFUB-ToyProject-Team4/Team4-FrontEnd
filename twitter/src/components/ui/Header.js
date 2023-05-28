import React from "react";
import styled from "styled-components";

function Header({ text }) {
  return <HeaderLayout>{text}</HeaderLayout>;
}

const HeaderLayout = styled.div`
  color: white;
  background-color: #15202b;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #26323c;
  padding: 1em 1em;
  font-size: 1.5em;
  font-weight: 700;
`;
export default Header;
