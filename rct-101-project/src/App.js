import logo from './logo.svg';
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './component/Navbar';
import Login from './Pages/Login';
import Footer from './Pages/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    {/* <AllRoutes/> */}
    <Navbar/>
    {/* <Login/> */}
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
