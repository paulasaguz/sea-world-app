import React, { useState } from "react";
import styled from "@emotion/styled";

const SettingsStyled = styled.div`
  background-color: black;
  height: 100vh;
  width: 15%;
  color: white;
  padding: 0 20px;
  h2 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 40px;
      padding: 2px 10px;
      border-radius: 8px;
      border: 1px solid var(--blue);
      outline: none;
      margin-bottom: 15px;
    }
    label {
      margin-left: 10px;
    }
  }
  button {
    border: none;
    cursor: pointer;
    margin: 20px 0;
    padding: 12px;
    border-radius: 25px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: white;
    background: linear-gradient(to right, var(--rose), var(--orange));
  }
`;

function Settings() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  const submit = (event) => {
    event.preventDefault();
    return console.log("values", rows, columns);
  };
  return (
    <SettingsStyled>
      <h2>Grid controls</h2>
      <form onSubmit={submit}>
        <label>Rows</label>
        <input
          onChange={(e) => setRows(e.target.value)}
          placeholder="rows"
          type="text"
        />
        <label>Columns</label>
        <input
          onChange={(e) => setColumns(e.target.value)}
          placeholder="Colums"
          type="text"
        />
        <button>Crear</button>
      </form>
    </SettingsStyled>
  );
}

export default Settings;
