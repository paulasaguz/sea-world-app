import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { setPokemonList } from "../../redux/actions";
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
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
/**
 * This component render the principal grid with the route columns and rows parameters
 * and build a grid based in a javascript matrix with their respective positions like a rows and columns
 * here the toggle logic is included, and change the of cell from Island to Water
 * @returns Component with the dinamical grid
 */
function Grid() {
  let query = useQuery();
  const dispatch = useDispatch();
  const pokeList = useSelector((state) => state.pokemonList);
  console.log("pokeList", pokeList);

  const cols = parseInt(query.get("columns"));
  const rws = parseInt(query.get("rows"));

  const [grid, setGrid] = useState(buildArray2D(cols, rws));

  const id = 25;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => {
        return response.json();
      })
      .then((pokemonList) => {
        dispatch(setPokemonList(pokemonList));
      })
      .catch(() => {
        console.log("hubo un error");
      });
  }, [dispatch]);

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
    <GridStyled columns={cols} rows={rws}>
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
    </GridStyled>
  );
}

export default Grid;
