import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import Cell from "./cell";
import Counter from "./counter";
import { buildArray2D, islandsCounter, createClone } from "./utils";

const GridStyled = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  border: 1px solid var(--dark-blue);
  grid-gap: 1px;
  grid-template: repeat(${({ rows }) => rows}, 1fr) / repeat(
      ${({ columns }) => columns},
      1fr
    );
`;

/**
 * This component render the principal grid with the route columns and rows parameters
 * and build a grid based in a javascript matrix with their respective positions like a rows and columns
 * here the toggle logic is included, and change the of cell from Island to Water
 * @returns Component with the dinamical grid
 */
function Grid() {
  const { columns, rows } = useParams();
  const cols = parseInt(columns);
  const rws = parseInt(rows);

  const [grid, setGrid] = useState(buildArray2D(cols, rws));
  const [color, setColor] = useState(0);

  const setValue = (row, column) => {
    let gridClone = createClone(grid);
    gridClone[row][column] = "1";
    if (grid[row][column] === "1") {
      gridClone[row][column] = "0";
    }
    setGrid(gridClone);
  };

  const ramdomColor = () => {
    setColor(Math.round(Math.random() * (1 - 0) + 0));
  };

  const superClone = createClone(grid);
  const num = islandsCounter(superClone);

  return (
    <GridStyled columns={columns} rows={rows}>
      {grid.map((row, indexRow) => {
        return row.map((column, indexColumn) => {
          return (
            <Cell
              handleClick={() => {
                setValue(indexRow, indexColumn);
                ramdomColor();
              }}
              isAnIsland={column}
              column={indexColumn}
              row={indexRow}
              color={color}
            />
          );
        });
      })}
      <Counter num={num} />
    </GridStyled>
  );
}

export default Grid;
