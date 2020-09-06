import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import Cell from "./cell";
import Counter from "./counter";
import { buildArray2D, islandsCounter, createClone } from "./utils";

const MainStyled = styled.div`
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
 *
 * @returns
 */
function Grid() {
  const { columns, rows } = useParams();
  const cols = parseInt(columns);
  const rws = parseInt(rows);

  const [grid, setGrid] = useState(buildArray2D(cols, rws));

  const setValue = (row, column) => {
    let gridClone = createClone(grid);
    gridClone[row][column] = "1";
    if (grid[row][column] === "1") {
      gridClone[row][column] = "0";
    }
    setGrid(gridClone);
  };

  const superClone = createClone(grid);
  const num = islandsCounter(superClone);

  return (
    <MainStyled columns={columns} rows={rows}>
      {grid.map((row, indexRow) => {
        return row.map((column, indexColumn) => {
          return (
            <Cell
              handleClick={() => setValue(indexRow, indexColumn)}
              isAnIsland={column}
              column={indexColumn}
              row={indexRow}
            />
          );
        });
      })}
      <Counter num={num} />
    </MainStyled>
  );
}

export default Grid;
