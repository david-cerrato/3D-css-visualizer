import { getNewNode, type ObjectProperty, type SceneNode } from "./sceneNode.interface"

export interface Scene {
  nodes: {[key: string]: SceneNode},
  rootNodes: string[],
  selectedNode: SceneNode | null
}

export interface SceneActions {
  addNewNode: (newNode: SceneNode) => void,
  setSelectedNode: (newNode: SceneNode) => void,
  updateNodeProperties: (updatedProperties: ObjectProperty[]) => void
  deleteNode: (deletedNodeId: string) => void
}



export function getInitialScene(): Scene{
    const firstNode = getNewNode()
    return {
        nodes:{[firstNode.id]: firstNode},
        rootNodes: [firstNode.id],
        selectedNode: null
}}

