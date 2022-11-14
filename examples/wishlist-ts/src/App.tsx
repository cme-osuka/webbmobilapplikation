import { useState } from 'react'
import { useWishes } from './contexts/WishContext';
import './App.css'


function App() {
  const [inputText, setInputText] = useState("")
  const { wishes, addWish } = useWishes();

  const handleClick = () => {
    addWish({ text: inputText })
    setInputText("");
  }

  return (
    <div className="App">
      <ul>
        { wishes.map(wish => <li>{wish.text}</li>) }
      </ul>
      <input name="wish" value={inputText} onChange={({target}) => setInputText(target.value)} />
      <button onClick={handleClick}>Lägg till önskning</button>
    </div>
  )
}

export default App
