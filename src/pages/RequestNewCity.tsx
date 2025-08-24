import MapImg from "../assets/map.png"
import Countries from "../sections/Countries";
export default function RequestNewCity() {
    return (
        <section className="bg-white px-6 md:px-16 py-12">
            <h1 className="text-8xl text-text-primery text-center py-10 font-dm-sans">Join the waitlist</h1>
            <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left - Form */}
                <div>
                    <h2 className="text-3xl md:text-4xl text-text-primery mb-4 font-dm-sans">
                        Join the waitlist for <br />
                        RealRoots in <span className="italic font-playfair">your city</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Are we not in your <a href="#" className="">city</a> yet?
                        Join the waitlist to become a RealRoots member. We’re launching in
                        new cities every month and will let you know as soon as we launch in yours :)
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="first_name">First name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black mt-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="last_name">Last name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-text-primery mt-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                required
                                name="email"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mt-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="experiences">Where do you want to attend RealRoots experiences?*</label>
                            <input
                                type="text"
                                name="experiences"
                                required
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mt-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="other">Anything else?</label>
                            <textarea
                                name="other"
                                rows={2}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black mt-2"
                            ></textarea>
                        </div>

                        <button className="text-white mt-10 shadow-md bg-text-primery rounded-full border-none outline-none px-10 text capitalize text-lg py-3 hover:bg-gray-300 cursor-pointer hover:text-black  transition-all hover:scale-105">

                            send
                        </button>
                    </form>
                </div>

                {/* Right - Map Image */}
                <div className="flex justify-center">
                    <img
                        src={MapImg}
                        alt="US Map with Pins"
                        className="rounded-2xl shadow-md"
                    />
                </div>
            </div>
            <div className="w-full h-px bg-black/50 mt-20" />
            <Countries />
        </section>
    );
}
