import { useState } from 'react'
import './App.css'
import Popup from "/src/components/Popup/Popup.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Popup />
    </>
  )
}

export default App
