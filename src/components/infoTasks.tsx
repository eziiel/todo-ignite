import style from "./infoTasks.module.css"

interface Total {
  total:number
  checkeds:number
}

export default function InfoTasks ({ total, checkeds }: Total) {

  return (
    <main className = {style.MainTasks}>
      <header className = {style.HeaderTasks}>
        <div className = {style.InfoCountsTasks}>
          <span>tarefas criadas</span>
          <span className ={style.CountTasks}> {total}</span>
        </div>
        <div className = {style.InfoCountsTasks}>
          <span>concluidas</span>
          <span className ={style.CountTasks}>{`${checkeds} de ${total} `}</span>
        </div>
      </header>
    </main>
  )
}