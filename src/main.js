import React from "react";
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
  const arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

console.log("a", buildArray2D(3, 5));

function Main() {
  const { columns, rows } = useParams();
  const cols = parseInt(columns);
  const rws = parseInt(rows);
  console.log(columns, rows);
  const cells = columns * rows;

  const grid = buildArray2D(columns, rows);

  return (
    <MainStyled columns={columns} rows={rows}>
      {Array.from(new Array(cols), (_, x) =>
        Array.from(new Array(rws), (_, y) => Cell(x, y))
      )}
    </MainStyled>
  );
}

export default Main;
