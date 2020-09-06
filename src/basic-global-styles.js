import { css } from "@emotion/core";

export const styles = css`
  :root {
    --blue: #42c8eb;
    --rose: #de0079;
    --orange: #f19417;
    --green: #3abc64;
    --dark-blue: #15487e;
  }
  body {
    margin: 0;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      300deg,
      #9fb8ad 0%,
      #1fc8db 51%,
      #2cb5e8 75%
    );
  }
  h1,
  h2,
  h3 {
    font-weight: 800px;
    color: white;
  }
`;
