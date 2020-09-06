import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const activeStylesGreen = ({ active, color }) =>
  active === "1" &&
  css`
    background-color: var(--${color});
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
  ${activeStylesGreen}
`;

const ramdomColor = () => {
  return Math.round(Math.random() * (1 - 0) + 0);
};
const colors = ["green", "light-brown"];
/**
 * This component that represent each cell of the principal grid.
 * @param {String} props.isAnIsland - this value represent "0" or "1", and allows change to the active style.
 * @param {Number} props.column - represent the position of the current column.
 * @param {Number} props.row - represent the position of the current row.
 * @param {function} props.handleClick - toggle that change the state of the cell from Water to Island.
 * @returns Component that render each cell of the grid.
 */
function Cell({ isAnIsland, column, row, handleClick }) {
  const color = useMemo(() => colors[ramdomColor()], [isAnIsland]);
  // const color = colors[ramdomColor()];

  return (
    <CellStyled color={color} active={isAnIsland} onClick={handleClick}>
      <p>{isAnIsland}</p>
      <span data-testid="positions">
        [{row}][{column}]
      </span>
    </CellStyled>
  );
}

export default Cell;
