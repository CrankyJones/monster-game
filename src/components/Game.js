import React, { useEffect } from "react";
// import { atom, useRecoilState, useRecoilValue } from "recoil";
import World from "./World";
import Inputs from "./Inputs";

const Game = () => {
  return(
    <>
      <World/>
      <Inputs/>
    </>
  )
}

export default Game;