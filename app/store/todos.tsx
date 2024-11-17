"use client"

import { createContext, ReactNode, useContext, useState } from "react";


export type Todo = {
    id: string;
    task: string;
    complete: boolean;
    created_at: Date;
}

export type ToDosContext = {
    handleAddTodo : (task:string) => void;
    todos : Todo[];
}

export const todosContext = createContext<ToDosContext | null>(null);
export const TodosProvider = ({children}: { children: ReactNode }) => {

    const [todos, setToDos] = useState<Todo[]>([])

    const handleAddTodo = (task: string) => {
        setToDos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task,
                complete: false,
                created_at: new Date()
            },
            ...prev
            ]
            return newTodos;
        })
    }
    return (
        <todosContext.Provider value={{todos,handleAddTodo}}>
            {children}
        </todosContext.Provider>
    )

}

export function useTodos(){
    const todosContextValue= useContext(todosContext)
    if (!todosContextValue){
        throw new Error('UseTodos outside the provider')
    }
    return todosContextValue;
}
