import LogoImg from "../assets/logo.svg"
import NavLink from "./Link"


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
        href: "#"

    },
    {
        label: "Request new city",
        href: "request-new-city"

    },
    {
        label: "Partner with us",
        href: "#"

    },
]
function Navbar() {
    return (
        <nav className="px-20 py-4 flex justify-between items-center">
            <img src={LogoImg} alt="logo-img" className="w-[150px] hidden md:inline" />
            <div className="md:flex gap-8 hidden">
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