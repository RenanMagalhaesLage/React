import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>FORMULÁRIOS EM REACT</h1>
      <p>Estudando formulários em react</p>
      <MyForm user={{name:"Jelson", email:"josias@gmail.com", bio:"Hello", role:"user"}}/>
    </>
  )
}

export default App
