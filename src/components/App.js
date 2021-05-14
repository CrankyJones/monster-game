import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';
import World from "./World";

function App() {
  return(
    <>
    <RecoilRoot>
      <World/>
    </RecoilRoot>
    </>
  );
}

export default App;