import { create } from "zustand";
import { getInitialScene, type Scene, type SceneActions } from "./scene.interface";
import { type ObjectProperty, type SceneNode } from "./sceneNode.interface";
import { immer } from "zustand/middleware/immer";
import { addNewNode, deleteNode } from "./scene.actions";


export const useScene = create<Scene & SceneActions>()(immer((set) => ({
    ...getInitialScene(),
    addNewNode: (newNode) => set((state) => {addNewNode(state, newNode)}),
    setSelectedNode: (newNode: SceneNode) => set({selectedNode: newNode}),
    updateNodeProperties: (properties: ObjectProperty[]) => set((state) => {state.nodes[state.selectedNode!.id].properties = properties}),
    deleteNode: (deletedNodeId: string) => set((state) => {deleteNode(state, deletedNodeId)})
})))