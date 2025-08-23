import HeaderImg from "../assets/header.svg"
function Header() {
    return (
        <div className="py-5 flex justify-center items-center gap-5 bg-purple-50">
            <img src={HeaderImg} alt={HeaderImg} />
            <div>
                <h1 className="font-semibold">
                    What's your social vibe? ✨
                </h1>
                <p>
                    Take a fun & free personality quiz to find out!
                </p>
            </div>
            <div className="font-semibold">
                Take Quiz
            </div>
        </div>
    )
}

export default Header