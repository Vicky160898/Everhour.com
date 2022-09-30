import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Integration from "./Integration";
export default function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path="/integration" element={<Integration/>}/> */}
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/> */}
    </Routes>
    </>
}