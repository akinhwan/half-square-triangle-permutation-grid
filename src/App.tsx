import { useState } from "react";
import "./App.css";
import PermutationGrid from "./PermutationGrid";

function App() {
  return (
    <>
      <PermutationGrid gridsPerRow={25} />
    </>
  );
}

export default App;
