import GroupImg from "../assets/banner2img.png"
function BecomeGuide() {
    return (
        <section className="">
            <h1 className="text-5xl md:text-7xl text-text-primery text-center py-10 font-dm-sans">
                Create the magic of human
                <p></p>
                connections while getting paid</h1>

            <div className="min-h-screen relative ">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <img src={GroupImg} alt="group-img" className="w-full h-full object-cover" />
                </div>

                <div className="sticky top-0 md:h-screen bg-pink-50 z-10 md:py-20 md:px-16 px-4 py-10">
                    <GuideSection />
                </div>
            </div>
            <div className="w-full h-px bg-black">

            </div>
            <InfoCards />
        </section>
    )
}


const GuideSection = () => {
    return (
        <section className="px-4 py-8 md:px-16 md:py-16 space-y-20 font-dm-sans text-text-primery" >
            {/* Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <h2 className="text-4xl md:text-5xl leading-snug">
                    Should you be a
                    <p></p>
                    <span className="italic font-playfair">RealRoots guide?</span>
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        If you're a natural host who loves meeting new people and making
                        every guest feel seen and welcomed, this is likely to be the perfect
                        side job for you. RealRoots guides create a fun, inclusive, warm,
                        and vulnerable environment that allows real connections to blossom.
                    </p>

                    <a
                        href="#"
                        className="underline hover:text-gray-900 transition-colors inline-block"
                    >
                        &gt; View all 100+ cities we operate in
                    </a>
                </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <h2 className="text-4xl md:text-5xl font-light leading-snug">
                    Get paid to
                    <p></p>
                    <span className="italic font-playfair">build community</span>
                </h2>

                <div className="text-gray-700 leading-relaxed">
                    <p>
                        As a RealRoots guide, you will help plan, organize and facilitate
                        group outings for small groups of women aged 21 – 65+. This is a
                        super fun job where you socialize and meet other ladies in the
                        community while getting paid. This is a part-time position with
                        events on weekday evenings from 6pm – 9pm and Saturday events from
                        11am – 1pm.
                    </p>
                </div>
            </div>
        </section>
    );
};


const InfoCards = () => {
    const cards = [
        {
            title: "Make a real difference",
            content:
                "The work you do changes lives for the better. There's no greater gift you can give another human than the magic of human connection.",
        },
        {
            title: "5–10 ladies",
            content:
                "Guides lead meaningful & fun bonding experiences. During experiences, they facilitate deep conversations so that participants really get to know each other.",
        },
        {
            title: "1 RealRoots guide",
            content:
                "We pay $20–25/hr in most cities per experience you facilitate. If you love meeting new people and are passionate about helping others, this could be the most meaningful and fun side hustle you can imagine.",
        },
    ];

    return (
        <section className="px-6 py-16 text-center bg-pink-50">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="border bg-white/40 border-gray-400 px-8 pt-8 pb-6 text-left flex flex-col"
                    >
                        <h3 className="text-2xl italic font-light mb-4 font-playfair">{card.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-xs mt-10">{card.content}</p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <button className="text-white mt-10 shadow-md bg-text-primery rounded-full border-none outline-none px-6 py-3 hover:bg-gray-300 cursor-pointer hover:text-black  transition-all hover:scale-105">
                Apply now
            </button>
        </section>
    );
};


export default BecomeGuide