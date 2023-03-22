import { createContext, useState } from "react";

export const Context=createContext()

export default function ContextProvider({children}){
    const [isAuth,setauth]=useState(false)
    const [userdata,setuserdata]=useState("")

    return <Context.Provider value={{isAuth,setauth,userdata,setuserdata}}>{children}</Context.Provider>
}