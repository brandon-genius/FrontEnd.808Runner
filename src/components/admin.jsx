import "./admin.css";
import {useState} from 'react';



const Admin = () => {
        const[product, setProduct] = useState({})
        const[coupon, setCoupon] = useState({})
        const [errorVisible, setErrorVisible] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
        
        const handleTextChange = (e) => {
            let copy = {...product};
            copy[e.target.name] = e.target.value;

            setProduct(copy);
        };

        const showError = (text) => {
            setErrorMessage(text);
            setErrorVisible(true);
        };

        const handleSaveProduct = () => {
            console.log(product);

            let savedProduct = {...product};
            savedProduct.price = parseFloat(savedProduct.price);

            //validations
            if(product.title.length < 5) {
                showError("Error, Title should have atleast 5 characters");
                return;
            };

            if(!product.image) {
                showError("Error, image cannot be empty");
                return;    
            };

            if(!product.category) {
                showError("Error, category cannot be empty");
                return;    
            };

            if(!savedProduct.price || savedProduct.price < 1) {
                showError("Error, Price should be greater than $1");
            return;
            };
            setErrorVisible(false);
        };
        const handleCouponChange = (e) => {
            let copy = {...coupon};
            copy[e.target.name] = e.target.value;

            setCoupon(copy);
        };

        const handleSaveCoupon = () => {
            console.log(coupon);

            let savedCoupon = {...coupon};
            savedCoupon.discount = parseFloat(savedCoupon.discount);

            //validations
            //1 discount not >35
            if(!savedCoupon.discount || savedCoupon.discount > 35) {
                showError("Error, discount cannot be greater than 35% or lower than 1");
                return;
            };
            //// 2 code should have atleast 5 char
            if(savedCoupon.code.length < 5) {
                showError("Error, code should contain atleast 5 characters");
                return;
            };
            setErrorVisible(false);
            //send coupon gto server
            console.log("Saving Coupon")
        };

    return(
        <div className="admin-page">
          {errorVisible ?   <div className="alert alert-danger">{errorMessage}</div> : null}

            <div className="sections-container">
                <section className="section-products">
                    <h4>Manage Products</h4>

                    <div className="form">
                        <div className="my-control">
                            <label>Title:</label>
                            <input onChange={handleTextChange} name="title" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Image:</label>
                            <input onChange={handleTextChange} name="image" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Category:</label>
                            <input onChange={handleTextChange} name="category" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Price:</label>
                            <input onChange={handleTextChange} name="price" type="number" />
                        </div>
                        <div className="my-control">
                            <button onClick={handleSaveProduct} className="btn btn-dark">Register Product</button>
                        </div>
                    </div>
                </section>

                <section className="section-coupons">
                    <h4>Manage Coupon Codes</h4>

                    <div className="form">
                        <div className="my-control">
                            <label>Code:</label>
                            <input onChange={handleCouponChange} name="code" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Category:</label>
                            <input onChange={handleCouponChange} name="category" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Discount:</label>
                            <input onChange={handleCouponChange} name="discount" type="number" />
                        </div>
                        <div className="my-control">
                            <button onClick={handleSaveCoupon} className="btn btn-dark">Save Coupon</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;
