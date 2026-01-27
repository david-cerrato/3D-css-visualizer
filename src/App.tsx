import './App.css'
import { Cube } from './components/cube/Cube'
import { Controls } from './components/controls/Controls'
import { Viewport } from './components/viewport/Viewport'
import { SceneNode } from './components/scene-node/SceneNode'

function App() {
  return (
    <>
      <Viewport>
        <SceneNode />
      </Viewport>
      <Controls/>
    </>
  )
}

export default App
