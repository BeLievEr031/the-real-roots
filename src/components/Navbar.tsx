import { Link } from "react-router-dom"
import LogoImg from "../assets/logo.svg"
import NavLink from "./Link"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import { useState } from "react"


const linksArr = [
    {
        label: "join in your area",
        href: "#"
    },
    {
        label: "Our series",
        href: "about"
    },
    {
        label: "Become a guide",
        href: "become-a-guide"

    },
    {
        label: "Request new city",
        href: "request-new-city"

    },
    {
        label: "Partner with us",
        href: "partners"

    },
]
function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className={
            clsx("relative px-4 md:px-20 py-4 flex justify-between items-center",)
        }>
            <Link to={"/"}>
                <img src={LogoImg} alt="logo-img" className="w-[150px] inline" />
            </Link>
            <div className="md:flex gap-8 hidden">
                {
                    linksArr.map((item) => {
                        return <NavLink label={item.label} href={item.href} />
                    })
                }
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden">
                {!open ? <Menu /> : <X />}
            </button>

            <div className={
                clsx("absolute top-0 left-0 w-full transition-all h-screen bg-white md:hidden -translate-y-full flex flex-col opacity-0 pointer-none pt-20 items-center duration-300", {
                    'translate-y-0 top-full opacity-100': open
                })
            }>
                {
                    linksArr.map((item) => {
                        return <NavLink label={item.label} href={item.href} />
                    })
                }
            </div>
        </nav >
    )
}

export default Navbar