import "./Chat/Chat";
import { Chat } from "./Chat/Chat";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1 id="header">Meu chat</h1>
        <button id="botaoHeader">
          <svg
            id="svgHeader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
        </button>
      </div>
      <div>
        <Chat></Chat>
      </div>
    </div>
  );
}
