import { useGame } from "../src/GameContext.jsx";

const WhackAMole = () => {
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
    <>
      <section id="mole-holes">
        <ul>
          {Array.from({ length: 9 }).map((_, idx) => (
            <li
              key={idx}
              className={idx === moleIndex ? "hole mole" : "hole"}
              onClick={() => reRenderMole(idx)}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default WhackAMole;
