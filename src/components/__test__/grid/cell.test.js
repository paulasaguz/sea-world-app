import React from "react";
import Cell from "../../grid/cell";
import { render } from "@testing-library/react";

describe("Cell component", () => {
  it("should render the cell state and the position of rows and columns", () => {
    const handleClick = jest.fn();
    const component = (
      <Cell isAnIsland={"0"} column={"0"} row={"1"} handleClick={handleClick} />
    );
    const { getByText, getByTestId } = render(component);
    expect(getByText("0")).toBeInTheDocument();
    expect(getByTestId("positions")).toBeInTheDocument();
  });
});
