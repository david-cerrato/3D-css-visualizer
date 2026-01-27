import { useElement } from "../../stores/elementStore"
import './sceneNode.css'

export function SceneNode(){
    const properties = useElement((state) => state.properties)

    return (
        <>
            <div 
                className="scene-node"
                style={{
                    "--transform": properties.map(property => `${property.id}(${property.value}${property.type === 'number' ? 'px' : 'deg'})`).join(' '),
                    } as React.CSSProperties}
                >
            </div>
        </>
    )
}