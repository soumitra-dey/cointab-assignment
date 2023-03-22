import { Link } from "react-router-dom";



export default function Navbar(){


    return (
        <div className="p-5 bg-slate-700 ">
            <div className="text-white flex justify-end gap-10 text-lg">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/login" className="hover:underline">Login</Link>
            </div>
        </div>
    )
}