import { css, Global } from "@emotion/react";

export const media = {
  maxMobile: "@media(max-width:600px)",
  minlaptop: "@media(min-width:800px)",
  large: "@media(min-width:1200px)",
};

export const globalStyles = (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        background-color: #f5f5f5;
      }
    `}
  />
);
