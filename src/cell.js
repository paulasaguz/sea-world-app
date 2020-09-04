import React from "react";
import useToggle from "./hooks/useToggle";
import styled from "@emotion/styled";

const CellStyled = styled.div`
  border: 1px solid var(--dark-blue);
  background-color: ${({ active }) => active && "var(--green)"};
  &:hover {
    border: 1px dashed white;
  }
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
