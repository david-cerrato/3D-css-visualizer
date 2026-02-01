import { useScene } from '../../stores/sceneStore'
import { ListItem } from './list-item/ListItem'
import './sceneList.css'

export function SceneList(){
    const {rootNodes} = useScene()

    return (
        <>
            <div className="list-container">
                {rootNodes.map(node => <ListItem key={node} id={node} />)}
            </div>
        </>
    )
}