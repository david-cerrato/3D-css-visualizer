import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import './SortableItem.css'

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
      <button {...listeners}><span>G</span></button>
      {children}
    </div>
  );
}