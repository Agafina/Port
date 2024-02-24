import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";
import { MdDone } from "react-icons/md"
import './styles.css'

 type Props = {
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
 }
const SingleTodo:React.FC<Props>= ({todo ,todos, setTodos}) =>  {
    const handleDone = (id:number) =>{
        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, isComplete: !todo.isComplete} :todo
        )
        
            ))
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo) => 
            todo.id !== id))
    }
    return ( 

        <form className="todos__single">
            {
                todo.isComplete? (
                    <s className= "todo__single--text">{todo.todo}</s>
                    ): (
                        
                        <span className= "todo__single--text">{todo.todo}</span>
                )
            }
            

            <div>
                <span className="icons">
                    <AiFillEdit />
                </span>
                <span className="icons">
                    <AiFillDelete onClick= {() => handleDelete(todo.id)}/>
                </span>
                <span className="icons">
                    <MdDone onClick={() => {handleDone(todo.id)}}/>
                </span>
            </div>
        </form>
     );
}
 
export default SingleTodo;