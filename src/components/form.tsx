import style from "./formTask.module.css"
import { PlusCircle } from "phosphor-react"
import { ClipboardText } from "phosphor-react"

import React, { ChangeEvent, FormEvent } from "react"
import Task from "./task"
import InfoTasks from "./infoTasks"

function VoidTasks () {
  return (
    <div className = {style.voidTasks}>
      <ClipboardText size={50}/>
      <strong>Você ainda não possui tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}

interface Tasks {
  id: number,
  task: string,
  checked: false
}

export default function FormToDo () {
  const [tasks, setTasks] = React.useState<Tasks  []>([])
  const [task, setTask] = React.useState("")
  
  const handleWriteTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const handleCreatTask = (event: FormEvent) => {
    event.preventDefault()
    
    let newTask:Tasks = {
      id: tasks.length + 1,
      task: task,
      checked: false
    }
    console.log(newTask.id)
    setTasks([...tasks, newTask])
  }


  return(
    <main className={style.main}>
      <form className={style.FormNewTask}
        onSubmit={handleCreatTask}
      >
        <input 
          value={task}
          onChange={handleWriteTaskChange}
          className={style.newTask}
          type="text" 
          placeholder="Adicione uma nova tarefa" 
        />
        <button type="submit"
          className={style.buttonAddTask}
        >
          criar
          <PlusCircle size={20} />
        </button>
      </form>

      <InfoTasks />

      <section className = {style.MainTasks}>
        {
          tasks.length != 0 ?
          <ul className = {style.listTaskes}>
            {tasks.map(({ id, checked, task}) => (
              <Task 
              key={id}
              id ={id}
              checked = {checked}
              task ={task}
              />
            ))}
          </ul>
          :
            <VoidTasks />
        }
      </section>
    </main>
  )
}