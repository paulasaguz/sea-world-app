import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import ButtonStyled from "../../ui-components/button";
import InputStyled from "../../ui-components/input";
import HelpText from "./help-text";
import Logo from "./logo";
import Wrapper from "../../ui-components/wrapper";

const GridConfigFormStyled = styled.div`
  color: white;
  height: 100vh;
  position: relative;
  background-color: var(--black);
  .settings-title {
    margin: 30px 0 40px;
    color: var(--blue);
  }
  .settings-form {
    display: flex;
    flex-direction: column;
    label {
      margin-left: 10px;
    }
  }
  @media (max-width: 768px) {
    .settings-title {
      margin: 10px 0;
    }
  }
`;

/**
 * Render the configuration form in the GridConfigForm with help icons,
 * receives the numerical value of rows and columns to build the main grid,
 * and send these values to the grid route.
 * @returns React component
 */
function GridConfigForm() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    history.push(`/grid?columns=${columns}&rows=${rows}`);
  };
  return (
    <GridConfigFormStyled>
      <Wrapper>
        <Logo />
        <h2 className="settings-title">
          Grid controls{" "}
          <HelpText text="Aqui podras configurar los valores de tu grid, o cambiando el value en la ruta /grid/columns/rows" />
        </h2>
        <form className="settings-form" onSubmit={submit}>
          <label>
            Rows
            <HelpText text="Digita el numero de filas" />
          </label>
          <InputStyled
            onChange={(e) => setRows(e.target.value)}
            placeholder="rows"
            type="number"
          />
          <label>
            Columns
            <HelpText text="Digita el numero de columnas" />
          </label>
          <InputStyled
            onChange={(e) => setColumns(e.target.value)}
            placeholder="Columns"
            type="number"
          />
          <ButtonStyled>Create</ButtonStyled>
        </form>
      </Wrapper>
    </GridConfigFormStyled>
  );
}

export default GridConfigForm;
