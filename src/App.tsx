import "./global.css"
import Header from "./components/header"
import FormToDo from "./components/form"
import Tasks from "./components/tasks"

function App() {
  return (
    <div>
      <Header />
      <FormToDo />
      <Tasks />
    </div>
  )
}

export default App
