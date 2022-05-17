import "./home.css";
import {Link} from 'react-router-dom';
import {useContext} from "react";
import store from "../context/storeContext";

const Home = () => {
    const user = useContext(store).user;
    return(
        <div className="home-page">
            <h6>Welcome back {user.email}</h6>
            <div className="top-banner">
                <div className="top-banner-text">
                    <h1>Welcome to Run 808</h1> 
                    <h2>Run - Breath - Feel - Live</h2>
                </div>
                <img src="/Images/run808.jpg" alt="run better"/>
            </div>

            <div>
                <Link className="btn btn-lg btn-primary" to="/catelog">
                    Check out the Catelog!
                </Link>
            </div>
        </div>
    );
};

export default Home;