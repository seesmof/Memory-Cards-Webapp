import React from "react";

const COLORS = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
};

const Card = ({ color }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <button
        className={`card ${isFlipped ? COLORS[color] : "bg-neutral-200"}`}
        onClick={handleFlip}
      ></button>
    </>
  );
};

const Board = () => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <Card color="green" />
        <Card color="red" />
        <Card color="yellow" />
        <Card color="purple" />
        <Card color="orange" />
        <Card color="blue" />
      </div>
    </>
  );
};

export default Board;
