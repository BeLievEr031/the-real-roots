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
        <div className="relative w-ful">
            {!desc2 && <img src={img} alt={img} className={
                clsx("w-full object-cover h-full")
            } />}

            {desc2 && <div className="h-[80vh]">
                <img src={img} alt={img} className={
                    clsx("w-full object-cover h-full")
                } />
            </div>}

            <div className="absolute top-0 left-0 w-full z-[999] text-white px-16 pt-28">
                <h1 className="text-6xl">{title}</h1>
                <p className="font-playfair italic text-6xl mt-3">{cursiveTitle}</p>
                <p className="w-[70%] mt-5 text-xl">{desc1}</p>
                <p className="w-[70%] mt-3 text-xl">{desc2}</p>
                <button className="bg-blue-100 capitalize px-7 py-4 rounded-full mt-10 text-black">
                    {btntext}
                </button>
            </div>

            {desc1 && <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/96 to-transparent">

            </div>}
        </div>
    )
}

export default Banner