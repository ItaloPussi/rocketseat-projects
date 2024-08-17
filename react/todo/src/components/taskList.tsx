import clsx from "clsx"
import { Trash } from "lucide-react"
import Checked from "../assets/checked.svg"
import Unchecked from "../assets/unchecked.svg"
import { TaskProps } from "../interfaces/taskProps"

interface TaskListProps {
    tasks: TaskProps[],
    onTaskCompletion: (taskId: string) => void
    onTaskDeletion: (taskId: string) => void
}

export function TaskList({ tasks, onTaskCompletion, onTaskDeletion }: TaskListProps) {
    return (
            <ul className="mt-4 mb-10">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className="flex items-center p-4 gap-3 rounded-lg bg-gray-500 border border-gray-400 mt-3"
                    >
                        <button
                            type="button"
                            className="rounded-lg group transition-colors"
                            onClick={() => onTaskCompletion(task.id)}
                        >
                            {task.isTaskDone ? (
                                <img src={Checked} alt="Checked" className="h-6 w-6 group-hover:brightness-110" />
                            ) : (
                                <img src={Unchecked} alt="Unchecked" className="h-6 w-6 group-hover:opacity-70" />
                            )}
                        </button>

                        <span className={
                                clsx(
                                    "text-gray-100 text-sm flex-1 text-left",
                                    task.isTaskDone && "line-through text-gray-300"
                                )
                            }>
                                {task.title}
                        </span>

                        <button
                            type="button"
                            className="text-gray-300 hover:text-red-300 transition-colors"
                            onClick={() => onTaskDeletion(task.id)}
                        >
                            <Trash size={20} />
                        </button>
                    </li>
                ))}
            </ul>
    )
}