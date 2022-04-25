import "./catelog.css";
import Product from "./product";

const Catelog = () => {
    return(
        <div className="catelog">
            <h1 className="">List of Products Below</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    )
}

export default Catelog;