import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Catelog from "./components/catelog";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1> Welcome to 808runner </h1>
      <Catelog></Catelog>
      

      <Footer></Footer>
    </div>
  );
}


export default App;
