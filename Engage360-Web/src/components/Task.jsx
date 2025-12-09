import { useDraggable } from "@dnd-kit/core"

const Task = ({id, name}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id})

     const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    touchAction: "none",
    pointer: "cursor"
  };

    return (
        <li key={id} ref={setNodeRef} {...listeners} {...attributes} style={style} className="bg-cyan-700 p-2 m-2 text-white">{name}</li>
    )
}

export default Task