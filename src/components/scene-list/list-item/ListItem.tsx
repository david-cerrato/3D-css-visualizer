import { Trash2 } from "lucide-react"
import { useScene } from "../../../stores/sceneStore"
import '../sceneList.css'

export function ListItem({id}: {id: string}) {
    const {nodes, setSelectedNode, deleteNode, selectedNode}  = useScene()
    const node  = nodes[id]

    function onDeleteIconClicked(event: any){
        deleteNode(id)
        event.stopPropagation();
    }

    function onSelectItemClicked(event: any){
        setSelectedNode(node)
        event.stopPropagation();
    }


    return (
        <>
            <div className={`list-item ${selectedNode?.id === id && 'list-item-selected'}`} onClick={onSelectItemClicked}>
                <p>{node.name}</p>
                <div className="icons">
                    <Trash2 size={16} onClick={onDeleteIconClicked}/>
                </div>
            </div>
        </>
    )
}