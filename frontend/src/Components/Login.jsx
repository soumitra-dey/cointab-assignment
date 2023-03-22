import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import {Context} from "../Hoc/ContextProvider"
import { useContext } from "react";




export default function Login(){
    const {setauth,setuserdata}=useContext(Context)
    const [data,setdata]=useState({
        email:"", password:""
    })
    const nav=useNavigate()

    function handleupdate(x){
        setdata({
            ...data,
            [x.name]:x.value
        })
    }

    function login(e){
        e.preventDefault()
        console.log(data)
        axios.post("https://shine-developing-gerbil.glitch.me/user/login",data)
        .then((e)=>{
            // console.log(e)
            setauth(true)
            setuserdata(data.email)
            toast.success(e.data)
            nav("/")
        })
        .catch((e)=>{
            // console.log(e)
            toast.error(e.response.data)
        })
    }

    return (
        <div className="mt-10 w-96 m-auto ring-1 ring-gray-200 p-5 rounded">
            <Toaster position="top-center" toastOptions={{duration:4000}}/>
            <form onSubmit={(e)=>login(e)} className="flex flex-col">
                <p className="text-2xl mb-5 font-medium">Login form</p>
                <input type="text" placeholder="Enter email" name="email" onChange={(e)=>handleupdate(e.target)} id="" className="ring-1 rounded-t-md px-2 py-1 drop-shadow-lg outline-none"/>
                <input type="password" name="password" onChange={(e)=>handleupdate(e.target)} id="" placeholder="Enter password" className="ring-1 rounded-b-md px-2 py-1 drop-shadow-lg outline-none"/>
                <input type="submit" name="" id="" placeholder="Submit" className="mt-4 rounded-md bg-green-600 px-2 py-1 text-white text-center hover:bg-green-400 duration-300 cursor-pointer"/>
            </form>
            <p className="mt-5">Not a register user? <Link to="/signup" className="text-blue-700 underline hover:no-underline">Signup now</Link></p>
        </div>
    )
}