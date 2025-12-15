import { create } from "zustand";
import type { ViewportObject } from "../interfaces/object.interface";

interface State {
    object: ViewportObject
}

interface ElementActions {
    update: (updatedElement: ViewportObject) => void
}

export const useElement = create<State & ElementActions>((set) => ({
    object: {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
    },
    update: (updatedElement: ViewportObject) => set({object: updatedElement})
}))