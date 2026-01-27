import { create } from "zustand";
import { getInitialScene, type Scene, type SceneActions } from "./scene.interface";
import type { ObjectProperty } from "./sceneNode.interface";
import { immer } from "zustand/middleware/immer";

export const useScene = create<Scene & SceneActions>()(immer((set) => ({
    ...getInitialScene(),
    addNewNode: (newNode) => set((state) => ({})),
    setSelectedNode: (id: string) => set({selectedNode: id}),
    updateNodeProperties: (properties: ObjectProperty[]) => set((state) => {console.log('estado actualizado'); state.nodes[state.selectedNode!].properties = properties})
})))

