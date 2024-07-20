export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            {/* It's important to always pass in actual functions (with arrow notation) 
            instead of the call itself - otherwise, 
            React will call the function and try and display its result*/}
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}