import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import './SortableItem.css'
import { GripVertical } from 'lucide-react';

export function SortableItem({children, id}: {children: React.ReactNode, id: string}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className='sortableItem' ref={setNodeRef} style={style} {...attributes} >
      <span {...listeners}>
        <GripVertical />
      </span>
      {children}
    </div>
  );
}