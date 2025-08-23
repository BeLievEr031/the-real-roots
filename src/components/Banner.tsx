import clsx from "clsx";

interface Iprop {
    img: string;
    title: string;
    cursiveTitle: string;
    desc1?: string;
    desc2?: string;
    btntext: string;
}
function Banner({ title, cursiveTitle, img, desc1, desc2, btntext }: Iprop) {
    return (
        <div className={
            clsx("relative w-full", {
                "h-[40vh] md:h-auto": !desc1,
            })
        }>
            {!desc2 && <img src={img} alt={img} className={
                clsx("w-full object-cover h-full")
            } />}

            {desc2 && <div className="h-[80vh]">
                <img src={img} alt={img} className={
                    clsx("w-full object-cover h-full")
                } />
            </div>}

            <div className="absolute top-0 left-0 w-full z-[999] text-white px-4 pt-14 md:px-16 md:pt-28">
                <h1 className="text-4xl md:text-6xl">{title}</h1>
                <p className="font-playfair italic text-4xl md:text-6xl mt-3">{cursiveTitle}</p>
                <p className="md:w-[70%] mt-5 md:text-xl">{desc1}</p>
                <p className="md:w-[70%] mt-3 md:text-xl">{desc2}</p>
                <button className="bg-blue-100 capitalize px-7 py-4 rounded-full mt-4 md:mt-10 text-black">
                    {btntext}
                </button>
            </div>

            {desc1 && <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/96 to-transparent">

            </div>}
        </div>
    )
}

export default Banner