import CommonCarausal from "../components/CommonCarausal"

function Partner() {
    return (
        <section className="px-4 md:px-16 py-10">
            <h1 className="text-5xl md:text-7xl text-text-primery text-center pt-10 font-dm-sans">
                Partner with RealRoots</h1>
            <p className="text-sm text-text-primery text-center mt-2">Promote your business to our community of tens of thousands of women via the RealRoots Partnership Program.</p>
            <CommonCarausal />
            <Partnerships />
            <div className="text-center py-10 text-text-primery font-dm-sans">
                <p>Fill out the form below, and if we think our community would be interested, we’ll advertise it to them.</p>
                <p className="mt-4">Tip: Offer the best offer you can afford to entice immediate traffic. If necessary, we can amend the offer later upon request.</p>
                <button className="text-white mt-10 shadow-md bg-text-primery rounded-full border-none outline-none px-6 py-3 hover:bg-gray-300 cursor-pointer hover:text-black  transition-all hover:scale-105">
                    Enter your offer
                </button>
                <p className="mt-8">Have another partnership question? We also partner with venues for our meet & greets and series events. Email us at info@therealroots.com if you are interested in hosting regular events with us!</p>
            </div>
        </section>
    )
}

import { Check } from "lucide-react"; // for checkmark icons

const Partnerships = () => {
    return (
        <section className=" px-6 py-20 space-y-16 font-dm-sans text-text-primery border-b border-b-black/80">
            {/* Section 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <h2 className="text-3xl md:text-4xl font-light">
                    Reach tens of thousands of <span className="italic font-playfair">women</span>
                </h2>

                {/* Right */}
                <div className="text-gray-700 space-y-4">
                    <p>
                        Are you a business manager looking to reach our community of tens of
                        thousands of women?
                    </p>
                    <p>
                        RealRoots partners with companies to promote “Buy one and get one
                        free” deals inside our community, as it aligns with our mission of
                        encouraging real–world socialization. We do not take a cut or charge
                        you for promoting your offer. All offers need to be valued at $30+.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <h2 className="text-3xl md:text-4xl font-light">You’ll receive:</h2>

                {/* Right */}
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                        <Check className="text-purple-500 mt-1" size={20} />
                        Free promotion via SMS and email to our community
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-purple-500 mt-1" size={20} />
                        Recurring revenue: users come in pairs and only one is free
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-purple-500 mt-1" size={20} />
                        Our long-term customers can become yours too
                    </li>
                </ul>
            </div>

            {/* Section 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <h2 className="text-3xl md:text-4xl font-light">
                    Ideal <span className="italic font-playfair">partnerships</span>
                </h2>

                {/* Right */}
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Restaurants offering BOGO meals</li>
                    <li>Pottery studios that offer BOGO classes</li>
                    <li>Salons that offer BOGO manicures</li>
                    <li>Exhibits that offer BOGO tickets</li>
                </ul>
            </div>
        </section>
    );
};


export default Partner