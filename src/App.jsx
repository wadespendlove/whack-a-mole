import Welcome from "../src/Welcome.jsx";
import Scoreboard from "../src/Scoreboard.jsx";
import WhackAMole from "../load-screen/WhackAMole.jsx";
import { useGame } from "./GameContext.jsx";

export default function App() {
  const {
    game,
    score,
    moleIndex,
    reRenderMole,
    setMoleIndex,
    setScore,
    setGame,
  } = useGame();
  if (game === false) {
    return <Welcome />;
  }
  return (
    <>
      <div id="intro">
        <h1>Whack-A-Mole</h1>
        <Scoreboard />
        <WhackAMole />
      </div>
    </>
  );
}
