import { useState } from 'react'
import './App.css'
import { Cube } from './components/cube/Cube'

function App() {
  const [isIsometric, setIsIsometric] = useState<boolean>(false)
  const [translateX, setTranslateX] = useState<number>(0)
  const [translateY, setTranslateY] = useState<number>(0)
  const [translateZ, setTranslateZ] = useState<number>(0)
  const [rotateX, setRotateX] = useState<number>(0)
  const [rotateY, setRotateY] = useState<number>(0)
  const [rotateZ, setRotateZ] = useState<number>(0)

  return (
    <>
      <div className="overflow-hidden">
        <div className="viewport" data-isometric={isIsometric}>
          <Cube 
            translateX={translateX} 
            translateY={translateY} 
            translateZ={translateZ} 
            rotateX={rotateX} 
            rotateY={rotateY} 
            rotateZ={rotateZ}
          ></Cube>
          <div className="axis y-axis"></div>
          <div className="axis x-axis"></div>
          <div className="axis z-axis"></div>
          <div className="grid" data-isometric={isIsometric}></div>
        </div>
      </div>

      <div className="controls">
        <div className="range-input">
          <label htmlFor="translateX">Translate X</label>
          <input type="number" name="" id="translateX" value={translateX} onChange={(e: any) => setTranslateX(e.target.value)}/>
        </div>
        <div className="range-input">
          <label htmlFor="translateY">Translate Y</label>
          <input type="number" name="" id="translateY" value={translateY} onChange={(e: any) => setTranslateY(e.target.value)}/>
        </div>
        <div className="range-input">
          <label htmlFor="translateZ">Translate Z</label>
          <input type="number" name="" id="translateZ" value={translateZ} onChange={(e: any) => setTranslateZ(e.target.value)}/>
        </div>
        <div className="range-input">
          <label htmlFor="rotateX">Rotate X</label>
          <input type="range" name="" id="rotateX" min="0" max="360" value={rotateX} onChange={(e: any) => setRotateX(e.target.value)}/>
        </div>
        <div className="range-input">
          <label htmlFor="rotateY">Rotate Y</label>
          <input type="range" name="" id="rotateY" min="0" max="360" value={rotateY} onChange={(e: any) => setRotateY(e.target.value)}/>
        </div>
        <div className="range-input">
          <label htmlFor="rotateZ">Rotate Z</label>
          <input type="range" name="" id="rotateZ" min="0" max="360" value={rotateZ} onChange={(e: any) => setRotateZ(e.target.value)}/>
        </div>
      </div>

      <button id="change-view" onClick={() => setIsIsometric(!isIsometric)}>3D view</button>
    </>
  )
}

export default App
