import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Product Page</h1>
      <h3>iPhone 15 Pro</h3>
      <img src='https://placehold.co/150x150'/>
    </div>
  )
}

export default App
