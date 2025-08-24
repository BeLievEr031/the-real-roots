import { Link } from "react-router-dom";

interface IProp {
    label: string;
    href: string;

}
function NavLink({ href, label }: IProp) {
    return (
        <Link
            to={href}
            className="relative capitalize 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:h-[1px] after:w-full after:bg-black 
                        after:scale-x-0 after:origin-right 
                        after:transition-transform after:duration-300 
                        hover:after:scale-x-100 hover:after:origin-left text-md"
        >
            {label}
        </Link>
    )
}

export default NavLink