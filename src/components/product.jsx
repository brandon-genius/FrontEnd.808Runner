import "./product.css";
import "./quantityPicker";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return(
        <div className="products">
            <h3>Carbon Plate Shoes</h3>

            <img src="/Images/alphafly.nike.jpg"/>

            <label>$250.99</label>

            <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;