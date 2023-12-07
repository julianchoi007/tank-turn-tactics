import { useEffect, useRef, useState } from "react";
import { Tile } from "../tile/tile";
import "./board.css";

const boardSize = 9;
export const Board = () => {
  const [tiles, setTiles] = useState(
    [...Array(boardSize)].map((r) => [...Array(boardSize)].map((r) => "tile"))
  );
  const [message, setMessage] = useState("test");
  useEffect(() => {
    let arr = tiles;
    for (let i = 1; i < boardSize; i += 3) {
      for (let j = 1; j < boardSize; j += 3) {
        arr[i][j] = "tank";
      }
    }
    console.log("test");
    setTiles(arr);
  }, []);
  console.log(tiles);
  return (
    <div className="board-wrapper">
      <div className="board">
        {tiles.map((rows) => (
          <div className="row">
            {rows.map((square) => (
              <Tile type={square} />
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setMessage("tests");
        }}
      >
        test
      </button>
    </div>
  );
};
