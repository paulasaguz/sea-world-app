import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const MainStyled = styled.div`
  width: 85%;
`;

function Main() {
  return (
    <MainStyled>
      <p>Crea tu grid</p>
    </MainStyled>
  );
}

export default Main;
