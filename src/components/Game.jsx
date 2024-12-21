import { useState } from 'react';

function Game () {
  const [appId, setAppId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/api/players/${appId}`;
  };

  return(<div className="game-container">
    <h1>This is a game</h1>
    <form onSubmit={handleSubmit} action="/api/players/">
      <label>
        <input 
          type="text"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Get Player Count" />
    </form>
  </div>)
}

export default Game;
