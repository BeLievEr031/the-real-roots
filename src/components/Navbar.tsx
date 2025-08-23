import LogoImg from "../assets/logo.svg"
function Navbar() {
    return (
        <nav>
            <img src={LogoImg} alt="logo-img" />
            <div>
                <p className="capitalize">join in your area</p>
            </div>
        </nav>
    )
}

export default Navbar