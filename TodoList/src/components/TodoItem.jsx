import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
            <button  className="btn btn-danger" ><FontAwesomeIcon icon={faTrashCan}onClick={() => deleteTodo(id)} />
            </button>
        </li>
    )
}