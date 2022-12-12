import style from "./formTask.module.css"
import { PlusCircle } from "phosphor-react"
import { ClipboardText } from "phosphor-react"

import React, { ChangeEvent, FormEvent, InvalidEvent } from "react"
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
  checked: boolean
}

export default function FormToDo () {
  const [tasks, setTasks] = React.useState<Tasks[]>([])
  const [task, setTask] = React.useState("")
  const [checkeds, setCheckeds] = React.useState(0)
  
  const handleWriteTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("")
    setTask(event.target.value)
  }

  const handleCreatTask = (event: FormEvent) => {
    event.preventDefault()
    
    let newTask:Tasks = {
      id: tasks.length + 1,
      task: task,
      checked: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask =(idTask:number) => {
    const tasksActual = tasks.filter(item => item.id!=idTask)
    setTasks(tasksActual)
  }

  const setChecked = (idTask:number) => {
    const tasksActual = tasks.filter(item => {
      if(item.id === idTask) {
        item.checked = !item.checked
        return item
      } else {
        return item
      }
    })
    setTasks(tasksActual)
    tasks.map(({ checked }) => {
      checked ? setCheckeds(checkeds+1) : null
    })
  }

  const isNewInputEmpty = task.length === 0

  const handleInfoInput = (e:InvalidEvent<HTMLInputElement>) => {
    e.target.setCustomValidity("preencha corretamente")
  }

  return(
    <main className={style.main}>
      <form className={style.FormNewTask}
        onSubmit={handleCreatTask}
      >
        <input 
          name="task"
          placeholder="Adicione uma nova tarefa" 
          type="text" 
          className={style.newTask}
          value={task}
          onChange={handleWriteTaskChange}
          onInvalid={handleInfoInput}
          required
        />
        <button type="submit"
          disabled={isNewInputEmpty}
          className={style.buttonAddTask}
        >
          criar
          <PlusCircle size={20} />
        </button>
      </form>

      <InfoTasks total={tasks.length} checkeds={checkeds}/>

      <section className = {style.MainTasks}>
        {
          tasks.length != 0 ?
          <ul className = {style.listTaskes}>
            {tasks.map(({ id, checked, task}) => (
              <Task 
              setChecked = {setChecked}
              deleteTask = {deleteTask}
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