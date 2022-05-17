import React from 'react';

let store = React.createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdfromCart: () => {},
});
    



export default store;