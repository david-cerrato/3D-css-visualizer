import { v4 as uuid} from 'uuid'

export function getNewNode(): SceneNode{
    return {
        id: uuid(),
        name: 'Plane',
        properties: InitialObjectProperties,
        parent: null,
        children: []
    }
}

export interface SceneNode {
  id: string,
  name: string,
  properties: ObjectProperty[]
  parent: string | null,
  children: string [],
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