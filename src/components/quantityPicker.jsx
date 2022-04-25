import React from "react";
import "./quantityPicker.css";

const QuantityPicker = () => {

    let [quantity, setquantity] = React.useState(1);

    const handleIncrease = () => {
        setquantity(quantity +1);
    };
    const handleDecrease = () => {
        let nextQuantity = quantity - 1;
        if(nextQuantity > 0){
        setquantity(quantity - 1);
     }
    };

    return(
        <div className="quantity">
            <button onClick={handleIncrease} className="btn btn-sm btn-dark">+</button>
            <label>{quantity}</label>
            <button onClick={handleDecrease} className="btn btn-sm btn-dark">-</button>
            <button className="btncart btn-primary">Add to Cart</button>
        </div>
    )
}

export default QuantityPicker;