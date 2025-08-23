

interface IProp {
    img: string;
    heading: string;
    description: string;
}
function MaskCard({ img, description, heading }: IProp) {
    return (
        <div className="bg-pink-100 overflow-hidden rounded-3xl group">
            <img
                src={img}
                alt=""
                className="[mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:cover] group-hover:scale-110 transition-all duration-500 h-[380px] w-full object-cover"

            />
            <div className="pb-8 px-5">
                <h1 className="text-[28px] text-text-primery">
                    {heading}
                </h1>
                <p className="text-text-primery">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MaskCard