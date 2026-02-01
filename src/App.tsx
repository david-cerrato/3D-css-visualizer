import './App.css'
import { Controls } from './components/controls/Controls'
import { Viewport } from './components/viewport/Viewport'
import { SceneNode } from './components/scene-node/SceneNode'
import { useScene } from './stores/sceneStore'
import { SceneList } from './components/scene-list/SceneList'

function App() {
  const { rootNodes, selectedNode } = useScene(state => state)
  return (
    <>
      <SceneList />
      <Viewport>
        {rootNodes.map(node => <SceneNode id={node} />)}
      </Viewport>
      {selectedNode && <Controls/>}
    </>
  )
}

export default App
