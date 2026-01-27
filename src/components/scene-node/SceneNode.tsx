import { useScene } from "../../stores/sceneStore"
import './sceneNode.css'

export function SceneNode({id}: {id: string}){
    const node = useScene((state) => state.nodes[id])
    const { selectedNode, setSelectedNode } = useScene((state) => state)

    return (
        <>
            <div 
                className={`scene-node ${selectedNode === id ? 'selected' : ''}`}
                onClick={() => setSelectedNode(id)}
                style={{
                    "--transform": node.properties.map(property => `${property.id}(${property.value}${property.type === 'number' ? 'px' : 'deg'})`).join(' '),
                    } as React.CSSProperties}
                >
            </div>
        </>
    )
}