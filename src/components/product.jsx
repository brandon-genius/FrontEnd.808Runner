import "./product.css";
import "./quantityPicker";
import QuantityPicker from "./quantityPicker";
import {useState, useContext} from 'react';
import store from "../context/storeContext";

const Product = (props) => {
    const [quantity, setquantity] = useState(1);
    let addProdToCart = useContext(store).addProdToCart;

    const handleQuantityChange= (val) => {
        console.log("the q changed", val);
        setquantity(val);
    };
    const handleAdd = () => {
        let prod = {...props.info, quantity: quantity};
        addProdToCart(prod);
    }
    
    return(
        <div className="products">
            <h3>{props.info.title}</h3>

            <img src={"/Images/" + props.info.image} alt="Product"></img>

            <div className="prices">
                <label className="total"><span>Total:</span>${((props.info.price * 1) * quantity).toFixed(2)}</label>
                <label className="price"><span>Price: </span>${(props.info.price * 1).toFixed(2)}</label>
            </div>
            <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

            <button onClick={handleAdd} className="btn btn-sm btn-primary">Add to Cart</button>
        </div>
    )
}

export default Product;