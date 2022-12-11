import style from "./infoTasks.module.css"

export default function InfoTasks () {
  return (
    <main className = {style.MainTasks}>
      <header className = {style.HeaderTasks}>
        <div className = {style.InfoCountsTasks}>
          <span>tarefas criadas</span>
          <span className ={style.CountTasks}>3</span>
        </div>
        <div className = {style.InfoCountsTasks}>
          <span>concluidas</span>
          <span className ={style.CountTasks}>2 de 3</span>
        </div>
      </header>

      <section>
        
      </section>
    </main>
  )
}