import {useState} from "react";
import "./App";

function Square( {value, onSquareClick} ) {

  return(
    <button onClick={ onSquareClick } className="square">{ value }</button>
  )
}
export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(""))
  const [whatComes, setWhatComes] = useState(true);
  const fillSquare = ( i ) =>  {

    if(square[i] || calculateWinner(square)) {
      return; //It will check if the values exists, if they don't, it'll cancel this operation.
    }

    const nextSquares = square.slice();

    if(nextSquares[i]){
      return;
    }
    if (whatComes) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquare(nextSquares);
    setWhatComes(!whatComes)
  }
  const winner = calculateWinner(square);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (whatComes ? 'X' : 'O');
    }

  function calculateWinner(squares)  {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++)  {
      const [a,b,c] = lines[i] //Will pass the coordinates of each index for a b c. (i.e., 0,1,2 or the first coordinate, will be referred as A,B and C.)
      
      if(squares[a] && square[a] === square[b] && square[a] === square[c] ) {
        return square[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <div className="status">
        {status}
      </div>
      <div className="board-row">
          <Square value={square[0]} onSquareClick={() => fillSquare(0)}/>
          <Square value={square[1]} onSquareClick={() => fillSquare(1)}/>
          <Square value={square[2]} onSquareClick={() => fillSquare(2)}/>
        </div>
        <div className="board-row">
          <Square value={square[3]} onSquareClick={() => fillSquare(3)}/>
          <Square value={square[4]} onSquareClick={() => fillSquare(4)}/>
          <Square value={square[5]} onSquareClick={() => fillSquare(5)}/>
        </div>
        <div className="board-row">
          <Square value={square[6]} onSquareClick={() => fillSquare(6)}/>
          <Square value={square[7]} onSquareClick={() => fillSquare(7)}/>
          <Square value={square[8]} onSquareClick={() => fillSquare(8)}/>
        </div>
    </div>
  )
}