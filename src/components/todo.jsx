import "./todo.css";
import { useState } from "react";
import TodoItem from "./todoItem";


const Todo = () => {
    
    const [text, setText] = useState("");
    const [shoppinglist, setShoppingList] = useState([]);
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

const handleAddItem = () => {
    console.log(text);
    let copy = [...shoppinglist];
    copy.push(text);
    setShoppingList(copy);
};

    return(
        <div className="todo">
        <h3>Shopping List</h3>

        <div className="form">
            <input onChange={handleTextChange} placeholder="Add to List" />
            <button onClick={handleAddItem} className="btn btn-sm btn-primary">Add</button>
        </div>

        <div className="list"></div>
            <h6>There are {shoppinglist.length} in your list</h6>

            
            { shoppinglist.map((t, index) => (<TodoItem key={index} content = {t}></TodoItem>) )}
            

        </div>
    );
};

export default Todo;