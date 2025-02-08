import { useState, useRef } from 'react'
import ResultModal from './ResultModal';

function TimerChallenge({ title, targetTime}) {
  const timer = useRef()
  const resultDialog = useRef()

  const [timeLeft, setTimeLeft] = useState(targetTime * 1000)

  const timerIsActive = timeLeft > 0 && timeLeft < targetTime * 1000

  if (timeLeft <= 0) {
    clearInterval(timer.current)
    setTimeLeft(targetTime * 1000)
    resultDialog.current.open()
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeLeft(previoustime => previoustime - 10)
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current)
    resultDialog.current.open()
  }

  return (
    <>
      <ResultModal ref={resultDialog} targetTime={targetTime} result="lost" />
      <section className='challenge'>
          <h2>{title}</h2>
          <p className='challenge-time'>
              {targetTime} second{targetTime > 1 ? 's': ''}
          </p>
          <p>
              <button onClick={timerIsActive ? handleStop : handleStart}>
                  {timerIsActive ? 'Stop' : 'Start'} Challenge
              </button>
          </p>
          <p className={timerIsActive ? 'active' : undefined}>
              {timerIsActive ? 'Time is running...' : 'Timer inactive'}
          </p>
      </section>
    </>
  )
}

export default TimerChallenge