import style from "./task.module.css"
import { Trash } from "phosphor-react"

interface Tasks {
  id: number,
  checked: boolean,
  task: string,
}

export default function Task ({ id, checked, task}:Tasks) {
  return (
    <li className = {style.itemTask}>
      <div>
        <input 
          className = {style.radioTask}
          type="radio" 
          name={task} 
          id={task} 
          defaultChecked={checked}
          /> 
        <span id={task}>{task}</span>
      </div>

      <button 
        className = {style.trashTask}> 
        <Trash size={20} color="#fff"/>
      </button>
    </li>
  )
}