import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./ContextProvider";


export default function PrivateRoute({children}){
    const {isAuth} = useContext(Context)

    if (isAuth==false){
        return <Navigate to="/login"/>
    } else {
        return children
    }
}
