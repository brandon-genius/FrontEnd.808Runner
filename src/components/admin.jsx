import "./admin.css";
import {useState} from 'react';



const Admin = () => {
        const[product, setProduct] = useState({})
        
        const handleTextChange = (e) => {
            let copy = {...product};
            copy[e.target.name] = e.target.value;

            setProduct(copy);
        };

        const handleSaveProduct = () => {
            console.log(product);
        };

        const[coupon, setCoupon] = useState({})
        
        const handleTextChange1 = (e) => {
            let copy = {...coupon};
            copy[e.target.name] = e.target.value;

            setCoupon(copy);
        };

        const handleSaveProduct1 = () => {
            console.log(coupon);
        };

    return(
        <div className="admin-page">
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
                            <input onChange={handleTextChange1} name="title" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Category:</label>
                            <input onChange={handleTextChange1} name="category" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Discount:</label>
                            <input onChange={handleTextChange1} name="price" type="number" />
                        </div>
                        <div className="my-control">
                            <button onClick={handleSaveProduct1} className="btn btn-dark">Save Coupon</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;
