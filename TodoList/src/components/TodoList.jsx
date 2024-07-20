import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {/* This below is called short-circuiting*/}
            {todos.length === 0 && "No Todos To Display"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                    {...todo}
                    key={todo.id} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo} />
                )
            })}
        </ul>

    )
}