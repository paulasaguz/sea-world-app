import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as HelpIcon } from "../../assets/icons/help-icon.svg";

const HelpTextStyled = styled.span`
  position: relative;
  .help-icon {
    fill: var(--white);
    margin-left: 5px;
    path {
      fill: white;
    }
  }
  .text-area {
    background: var(--light-blue);
    color: ${({ color }) => (color ? `var(--${color})` : "var(--dark-blue)")};
    border-radius: 8px;
    min-width: 150px;
    text-transform: lowercase;
    padding: 5px;
    font-weight: 500;
    position: absolute;
    top: -22px;
    right: 10px;
    z-index: 2;
    font-size: 10px;
    display: none;
  }
  &:hover {
    .text-area {
      display: block;
    }
  }
`;

/**
 * Render a help text information to the user on hover
 * @param {String} props.text - this is the information text.
 * @param {String} props.color - this is the name of the color var.
 * @returns React component
 */
function HelpText({ text, color }) {
  return (
    <HelpTextStyled color={color}>
      <HelpIcon className="help-icon" />
      <span className="text-area">
        <p>{text}</p>
      </span>
    </HelpTextStyled>
  );
}

export default HelpText;
