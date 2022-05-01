import "./product.css";
import "./quantityPicker";
import QuantityPicker from "./quantityPicker";
import {useState} from 'react';

const Product = (props) => {

    const [quantity, setquantity] = useState(1);

    const handleQuantityChange= (val) => {
        console.log("the q changed", val);
        setquantity(val);
    };
    
    return(
        <div className="products">
            <h3>{props.info.title}</h3>

            <img src={"/Images/" + props.info.image}></img>

            <div className="prices">
                <label className="total"><span>Total:</span>${(props.info.price * quantity).toFixed(2)}</label>
                <label className="price"><span>Price: </span>${props.info.price.toFixed(2)}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        </div>
    )
}

export default Product;