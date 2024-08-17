import { BubbleText } from "./bubbleText";

interface TaskSummaryProps {
    taskCount: number
    tasksCompleted: number
}

export function TaskSummary({taskCount, tasksCompleted}: TaskSummaryProps){
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center ">
                <strong className="text-blue-300 leading-[1.4]">
                    Tarefas criadas
                </strong>
                <BubbleText 
                    text={`${taskCount}`}
                />
            </div>
            <div className="flex gap-2 items-center">
                <strong className="text-purple-300 leading-[1.4]">
                    Concluidas
                </strong>
                <BubbleText
                    text={taskCount > 0 ? `${tasksCompleted} de ${taskCount}` : "0"}
                />
            </div>
        </div>
    )
}