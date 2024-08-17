import { PlusCircle } from "lucide-react";
import { useState } from "react";

interface TaskFormProps {
    onTaskCreation: (taskTitle: string) => void
}

export function TaskForm({ onTaskCreation }: TaskFormProps) {
    const [taskTitle, setTaskTitle] = useState("")
    
    function handleCreateTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        onTaskCreation(taskTitle)
        setTaskTitle("")
    }

    return (
        <form 
            className="flex gap-2 -translate-y-1/2"
            onSubmit={handleCreateTask}
        >
            <input 
                className="flex-1 p-4 leading-[1.4] rounded-lg bg-gray-500 placeholder:text-gray-300 text-gray-100"
                type="text"
                placeholder="Adicione uma nova tarefa" 
                value={taskTitle}
                onChange={event => setTaskTitle(event.target.value)}
            />

            <button 
                type="submit"
                className="p-4 flex gap-2 items-center text-sm rounded-lg transition-colors cursor-pointer bg-blue-500 hover:bg-blue-300 text-white disabled:cursor-not-allowed disabled:opacity-70"
                disabled={taskTitle.length < 1}
            >
                Criar
                <PlusCircle className="w-4 h-4" />
            </button>
        </form>
    )
}