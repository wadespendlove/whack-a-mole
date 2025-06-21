import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [moleIndex, setMoleIndex] = useState(7);
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(false);

  const reRenderMole = (clickedIndex) => {
    if (clickedIndex === moleIndex) {
      const randomIndex = Math.floor(Math.random() * 9);
      setMoleIndex(randomIndex);
      setScore(score + 1);
    }
  };

  const value = {
    game,
    score,
    moleIndex,
    reRenderMole,
    setMoleIndex,
    setScore,
    setGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
// step 3
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw Error(
      "undefinedGameFunction must be used within a GameContext Provider."
    );
  }
  return context;
};
