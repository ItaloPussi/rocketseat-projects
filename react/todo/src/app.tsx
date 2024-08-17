import { useState } from "react";
import { v6 as uuid } from 'uuid';
import { Header } from "./components/header";
import { TaskContainer } from "./components/taskContainer";
import { TaskForm } from "./components/taskForm";
import { TaskProps } from "./interfaces/taskProps";
export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function onTaskCreation(taskTitle: string) {
    setTasks(t => ([
      {
        id: uuid(),
        title: taskTitle,
        isTaskDone: false
      },
      ...t,
    ]))
  }

  function onTaskDeletion(taskId: string){
    setTasks(t => t.filter(task => task.id !== taskId))
  }

  function onTaskCompletion(taskId: string) {
    setTasks(t => t.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isTaskDone: !task.isTaskDone
        }
      }
      return task
    }).sort((a, b) => Number(a.isTaskDone) - Number(b.isTaskDone)))
  }

  return (
    <div>
      <Header />
      <div className="max-w-[736px] mx-auto max-md:mx-5 max-lg:mx-10">
        <TaskForm 
          onTaskCreation={onTaskCreation}
        />

        <TaskContainer 
          tasks={tasks} 
          onTaskCompletion={onTaskCompletion}
          onTaskDeletion={onTaskDeletion}
        />
      </div>
    </div>
  )
}