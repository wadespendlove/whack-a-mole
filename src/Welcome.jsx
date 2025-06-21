import HighScore from "../load-screen/HighScore";
import { useGame } from "./GameContext.jsx";

const Welcome = () => {
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
    <section id="intro">
      <h1>Whack-A-Mole</h1>
      <section id="intro-text">
        <p>Welcome to Whack-A-Mole!</p>
        <p>Whack a mole to earn points.</p>
        <p>How many can you get?</p>
      </section>
      <button
        id="play-button"
        onClick={() => {
          setGame(true);
        }}
      >
        Play
      </button>
      <HighScore />
    </section>
  );
};

export default Welcome;
