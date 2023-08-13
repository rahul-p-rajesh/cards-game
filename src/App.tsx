import "./App.css";
import { Deck } from "./pages/Deck";

function App() {
  return (
    <div
      className="bg-slate-100 p-10 text-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <Deck />
    </div>
  );
}

export default App;
