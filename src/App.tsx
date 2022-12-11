import "./global.css"
import Header from "./components/header"
import FormToDo from "./components/form"
import InfoTasks from "./components/infoTasks"
import Tasks from "./components/tasks"

function App() {
  return (
    <div>
      <Header />
      <FormToDo />
      <InfoTasks />
      <Tasks />
    </div>
  )
}

export default App
