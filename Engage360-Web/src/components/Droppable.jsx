import { useDroppable } from "@dnd-kit/core"
import Task from "./Task"

const Droppable = ({id, tasks}) => {
    const {isOver, setNodeRef} = useDroppable({
        id
    })
    return (
        <ul ref={setNodeRef} key={id} id={id} className="min-h-full border p-4 min-w-4/6 mx-3 rounded">
            <h3>{id}</h3>
            {tasks.map((task) => (
            <Task key={task._id} id={task._id} name={task.name} />
            ))}
        </ul>
    )
}

export default Droppable