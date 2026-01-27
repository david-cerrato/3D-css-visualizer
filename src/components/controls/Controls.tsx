import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useScene } from "../../stores/sceneStore"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableItem } from "../drag-and-drop/SortableItem"
import { useCallback, useState } from "react"
import { Property } from "./Property"

export function Controls() {
    const {selectedNode, updateNodeProperties} = useScene((state) => state)
    const properties = useScene(state => state.nodes[selectedNode!].properties)
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
  );

  const handleDragStart = useCallback(({ active }: any) => {
    setActiveId(active.id);
  }, []);

  const handleDragEnd = useCallback(({ active, over }: any) => {
    if (!over || active.id === over.id) {
      setActiveId(null);
      return;
    }

    if(active.id !== over.id) {
      const oldIndex = properties.findIndex(property => property.id === active.id);
      const newIndex = properties.findIndex(property => property.id === over.id);
      const newArray = arrayMove(properties, oldIndex, newIndex)

      updateNodeProperties(newArray)
    }

    setActiveId(null);
  }, [properties, updateNodeProperties]);

  const updateSinglePropertyValue = useCallback(
    (updatedPropertyId: string, updatedValue: number) => {
      updateNodeProperties(
        properties.map(property =>
          property.id === updatedPropertyId
            ? { ...property, value: updatedValue }
            : property
        )
      );
    },
    [properties, updateNodeProperties]
  );

    return (
        <>
          <div className="controls">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCorners}
              onDragEnd={handleDragEnd}
              onDragStart={handleDragStart}
            >
              <SortableContext
              items={properties}
                strategy={verticalListSortingStrategy}
              >
                {properties.map((property, index) => 
                  <SortableItem id={property.id} key={property.id}>
                    <Property item={property} updateValue={updateSinglePropertyValue}></Property>
                  </SortableItem>
                )}
              </SortableContext>
            </DndContext>
          </div>
        </>
    )
}