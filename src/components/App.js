import React from "react";
import { RecoilRoot} from 'recoil';
import Game from "./Game";

function App() {
  return(
    <>
    <RecoilRoot>
      <Game/>
    </RecoilRoot>
    </>
  );
}

export default App;