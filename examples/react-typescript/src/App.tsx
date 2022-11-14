import './App.css'

import PropsExample from './components/PropsExample';

function App() {

  return (
    <div className="App">
      <PropsExample text="En text" onClick={() => console.log("Hello World")} />
    </div>
  )
}

export default App
