import React, { useState } from "react";
import styled from "@emotion/styled";
import Cell from "./cell";
import { useParams } from "react-router-dom";

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

function buildArray2D(cols, rows) {
  const arr = new Array(rows).fill("0");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols).fill("0");
  }
  return arr;
}

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
