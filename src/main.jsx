import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GameProvider } from "./GameContext";

createRoot(document.getElementById("root")).render(
  <GameProvider>
    <App />
  </GameProvider>
);
