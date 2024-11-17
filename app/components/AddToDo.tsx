"use client"
import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos"

const AddToDO = () => {

    const [toDo, setToDo] = useState("")

    const {handleAddTodo} = useTodos()

    const handleOnSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddTodo(toDo);
        setToDo("");
    }

        return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Write your todo" value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
            <button type="submit">ADD</button>
        </form>
    )
}
export default AddToDO