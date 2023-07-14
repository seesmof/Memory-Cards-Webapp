import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

const Start = () => {
  return (
    <>
      <div className="h-[60vh] w-full rounded-md bg-neutral-900/30 p-4 flex justify-center items-center">
        <div className="text-white text-2xl font-medium">
          Press <span className="text-green-400">Play</span> to start the game
        </div>
      </div>
    </>
  );
};

const Board = ({ isStarted }) => {
  return <>{isStarted ? <Cards /> : <Start />}</>;
};

export default Board;
