import { useState } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState('')
  const [nameSaved, setNameSaved] = useState('')
  function handleChange(event) {
    setNameSaved(false)
    setPlayerName(event.target.value)
  }

  function handleClick(params) {
    setNameSaved(true)
  }
  return (
    <section id="player">
      <h2>Welcome {nameSaved ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={setNameSaved}>Set Name</button>
      </p>
    </section>
  );
}
