import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import Cell from "./cell";
import { buildArray2D } from "./utils";

const MainStyled = styled.div`
  width: 85%;
  display: grid;
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
function Main() {
  const { columns, rows } = useParams();
  const cols = parseInt(columns);
  const rws = parseInt(rows);

  const [grid, setGrid] = useState(buildArray2D(cols, rws));

  const setValue = (row, column) => {
    let grid2 = [...grid];
    grid2[row][column] = "1";
    setGrid(grid2);
  };

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
    </MainStyled>
  );
}

export default Main;
