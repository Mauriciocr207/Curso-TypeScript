import React, { useState } from 'react'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import ToDoList from './components/ToDoList'
import NewToDo from './components/NewToDo'
import ToDo from './models/ToDo'


const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  
  function addToDo(text: string) {
    if(!text) return;
    setTodos(prevState => [
      ...prevState,
      {
        id: "t"+ prevState.length+1, 
        text
      }
    ]);
  }

  function deleteToDo(id: string) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  return (<>
    <div className='App'>
      <NewToDo onAddToDo={addToDo}/>
      <ToDoList items={todos} onDeleteToDo={deleteToDo}/>
    </div>
  </>)
}

export default App
