import HeaderImg from "../assets/header.svg"
function Header() {
    return (
        <div className="px-2 py-4 flex justify-between md:justify-center items-center md:gap-5 bg-purple-50 border-b-[0.5px]">
            <img src={HeaderImg} alt={HeaderImg} className="md:inline hidden" />
            <div>
                <h1 className="font-semibold">
                    What's your social vibe? ✨
                </h1>
                <p className="hidden md:block">
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