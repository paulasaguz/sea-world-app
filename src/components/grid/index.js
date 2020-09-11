import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import { setPokemonList, setTransactions } from "../../redux/actions";
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
  const lastestBlockState = useSelector((state) => state.latestBlock);
  // const hash = lastestBlockState.hash;
  const transactionsList = useSelector((state) => state.transactions);

  const hash = lastestBlockState.hash;
  const cols = parseInt(query.get("columns"));
  const rws = parseInt(query.get("rows"));

  const [grid, setGrid] = useState(buildArray2D(cols, rws));

  useEffect(() => {
    fetch(`https://blockchain.info/latestblock?cors=true`)
      .then((response) => {
        return response.json();
      })
      .then((LatestBlock) => {
        dispatch(setPokemonList(LatestBlock));
      })
      .catch((error) => {
        console.log("hubo un error", error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (hash) {
      fetch(`https://blockchain.info/rawblock/${hash}?cors=true`)
        .then((response) => {
          return response.json();
        })
        .then((transactions) => {
          console.log("tr", transactions);
          dispatch(setTransactions(transactions));
        })
        .catch((error) => {
          console.log("hubo un error en transactions", error);
        });
    }
  }, [hash]);

  const transactionsGrid = transactionsList && transactionsList;
  const newHash = [...transactionsList];
  console.log(transactionsGrid);

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

  if (!transactionsGrid.length) {
    return <p>Estoy Cargando...</p>;
  }
  return (
    <GridStyled columns={cols} rows={rws}>
      {transactionsGrid &&
        transactionsGrid.slice(0, 4).map((row, indexRow) => {
          console.log("row", row);
          return [...row.hash].slice(0, 19).map((column, indexColumn) => {
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
