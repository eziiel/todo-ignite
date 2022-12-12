import "./global.css"
import Header from "./components/header"
import FormToDo from "./components/form"
import style from "./app.module.css"

function App() {
  return (
    <div className={style.Geral}>
      <Header />
      <FormToDo />
    </div>
  )
}

export default App
