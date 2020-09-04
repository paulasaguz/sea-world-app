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

function Main() {
  const { columns, rows } = useParams();
  console.log(columns, rows);
  const cells = columns * rows;
  return (
    <MainStyled columns={columns} rows={rows}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </MainStyled>
  );
}

export default Main;
