import { useGame } from "./GameContext.jsx";

const Scoreboard = () => {
  const {
    game,
    score,
    moleIndex,
    reRenderMole,
    setMoleIndex,
    setScore,
    setGame,
  } = useGame();
  return (
    <div id="score-and-button">
      <p id="score">Score: {score}</p>
      <p id="score">Timer: 15</p>
      <button
        id="reset-button"
        onClick={() => {
          setGame(false);
          setScore(0);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Scoreboard;
