/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from "styled-components";
import Roboto from "../assets/fonts/Roboto-Regular.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }

  h1, h2, h3, h4, h5, nav, span, div, p, input {
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-size: 3rem;
  }

  div, header, section, main {
    box-sizing: border-box;
    height: auto;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }

  html,
  body {
    background-color: #2B2B2B;
    height: auto;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    width: auto;
  }

  html {
    overflow-x: hidden;
    overflow-y: auto;
  }

`;
