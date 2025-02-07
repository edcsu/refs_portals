import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="medium" targetTime={2} />
        <TimerChallenge title="Hard" targetTime={4} />
        <TimerChallenge title="Expert" targetTime={10} />
      </div>
    </>
  );
}

export default App;
