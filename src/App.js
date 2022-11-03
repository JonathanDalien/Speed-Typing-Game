
import React from "react";
import useSpeedTypingGame from "./hooks/useSpeedTypingGame";

function App() {

  const [time, setTime] = React.useState(0);

  const {
    count,
    textRef,
    isGame,
    text,
    handleChange,
    timeRemaining,
    startGame,
    resetGame,
    setText,
  } = useSpeedTypingGame(time)

  const handleClick = () => {
    if (isNaN(time)) {
      setText("Please Insert a Number")
      return;
    };
    !isGame ? startGame() : resetGame()
  }

  return (
    <div>
      <h1>Wie schnell kannst du tippen?</h1>
      <div className="setTimeDiv">
        <label htmlFor="time">Zeit einstellen</label>
        <input disabled={isGame}
          onChange={(e) => setTime(e.target.value)} type="text"></input>
      </div>
      <textarea
        ref={textRef}
        disabled={!isGame}
        value={text}
        onChange={handleChange} />
      <h4>Verbleibende Zeit: {timeRemaining}sec</h4>
      <button
        onClick={handleClick}>
        {isGame ? "Reset" : "Spiel starten"}
      </button>
      <h1>{`${count} Wörter gezählt`}</h1>
    </div>
  );
}

export default App;
