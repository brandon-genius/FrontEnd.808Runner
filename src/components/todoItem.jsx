import QuantityPicker from "./quantityPicker";
import "./todoItem.css";


const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <div className="props">
                {props.content}
            </div>

            <div className="picker">
                <QuantityPicker></QuantityPicker>
            </div>

        </div>
    );
};

export default TodoItem;