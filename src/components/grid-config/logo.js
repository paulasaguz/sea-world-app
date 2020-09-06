import React from "react";
import { css } from "@emotion/core";
import SeaWorldImage from "../../assets/seaworldadventure_logo.png";

const logoStyles = css`
  width: 160px;
  height: 80px;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  @media (max-width: 768px) {
    width: 80px;
    height: 40px;
  }
`;

function Logo() {
  return <img src={SeaWorldImage} alt="logo" css={logoStyles} />;
}

export default Logo;
