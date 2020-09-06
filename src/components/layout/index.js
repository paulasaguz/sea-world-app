import React from "react";
import styled from "@emotion/styled";

const LayoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
