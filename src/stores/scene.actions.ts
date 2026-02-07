import { type Scene, type SceneActions } from "./scene.interface";
import type { SceneNode } from "./sceneNode.interface";

export function deleteNode(state: Scene & SceneActions, deletedNodeId: string) {
    delete state.nodes[deletedNodeId];
    state.rootNodes = state.rootNodes.filter(rootNode => rootNode !== deletedNodeId)
    if(state.selectedNode?.id === deletedNodeId) state.selectedNode = null;
}

export function addNewNode(state: Scene & SceneActions, newNode: SceneNode) {
    state.nodes[newNode.id] = newNode;
    state.rootNodes.push(newNode.id);
    state.selectedNode = newNode;
}