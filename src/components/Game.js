import React from "react";
import World from "./World";
import Inputs from "./Inputs";
import StartScreen from './StartScreen';

const Game = () => {
  return(
    <>
      <StartScreen/>
      <World/>
      <Inputs/>
    </>
  )
}

export default Game;