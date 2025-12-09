import { useState } from 'react'
import './App.css'
import { Cube } from './components/cube/Cube'

function App() {
  const [isIsometric, setIsIsometric] = useState<boolean>(false)

  return (
    <>
      <div className="overflow-hidden">
        <div className="viewport" data-isometric={isIsometric}>
          <Cube></Cube>
          <div className="axis y-axis"></div>
          <div className="axis x-axis"></div>
          <div className="axis z-axis"></div>
        </div>
      </div>

      <button id="change-view" onClick={() => setIsIsometric(!isIsometric)}>3D view</button>
    </>
  )
}

export default App
