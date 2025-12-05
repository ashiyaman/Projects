import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Body = () => {
    return (
        <div className="flex flex-col bg-emerald-300">
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <Outlet/>
            </div>
            
        </div>
    )
}

export default Body