import './App.css'
import { Controls } from './components/controls/Controls'
import { Viewport } from './components/viewport/Viewport'
import { SceneNode } from './components/scene-node/SceneNode'
import { useScene } from './stores/sceneStore'

function App() {
  const { rootNodes, selectedNode } = useScene(state => state)
  return (
    <>
      <Viewport>
        {rootNodes.map(node => <SceneNode id={node} />)}
      </Viewport>
      {selectedNode && <Controls/>}
    </>
  )
}

export default App
