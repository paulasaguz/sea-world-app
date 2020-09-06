import React from "react";
import styled from "@emotion/styled";

const LayoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * Container with the principal distrubution of the components in the layout.
 * @returns Display style to the components inside of this component.
 */
function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
