import React from "react";
import "./puzzleBox.css";
const PuzzleBox = ({ game, number, date, clue, letter, taunt, children }) => {
  return (
    <div className="puzzle-box">
      {children}
      {game === "Mini" && (
        <>
          <img
            src="/files/mini.png"
            alt="nyt game"
            style={{ width: "50px", height: "auto" }}
          ></img>
        </>
      )}
      {game === "Crossword" && (
        <>
          <img
            src="/files/crossword.png"
            alt="nyt game"
            style={{ width: "50px", height: "auto" }}
          ></img>
        </>
      )}
      {game === "Wordle" && (
        <>
          <img
            src="/files/wordle.png"
            alt="nyt game"
            style={{ width: "50px", height: "auto" }}
          ></img>
        </>
      )}
      {game === "Connections" && (
        <>
          <img
            src="/files/connections.png"
            alt="nyt game"
            style={{ width: "50px", height: "auto" }}
          ></img>
        </>
      )}
      <span>{date}</span>

      {game === "Connections" ? (
        <span style={{ color: "#F9DF6D", textShadow: "1px 1px #000000" }}>{clue}</span>
      ) : (
        <span>{clue}</span>
      )}
      {taunt && <span style={{ color: "#F9DF6D", textShadow: "1px 1px #000000" }}>{taunt}</span>}

    </div>
  );
};

export default PuzzleBox;
