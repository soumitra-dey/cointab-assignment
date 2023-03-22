import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import PrivateRoute from "../Hoc/PrivateRoute";




export default function AllRoute(){


    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    )
}