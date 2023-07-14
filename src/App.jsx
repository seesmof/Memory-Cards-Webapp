import React from "react";
import Board from "./components/Board";
import Results from "./components/Results";

function App() {
  return (
    <>
      <div className="min-h-screen bg-offwhite w-full">
        <main className="flex w-full mx-auto max-w-4xl p-4 flex-col">
          <Results />
          <Board />
        </main>
      </div>
    </>
  );
}

export default App;
