import "./App.css";
import { Auth } from "./components/auth";
import { Board } from "./components/board/board";
import { Header } from "./components/header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Auth />
    </div>
  );
}

export default App;
