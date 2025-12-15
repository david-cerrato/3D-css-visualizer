import { useState } from 'react'
import './App.css'
import { Cube } from './components/cube/Cube'
import { Controls } from './components/controls/Controls'

function App() {
  const [isIsometric, setIsIsometric] = useState<boolean>(false)

  return (
    <>
      <div className="overflow-hidden">
        <div className="viewport" data-isometric={isIsometric}>
          <Cube/>
          <div className="axis y-axis"></div>
          <div className="axis x-axis"></div>
          <div className="axis z-axis"></div>
          <div className="grid" data-isometric={isIsometric}></div>
        </div>
      </div>
      <Controls/>

      <button id="change-view" onClick={() => setIsIsometric(!isIsometric)}>3D view</button>
    </>
  )
}

export default App
