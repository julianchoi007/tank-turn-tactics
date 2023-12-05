import "./App.css";
import { Auth } from "./components/auth";
import { Board } from "./components/board/board";
import { Tile } from "./components/tile/tile";
function App() {
  return (
    <div className="App">
      <Auth />
      <Board />
    </div>
  );
}

export default App;
