import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef (function ResultModal({ onReset, targetTime, timeLeft}, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  const userLost = timeLeft <= 0
  const formattedTimeLeft = (timeLeft / 1000).toFixed(2)
  const score = Math.round((1 - timeLeft / (targetTime * 1000)) * 100)

  return (
    <dialog ref={dialog} className="result-modal"onClose={onReset}>
        <h2>You {userLost ? 'lost' : `won Score: ${score}`}</h2>
        <p>
            The target time was <strong>{targetTime} second{targetTime > 1 ? 's': ''}</strong>
        </p>
        <p>
            You stopped the timer with <strong>{formattedTimeLeft} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal