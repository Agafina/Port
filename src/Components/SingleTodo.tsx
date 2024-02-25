import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";
import { MdDone } from "react-icons/md"
import './styles.css'
import { useEffect, useRef, useState } from "react";

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
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleEdit = (e:React.FormEvent,id:number ) => {
        e.preventDefault()
        setTodos(todos.map((todo) => (
            todo.id === id ?{...todo, todo:editTodo}:todo
        )));
        setEdit(false);
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    },[edit])

    return ( 

        <form className="todos__single" onSubmit={(e) => handleEdit(e,todo.id)}>
            {
                edit ? (
                    <input
                      ref={inputRef}                    
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      className="todos__single--text"
                    />
                ) : (
                    todo.isComplete? (
                        <s className= "todo__single--text">{todo.todo}</s>
                        ): (
                            
                            <span className= "todo__single--text">{todo.todo}</span>
                    )
                )
            }


            <div>
                <span className="icons">
                    <AiFillEdit onClick={
                        () => {
                            if(!edit && !todo.isComplete){
                                setEdit(!edit)
                            }
                        }
                    } />
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