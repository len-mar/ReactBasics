import {useState} from "react"

export default function TodoForm({onSubmit}){
        // this is called destructuring
    // the destructured is on the right
    // the variables storing the results are on the left
    const [newItem, setNewItem] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <h2 htmlFor="item">Please enter your Todos.</h2>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}