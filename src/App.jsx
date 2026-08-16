import { Timer } from "./components/Timer"
import { TimerControls } from "./components/Timer/TimerControls"

export const App = () => {
  return (
    <div className="bg-bg-secondary">
      <h1>Pomodoro timer</h1>
      <Timer />
    </div>
  )
}