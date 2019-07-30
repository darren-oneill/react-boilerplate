import React from "react";
import { Zap } from "../assets/images/icons";
import FlexiContainer from "../components/FlexiContainer";

const Home = () => (
  <FlexiContainer>
    <div>{Zap(40, 40, "#FFDE03")}</div>
    <h1>React Boilerplate</h1>
  </FlexiContainer>
);

export default Home;
