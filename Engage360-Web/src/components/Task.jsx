import { useDraggable } from "@dnd-kit/core"

const Task = ({id, name}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id})

     const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    touchAction: "none",
    cursor: transform ? "grabbing" : "grab"
  };

    return (
        <li key={id} ref={setNodeRef} {...listeners} {...attributes} style={style} className="glass-task p-2 m-1 text-white rounded">{name}</li>
    )
}

export default Task