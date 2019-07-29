import React from "react";
import styled from "styled-components";
import { MAX_WIDTHS } from "../../styling/globalValues";
import mqs from "../../styling/mqs";

const FlexiBlockWrapper = styled.section`
  background-color: ${props => props.backgroundColor};
  display: block;
  height: auto;
  margin: 0 auto;
  padding: 15px 0;
  width: 100%;
`;

const FlexiBlockInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: ${MAX_WIDTHS.MOBILE};
  overflow-x: hidden;
  padding: 10px 0;
  text-align: center;

  ${mqs.tablet`
    margin-top: 0;
    max-width: ${MAX_WIDTHS.TABLET};
    padding: 15px 0;
  `}

  ${mqs.desktop`
    max-width: ${MAX_WIDTHS.DESKTOP};
  `}
`;

// Use this responsive container to house content
// Sets out the grid and creates a responsive inner div
const FlexiContainer = ({ backgroundColor, className, children }) => {
  const blockBgColor = !backgroundColor ? "transparent" : backgroundColor;

  return (
    <FlexiBlockWrapper className={className} backgroundColor={blockBgColor}>
      <FlexiBlockInner>{children}</FlexiBlockInner>
    </FlexiBlockWrapper>
  );
};

export default FlexiContainer;
