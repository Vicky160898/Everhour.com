import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
export default function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/> */}
    </Routes>
    </>
}