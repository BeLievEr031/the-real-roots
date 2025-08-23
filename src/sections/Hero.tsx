
function Hero() {
    return (
        <section className="h-screen font-dm-sans">
            <div className="pt-16 w-[70%] mx-auto">
                <h1 className="text-8xl text-text-primery text-center">Make new friends, guaranteed</h1>
                <p className="pt-5 text-text-primery text-center w-[64%] mx-auto">Get matched with a group of carefully curated women in your city and enjoy a series of guided, shared experiences together. All you have to do is show up.
                </p>
            </div>
            <div className="flex justify-center">
                <button className="text-white mt-10 shadow-md bg-text-primery rounded-full border-none outline-none px-6 py-3 hover:bg-gray-300 cursor-pointer hover:text-black  transition-all hover:scale-105">
                    Meet your matches
                </button>
            </div>
        </section>
    )
}

export default Hero