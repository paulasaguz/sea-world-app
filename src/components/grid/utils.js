/**
 * This function create de matrix(2D Array) with the dinamic columns and rows
 * and fill the initial values with zero.
 * with the parameters cols=3 and rows=2
 * returns arr = [['0', '0', '0'], ['0', '0', '0']]
 * @param {Number} column - represent the number of columns that the grid needs.
 * @param {Number} row - represent the number of columns that the grid needs.
 * @returns The matrix with the dinamical number of columns and rows for example
 */
export function buildArray2D(cols, rows) {
  const arr = new Array(rows).fill("0");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols).fill("0");
  }
  return arr;
}

export function islandsCounter(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        searcher(grid, i, j);
        count++;
      }
    }
  }
  return count;
}

function searcher(grid, x, y) {
  const row = grid.length,
    col = grid[x].length;
  if (grid[x][y] === "0") return false;
  grid[x][y] = "0";
  if (x !== 0) searcher(grid, x - 1, y);
  if (x !== row - 1) searcher(grid, x + 1, y);
  if (y !== 0) searcher(grid, x, y - 1);
  if (y !== col - 1) searcher(grid, x, y + 1);
}

export function createClone(grid) {
  return JSON.parse(JSON.stringify(grid));
}
