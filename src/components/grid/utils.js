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

/**
 * This function represent the algoritm for find the number of Islands
 * in this part is finding the cells with a 1 value
 * after this use recursion to find which number is in the nearby positions
 * @param {Array} grid - represent the current matrix of the sea world.
 * @returns The number of Islands
 */
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

/**
 * this use recursion to find which number is in the nearby positions
 * top, right, left and bottom
 * @param {Array} grid - represent the current matrix of the sea world.
 * @param {Array} x - represent the position i or X value.
 * @param {Array} y - represent the position j or Y value.
 * @returns The number of Islands
 */
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

/**
 * This util create a clon or copy 2D arrays
 * @param {Array} grid - represent the current matrix of the sea world.
 * @returns A new matrix with the same values
 */
export function createClone(grid) {
  return JSON.parse(JSON.stringify(grid));
}
