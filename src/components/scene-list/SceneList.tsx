import { Plus } from 'lucide-react'
import { useScene } from '../../stores/sceneStore'
import { ListItem } from './list-item/ListItem'
import './sceneList.css'
import { getNewNode } from '../../stores/sceneNode.interface'

export function SceneList(){
    const {rootNodes, addNewNode} = useScene()

    return (
        <>
            <div className="list-container">
                <div className="list">
                    {rootNodes.map(node => <ListItem key={node} id={node} />)}
                </div>
                <button className='list-item' onClick={() => addNewNode(getNewNode())}>
                    <span> 
                        <Plus size={16}></Plus> Add node
                    </span>
                </button>
            </div>
        </>
    )
}