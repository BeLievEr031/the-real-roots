import CommonCarausal from "../components/CommonCarausal"
import FounderImg from "../assets/founder.png"
function About() {
    return (
        <section>
            <h1 className="text-5xl md:text-7xl text-text-primery text-center py-10 font-dm-sans">
                We create meaningful
                <p></p>
                female friendships that last</h1>
            <CommonCarausal />
            <OurSeries />
            <Founders />
        </section>
    )
}



const OurSeries = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left heading */}
            <div>
                <h2 className="text-4xl md:text-5xl font-light leading-snug font-dm-sans">
                    Our <span className="italic font-playfair">series</span>
                </h2>
            </div>

            {/* Right content */}
            <div className="space-y-6 text-gray-700 leading-relaxed font-dm-sans">
                <p>
                    Get expertly matched with a gal group near you. Your $25 Meet & Greet
                    ticket includes guided conversations with your group of compatible
                    women led by a trained RealRoots facilitator, a free drink, and our
                    guarantee that you’ll either love your group or we’ll rematch you for
                    free :)
                </p>

                <p>
                    Each RealRoots series is <strong>$289</strong> and designed as a{" "}
                    <strong>6-week series</strong> of fun experiences + deep conversations
                    with the same group of wonderful women. And we{" "}
                    <em>guarantee it’ll work</em> for you or we'll rematch you and do it
                    again for free.
                </p>

                <p>
                    After your series, you'll join the larger RealRoots Gal Community with
                    hundreds of RealRoots grads for curated outings, events, and a
                    dedicated chat group.
                </p>

                <p>
                    Want to see your specific series details?{" "}
                    <a
                        href="#"
                        className="underline hover:text-gray-900 transition-colors"
                    >
                        Find your ideal start date here.
                    </a>
                </p>

                {/* Button */}
                <div>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 rounded-full text-gray-800 hover:bg-gray-100 transition-all">
                        Learn more
                        <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

const Founders = () => {
    return <>

        <img src={FounderImg} alt="" className="w-full object-cover md:h-screen" />
        <div className="max-w-6xl mx-auto space-y-16 font-dm-sans py-20 px-4">
            {/* About the Founders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <h2 className="text-3xl md:text-4xl text-text-primery">
                    About <span className="italic font-playfair">the founders</span>
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Hi, we're Dorothy and Tara! We created RealRoots to create{" "}
                    <span className="italic font-medium">meaningful female friendships that last.</span>{" "}
                    After having moved several times each, we both felt the{" "}
                    <span className="italic">loneliness</span> of being separated from our social circles,
                    and the <span className="italic">awkwardness and slowness</span> of rebuilding our
                    community from scratch. We are passionate about building RealRoots because it's
                    exactly the product we wanted for ourselves.{" "}
                    <span className="text-black">🖤</span>
                </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Why our series works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <h2 className="text-3xl md:text-4xl text-text-primery">
                    Why our series <span className="italic font-playfair">actually works:</span>
                </h2>
                <div className="space-y-6 text-gray-700">
                    <p>We know that real friendships form when:</p>
                    <ul className="space-y-2">
                        <li>
                            <span className="mr-2">→</span>
                            You share <span className="font-semibold italic">multiple</span> fun experiences with the same people
                        </li>
                        <li>
                            <span className="mr-2">→</span>
                            You share <span className="font-semibold italic">real</span> parts of yourself.
                        </li>
                    </ul>
                    <p>
                        We designed the RealRoots series so that you see the same gals week after week
                        for 6 weeks. By sharing fun times as well as deep chats, you'll leave the program
                        with a strong foundation for new friendships.
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default About