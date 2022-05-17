import store from "./storeContext";
import { useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";


const GlobalStoreProvider = (props) => {
    let [cart, setCart] = useState([]);
    let [mockUser, setMockUser] = useState({id: 42, email:"brandon@webkitURL.com"});

    let addProdToCart = (prod) => {
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    let removeProdFromCart = () => {
        console.log("Removing Prod");
    };

    return(
        <store.Provider 
            value={{
                cart: cart,
                user: mockUser,
                addProdToCart: addProdToCart,
                removeProdFromCart: removeProdFromCart,
            }}
        >
            {props.children}
        </store.Provider>
    );
};

export default GlobalStoreProvider;