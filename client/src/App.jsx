import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spotify from './spotify';
import Login from './login';
import Register from './reg';
import { Routes,Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
  <Routes>

      <Route path="/" exact element={<Spotify/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/register" exact element={<Register/>}></Route>

  </Routes>
      
    </>
  )
}

export default App
