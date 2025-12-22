import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useRef } from "react";


function App() {
  //const [count, setCount] = useState(0)
  const videoRef = useRef(null);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>My Custom Video Player</h1>

      <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          width="600"
     />
        <button onClick={() => videoRef.current.play()}>▶️ Play</button>
        <button onClick={() => videoRef.current.pause()}>⏸ Pause</button>
        <button onClick={() => (videoRef.current.currentTime += 5)}>⏩ Forward</button>
        <button onClick={() => (videoRef.current.currentTime -= 5)}>⏪ Rewind</button>

    </div>
    </>
  )
}

export default App
