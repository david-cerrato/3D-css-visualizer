import './App.css'
import { Cube } from './components/cube/Cube'
import { Controls } from './components/controls/Controls'
import { Viewport } from './components/viewport/Viewport'

function App() {
  return (
    <>
      <Viewport>
        <Cube/>
      </Viewport>
      <Controls/>
    </>
  )
}

export default App
