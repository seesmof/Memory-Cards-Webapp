import React, { useState } from "react";
import Board from "./components/Board";
import Results from "./components/Results";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isWon, setIsWon] = useState(false);

  return (
    <>
      <div className="bg-offwhite min-h-screen w-full">
        <main className="flex w-full mx-auto max-w-4xl p-4 flex-col">
          <Results
            isStarted={isStarted}
            setIsStarted={setIsStarted}
            isWon={isWon}
          />
          <Board isStarted={isStarted} />
        </main>
      </div>
    </>
  );
}

export default App;
