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
