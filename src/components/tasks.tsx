import React from "react"
import style from "./tasks.module.css"
import { ClipboardText } from "phosphor-react"
import Task from "./task"

interface Tasks {
  id: number,
  checked: boolean,
  task: string,
}

function VoidTasks () {
  return (
    <div className = {style.voidTasks}>
      <ClipboardText size={50}/>
      <strong>Você ainda não possui tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
export default function Tasks () {
  const [tasks, setTasks] = React.useState([])
  return(
    <main className = {style.MainTasks}>
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
    </main>
  )
}