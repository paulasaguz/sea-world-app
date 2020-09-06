import { css } from "@emotion/core";

export const styles = css`
  :root {
    --blue: #42c8eb;
    --rose: #de0079;
    --orange: #f19417;
    --green: #3abc64;
    --dark-blue: #15487e;
    --light-blue: #e1e9f1;
    --white: #ffffff;
    --brown: #844204;
    --light-brown: #ad7759;
    --black: rgba(0, 0, 0, 0.8);
  }
  body {
    margin: 0;
    height: 100vh;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      300deg,
      #9fb8ad 0%,
      #1fc8db 51%,
      #2cb5e8 75%
    );
  }
  p {
    margin: 0;
  }
  h1,
  h2 {
    font-weight: 800px;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 22px;
    text-align: center;
  }
`;
