import { TaskProps } from "../interfaces/taskProps"
import { EmptyList } from "./emptyList"
import { TaskList } from "./taskList"
import { TaskSummary } from "./taskSummary"

interface TaskContainerProps {
    tasks: TaskProps[],
    onTaskCompletion: (taskId: string) => void
    onTaskDeletion: (taskId: string) => void
}

export function TaskContainer({ tasks, onTaskCompletion, onTaskDeletion }: TaskContainerProps) {
    const taskCount = tasks.length
    const tasksCompleted = tasks.filter(task => task.isTaskDone).length
    
    return (
        <div className="mt-8">
            <TaskSummary 
                taskCount={taskCount}
                tasksCompleted={tasksCompleted}
            />

            {tasks.length > 0 ? (
                <TaskList 
                    tasks={tasks}
                    onTaskCompletion={onTaskCompletion}
                    onTaskDeletion={onTaskDeletion}
                />
            ) : (
                <EmptyList />
            )
            }
        </div>
    )
}