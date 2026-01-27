import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useElement } from "../../stores/elementStore"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableItem } from "../drag-and-drop/SortableItem"
import { useState } from "react"
import { Property } from "./Property"

export function Controls() {
    const {properties, updateOrder} = useElement((state) => state)
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
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
                    <Property item={property}></Property>
                  </SortableItem>
                )}
              </SortableContext>
            </DndContext>
          </div>
        </>
    )

    function handleDragStart(event: any) {
    const {active} = event;
    
    setActiveId(active.id);
  }
  
  function handleDragEnd(event: any) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
        const oldIndex = properties.findIndex(property => property.id === active.id);
        const newIndex = properties.findIndex(property => property.id === over.id);
        const newArray =  arrayMove(properties, oldIndex, newIndex);

        updateOrder(newArray)

    }

    setActiveId(null);
  }
  
}