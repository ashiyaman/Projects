import { Outlet } from "react-router-dom"

import Sidebar from "../components/Sidebar"

const Body = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Body