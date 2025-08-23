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
        <div className="relative w-full">
            <img src={img} alt={img} className="w-full object-cover" />

            <div className="absolute top-0 left-0 w-full z-[999] text-white px-16 pt-28">
                <h1 className="text-6xl">{title}</h1>
                <p className="font-playfair italic text-6xl mt-3">{cursiveTitle}</p>
                <p>{desc1}</p>
                <p>{desc2}</p>
                <button className="bg-blue-100 capitalize px-7 py-4 rounded-full mt-10 text-black">
                    {btntext}
                </button>
            </div>
        </div>
    )
}

export default Banner