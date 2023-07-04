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

  return (
    <div className="App">
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