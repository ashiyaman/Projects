import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Body = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body