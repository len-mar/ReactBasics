import { useEffect, useState } from "react"
import "./styles.css"
import NewTodoForm from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) {
            console.log("No local value found, returning empty array.");
            return [];
        }    
        try {
            const parsedValue = JSON.parse(localValue);
            console.log("Parsed value from local storage:", parsedValue);
            return Array.isArray(parsedValue) ? parsedValue : [];
        } catch (e) {
            console.error("Error parsing local storage value:", e);
            return [];
        }      })
    
      useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
      }, [todos])

    function addTodo(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        } )
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }

                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <main>
            <NewTodoForm onSubmit={addTodo}/>
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </main>
    )
}