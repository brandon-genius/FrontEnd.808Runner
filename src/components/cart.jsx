import{useContext} from "react";
import store from "../context/storeContext";


const Cart = () => {
        const cart = useContext(store).cart;
    return(
        <div>
            <h1>Items in your Bag</h1>
            <h5>Currecntly you have {cart.length} items in your bag</h5>
        </div>

    )
};
export default Cart;