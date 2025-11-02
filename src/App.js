// https://react.dev/learn/tutorial-tic-tac-toe

import { useState } from 'react';

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick() {
    
  }

  return(
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} ></Square>
        <Square value={squares[1]}></Square>
        <Square value={squares[2]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]}></Square>
        <Square value={squares[4]}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]}></Square>
        <Square value={squares[7]}></Square>
        <Square value={squares[8]}></Square>
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <>
      <button 
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  )
}