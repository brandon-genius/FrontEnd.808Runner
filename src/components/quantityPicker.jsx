import React from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {

    let [quantity, setquantity] = React.useState(1);

    const handleIncrease = () => {
        let nextQuantity = quantity +1;
        setquantity(nextQuantity);
        props.onChange(nextQuantity); //notify parent
    };
    const handleDecrease = () => {
        let nextQuantity = quantity - 1;
        if(nextQuantity > 0){
        setquantity(quantity - 1);
        props.onChange(nextQuantity);
     }
    };

    return(
        <div className="quantity">
            <button onClick={handleIncrease} className="btn btn-sm btn-dark">+</button>
            <label>{quantity}</label>
            <button onClick={handleDecrease} className="btn btn-sm btn-dark">-</button>
        </div>
    )
}

export default QuantityPicker;