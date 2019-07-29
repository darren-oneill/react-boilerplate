import { css } from "styled-components";
import { BREAK_POINTS } from "./globalValues";

// Create media queries unsing Styled Components
const mqs = Object.keys(BREAK_POINTS).reduce((accumulator, label) => {
  const lowercaseLabel = label.toLowerCase();
  console.log(label);
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = BREAK_POINTS[label] / 16;
  console.log(emSize);
  accumulator[lowercaseLabel] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  console.log(accumulator);
  return accumulator;
}, {});

export default mqs;
