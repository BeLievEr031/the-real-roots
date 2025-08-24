import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"

function Root() {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root