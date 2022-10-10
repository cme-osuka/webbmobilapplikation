import { useEffect, useReducer, useRef } from 'react'
import './App.css'

const initialState = {
  time: 0,
  running: false
}

function clockReducer(state, action) {
  switch(action.type) {
    case "start":
      return { ...state, running: true };
    case "stop":
      return { ...state, running: false };
    case "reset":
      return { ...state, time: 0 }
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(clockReducer, initialState);
  const intervalRef = useRef();

  useEffect(() => {
    if (!state.running) return;

    intervalRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [state.running])

  return (
    <div className="App">
      <p>{state.time}s</p>
      <button onClick={() => dispatch({ type: "start" })}>start</button>
      <button onClick={() => dispatch({ type: "stop" })}>stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  )
}

export default App
