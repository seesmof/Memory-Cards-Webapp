import React from "react";
import COLORS from "../colors";

const Card = ({ color }) => {
  return (
    <>
      <button
        className={`card ${isFlipped ? COLORS[color] : "bg-neutral-200"}`}
      ></button>
    </>
  );
};

export default Card;
