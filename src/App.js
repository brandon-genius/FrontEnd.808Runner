import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Catelog from "./components/catelog";
import Todo from "./components/todo";
import Home from "./components/home";
import Admin from "./components/admin";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/about";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/catelog" element={<Catelog/>}></Route>
            <Route path="/shoppingList" element={<Todo/>}></Route>
          </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}


export default App;
