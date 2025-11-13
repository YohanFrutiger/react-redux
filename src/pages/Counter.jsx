import { useSelector } from "react-redux"
import CounterResult from "./CounterResult"
import CounterButtons from "./CounterButtons"

export default function Counter() {
  const counter = useSelector(state => state.counter)
  return (
    <div>
      <CounterButtons />
      <CounterResult />
    </div>
  )
}