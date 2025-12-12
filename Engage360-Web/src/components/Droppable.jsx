import { useDroppable } from "@dnd-kit/core"
import Task from "./Task"

const Droppable = ({id, tasks}) => {
    const {isOver, setNodeRef} = useDroppable({
        id
    })
    return (
        <ul ref={setNodeRef} key={id} id={id} 
            className="min-h-full w-64 mx-4 md:min-w-2/6 glass-card py-3 shrink-0"
            style={{
                border: isOver ? "2px solid #38bdf8" : "",
                backgroundColor: isOver ? "rgba(255, 255, 255, 0.2)" : ""
            }}>
            <h3>{id}</h3>
            {tasks.map((task) => (
            <Task key={task._id} id={task._id} name={task.name} />
            ))}
        </ul>
    )
}

export default Droppable