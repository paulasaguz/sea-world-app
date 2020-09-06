import { buildArray2D, islandsCounter } from "../../grid/utils";

test("should build a matrix with dinamic rows and columns", () => {
  const rows = 2;
  const columns = 3;
  expect(buildArray2D(columns, rows)).toStrictEqual([
    ["0", "0", "0"],
    ["0", "0", "0"],
  ]);
});

test("should return 2 islands", () => {
  const grid = [
    ["0", "1", "1"],
    ["0", "0", "0"],
    ["0", "1", "1"],
  ];
  expect(islandsCounter(grid)).toStrictEqual(2);
});

test("should return 4 islands", () => {
  const grid = [
    ["1", "1", "1"],
    ["0", "0", "0"],
    ["0", "1", "1"],
    ["1", "0", "0"],
    ["0", "1", "1"],
  ];
  expect(islandsCounter(grid)).toStrictEqual(4);
});
