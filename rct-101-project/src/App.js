import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./component/Navbar";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Mid from "./component/Mid";
import Slider from "./component/Slider";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes /> */}
      <Slider/>
    </div>
  );
}

export default App;
