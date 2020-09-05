import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const activeStyles = ({ active }) =>
  active === "1" &&
  css`
    background-color: var(--green);
    &:hover {
      border: 1px dashed brown;
    }
  `;

const CellStyled = styled.div`
  border: 1px solid var(--dark-blue);
  &:hover {
    border: 1px dashed white;
  }
  ${activeStyles}
`;

function Cell({ isAnIsland, column, row, handleClick }) {
  return (
    <CellStyled active={isAnIsland} onClick={handleClick}>
      <p>{isAnIsland}</p>[{row}][{column}]
    </CellStyled>
  );
}

export default Cell;
