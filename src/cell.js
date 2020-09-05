import React from "react";
import useToggle from "./hooks/useToggle";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const activeStyles = ({ active }) =>
  active &&
  css`
    background-color: var(--green);
    &:hover {
      border: 1px dashed brown;
    }
  `;

const CellStyled = styled.div`
  border: 1px solid var(--dark-blue);
  &:hover {
    border: 1px dashed white;
  }
  ${activeStyles}
`;

function Cell() {
  const [active, setActive] = useToggle(false);

  return (
    <CellStyled active={active} onClick={setActive}>
      Paula
    </CellStyled>
  );
}

export default Cell;
