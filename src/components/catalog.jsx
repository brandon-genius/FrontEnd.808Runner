import "./catelog.css";
import Product from "./product";
import {useState, useEffect} from 'react';
import DataService from "../services/dataService";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadCatalog  =  async () => {
        const service = new DataService();
        let prods = service.getCatelog();
        //set prods to state variable
        setProducts(prods);
    };

    useEffect(() => {
        //do something when comp is displayed
        loadCatalog();
}, []);

    return(
        <div className="catelog">
            <h1 className="">List of Products Below</h1>
            <h4>We have {products.length} items for sale!</h4>
            
            {products.map((prod) => (
                <Product key={prod._id} info={prod}></Product>
            ))}
        </div>
    )
}

export default Catalog;