import React from "react";

const COLORS = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
};

const Board = () => {
  const [gameBoard, setGameBoard] = React.useState([]);
  const [clicks, setClicks] = React.useState(0);
  const [matched, setMatched] = React.useState(0);
  const [won, setWon] = React.useState(false);

  const Card = ({ color }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
      setClicks(clicks + 1);
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

  const generateBoard = () => {
    const colors = Object.keys(COLORS);
    const board = [];

    for (let i = 0; i < colors.length / 2; i++) {
      board.push(colors[i]);
      board.push(colors[i]);
    }

    // Shuffle the board array
    for (let i = board.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [board[i], board[j]] = [board[j], board[i]];
    }

    setGameBoard(board);
    console.log(board);
  };

  React.useEffect(() => {
    generateBoard();
  }, []);

  React.useEffect(() => {}, [clicks]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gameBoard.map((color, index) => {
          return <Card key={index} color={color} />;
        })}
      </div>
    </>
  );
};

export default Board;
