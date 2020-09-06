import React from "react";
import styled from "@emotion/styled";

const CounterStyled = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: var(--light-blue);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid var(--dark-blue);
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }
`;

/**
 * This component render the number of Islands on top of the app.
 * @param {Number} props.num - This number is the Island counter.
 * @returns React component.
 */
function Counter({ num }) {
  return (
    <CounterStyled>
      <span>{num}</span>
    </CounterStyled>
  );
}

export default Counter;
