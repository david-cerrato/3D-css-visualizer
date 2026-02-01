import { useScene } from "../../../stores/sceneStore"
import '../sceneList.css'

export function ListItem({id}: {id: string}) {
    const {selectedNode, nodes, setSelectedNode}  = useScene()
    const node  = nodes[id]

    return (
        <>
            <div className="list-item" onClick={() => setSelectedNode(id)}>
                <p>{node.name}</p>
            </div>
        </>
    )
}