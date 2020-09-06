import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const activeStyles = ({ active }) =>
  active === "1" &&
  css`
    background-color: var(--green);
    &:hover {
      border: 2px dashed var(--brown);
    }
  `;

const CellStyled = styled.div`
  border: 1px solid var(--dark-blue);
  color: var(--dark-blue);
  &:hover {
    border: 1px dashed var(--white);
  }
  ${activeStyles}
`;

/**
 * This component that represent each cell of the principal grid.
 * @param {String} props.isAnIsland - this value represent "0" or "1", and allows change to the active style.
 * @param {Number} props.column - represent the position of the current column.
 * @param {Number} props.row - represent the position of the current row.
 * @param {function} props.handleClick - toggle that change the state of the cell from Water to Island.
 * @returns Component that render each cell of the grid.
 */
function Cell({ isAnIsland, column, row, handleClick }) {
  return (
    <CellStyled active={isAnIsland} onClick={handleClick}>
      <p>{isAnIsland}</p>[{row}][{column}]
    </CellStyled>
  );
}

export default Cell;
