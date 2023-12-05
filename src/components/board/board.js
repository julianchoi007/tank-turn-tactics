import { Tile } from "../tile/tile";
import "./board.css";

const boardSize = 16;
export const Board = () => {
  let tiles = Array(boardSize).fill(Array(boardSize).fill(0));
  console.log(tiles);
  return (
    <div className="board-wrapper">
      <div className="board">
        {tiles.map((element) => (
          <div className="row">
            {tiles.map((element) => (
              <Tile />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
