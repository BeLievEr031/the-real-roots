import LogoImg from "../assets/logo.svg"
import Link from "./Link"


const linksArr = [
    {
        label: "join in your area",
        href: "#"
    },
    {
        label: "Our series",
        href: "#"
    },
    {
        label: "Become a guide",
        href: "#"

    },
    {
        label: "Request new city",
        href: "#"

    },
    {
        label: "Partner with us",
        href: "#"

    },
]
function Navbar() {
    return (
        <nav className="px-20 py-5 flex justify-between items-center">
            <img src={LogoImg} alt="logo-img" className="w-[150px]" />
            <div className="flex gap-8">
                {
                    linksArr.map((item) => {
                        return <Link label={item.label} href={item.href} />
                    })
                }
            </div>
        </nav >
    )
}

export default Navbar