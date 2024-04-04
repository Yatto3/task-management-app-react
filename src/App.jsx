import "./App.css"
import Header from "./assets/components/Header/Header";
import Creator from "./assets/components/TaskCreator/TaskCreator";

function App() {

  const getTaskList = (taskList) => {
    return taskList
  }

  return (
    <>
        <Header/>
        <Creator getTaskList = {getTaskList}/>
        
    </>
  )
}

export default App
