import { useState } from "react";
import InputField from "./Components/InputField";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isComplete:false}])
      setTodo("");
    }
    
  }
  console.log(todos)
  return ( 
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField setTodo ={setTodo} todo ={todo} handleAdd ={ handleAdd} />
      <TodoList todos= {todos} setTodos ={setTodos} />
    </div>
   );
}
 
export default App;