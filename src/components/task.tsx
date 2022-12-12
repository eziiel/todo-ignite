import style from "./task.module.css"
import { Trash } from "phosphor-react"
import React, { ChangeEvent } from "react"

interface Tasks {
  id: number,
  checked: boolean,
  task: string,
  deleteTask:(idTask:number) => void
  setChecked:(idTask:number) => void
}

export default function Task ({ id, checked, task, deleteTask, setChecked}:Tasks) {

  const onDeleteTask = (idTask:number) => {
    deleteTask(idTask)
  }
  
  const onSetChecked = (idTask:number) => {
    setChecked(idTask)
  }
  
  const handleCheckedInput = (e:ChangeEvent<HTMLInputElement>) => {
    e.target.checked != checked
  }
  
  return (
    <li className = {style.itemTask}>
      <div
        onClick={() => onSetChecked(id)}
      >
        <input 
          className = {style.radioTask}
          type="radio" 
          name={task} 
          checked= {checked}
          onChange= {handleCheckedInput}
          /> 
        <p 
          className = {style.spanTask}
          id={task}
        >
          {task}
        </p>
      </div>

      <button 
        onClick={() => onDeleteTask(id)}
        className = {style.trashTask}> 
        <Trash className = {style.trash}size={20} />
      </button>
    </li>
  )
}