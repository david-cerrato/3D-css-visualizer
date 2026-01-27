import { create } from "zustand";

interface State {
    properties: ObjectProperty[]
}

interface ElementActions {
    updateOrder: (updatedElement: ObjectProperty[]) => void
    updateSingleProperty: (value: number, id: string) => void
}

export interface ObjectProperty {
  id: string,
  type: 'range' | 'number',
  value: number;
}

const InitialObjectProperties: ObjectProperty[] = [
  {
    id: 'translateX',
    type: 'number',
    value: 0
  },
  {
    id: 'translateY',
    type: 'number',
    value: 0
  },
  {
    id: 'translateZ',
    type: 'number',
    value: 0
  },
  {
    id: 'rotateX',
    type: 'range',
    value: 0
  },
  {
    id: 'rotateY',
    type: 'range',
    value: 0
  },
  {
    id: 'rotateZ',
    type: 'range',
    value: 0
  },
]

export const useElement = create<State & ElementActions>((set) => ({
    properties: InitialObjectProperties,
    updateOrder: (updatedElement: ObjectProperty[]) => set({properties: updatedElement}),
    updateSingleProperty: (value, id) => set((state) => ({properties: state.properties.map((property) => {
        if(property.id !== id) return property;
        property.value = value
        return property
    })}))
}))

