
import {Context} from "../Hoc/ContextProvider"
import { useContext } from "react";



export default function Home(){
    const {setauth,userdata,setuserdata}=useContext(Context)

    function logout(){
        setuserdata("")
        setauth(false)
    }

    return (
        <div className="mt-10">
            <div className="ring-1 w-96 m-auto p-5 ">
                <p>Email id: {userdata}</p>
                <button className="bg-slate-700 text-white w-full mt-2 hover:bg-slate-500 py-1" onClick={()=>logout()}>Log out</button>
            </div>
        </div>
    )
}