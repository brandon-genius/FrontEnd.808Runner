import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productinCart";

const Cart = () => {
  const cart = useContext(store).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }
    return "$" + total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Items in your Bag</h1>
      <h5>Currecntly you have {cart.length} items in your bag</h5>
      <div className="cart-content">
        <div className="products">
          {cart.map((prod) => (
            <ProductInCart key={prod._id} info={prod}></ProductInCart>
          ))}
        </div>
      </div>
      <div className="side-panel">
        <h6>Ready to Buy?</h6>
        <h5>{getTotal()}</h5>
        <hr />
        <button className="btn btn-block btn-primary">Proceed</button>
      </div>
    </div>
  );
};
export default Cart;
