import style from "./formTask.module.css"
import { PlusCircle } from "phosphor-react"

export default function FormToDo () {
  return(
    <form className={style.FormNewTask}>
      <input 
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
  )
}