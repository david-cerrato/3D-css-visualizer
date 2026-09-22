import './App.css'
import { Controls } from './components/controls/Controls'
import { Viewport } from './components/viewport/Viewport'
import { SceneNode } from './components/scene-node/SceneNode'
import { useScene } from './stores/sceneStore'
import { SceneList } from './components/scene-list/SceneList'
import { ViewSelector } from './components/view-selector/ViewSelector'

function App() {
  const { rootNodes, selectedNode } = useScene(state => state)
  return (
    <>
      <SceneList />
      <Viewport>
        {rootNodes.map(node => <SceneNode id={node} />)}
      </Viewport>
      {selectedNode && <Controls/>}
      <ViewSelector></ViewSelector>
    </>
  )
}

export default App
