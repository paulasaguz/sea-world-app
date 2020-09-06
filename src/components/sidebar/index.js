import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ButtonStyled from "../../ui-components/button";
import InputStyled from "../../ui-components/input";
import { ReactComponent as HelpIcon } from "../../assets/icons/help-icon.svg";

const SidebarStyled = styled.div`
  background-color: black;
  height: 100vh;
  width: 15%;
  color: white;
  padding: 0 20px;
  .settings-title {
    text-align: center;
  }
  .settings-form {
    display: flex;
    flex-direction: column;
    label {
      margin-left: 10px;
    }
  }
`;

/**
 * Render the configuration form in the sidebar with help icons,
 * receives the numerical value of rows and columns to build the main grid,
 * and send these values to the grid route.
 * @returns React component
 */
function Sidebar() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();
    history.push(`/grid/${columns}/${rows}`);
  };
  return (
    <SidebarStyled>
      <h2 className="settings-title">
        Grid controls
        <span>
          <HelpIcon />
        </span>
      </h2>
      <form className="settings-form" onSubmit={submit}>
        <label>
          Rows
          <HelpIcon />
        </label>
        <InputStyled
          onChange={(e) => setRows(e.target.value)}
          placeholder="rows"
          type="text"
        />
        <label>
          Columns
          <HelpIcon />
        </label>
        <InputStyled
          onChange={(e) => setColumns(e.target.value)}
          placeholder="Columns"
          type="text"
        />
        <ButtonStyled>Crear</ButtonStyled>
      </form>
    </SidebarStyled>
  );
}

export default Sidebar;
