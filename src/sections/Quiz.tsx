import QuizCard from "../components/QuizCard"
import Card1Img from "../assets/header.svg"
import Card2Img from "../assets/card2.svg"
import { AndroidIcon, IPhoneIcon } from "../components/Icons"
import QuizCaraousal from "../components/QuizCaraousal"
function Quiz() {
    return (
        <section className="px-16 py-20">
            <div className="grid grid-cols-2">

                <div>
                    <h2 className="uppercase font-semibold">✨ AI-Powered Personality Insights ✨</h2>
                    <div className="text-[30px] md:text-[44px] text-text-primery">
                        <h1 className="">“It’s eye-opening to finally
                        </h1>
                        <h1>
                            see
                            <i className="font-playfair mx-3">how others see me.”</i>
                        </h1>
                    </div>
                </div>
                <div className="font-dm-sans ">
                    <p className="text-xl">Take fun and innovative personality quizzes by chatting with AI.</p>
                    <p className="font-semibold text-xl">100% free.</p>

                    <button className="text-white mt-10 shadow-md bg-text-primery rounded-full border-none outline-none px-6 py-3 hover:bg-gray-300 cursor-pointer hover:text-black  transition-all hover:scale-105">
                        Start the voice quiz
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
                <QuizCard
                    buttons={[
                        <button className="text-white mt-5 shadow-md bg-text-primery rounded-md border-none outline-none px-4 py-1 cursor-pointer transition-all hover:scale-95">
                            Take Quiz
                        </button>
                    ]}
                    className="bg-[#D0C7DB] border border-purple-400"
                    desc="Discover how you connect with others and what makes you shine in social settings."
                    img={Card1Img}
                    title="What's your social vibe?"
                    key={1}
                />
                <QuizCard
                    buttons={[
                        <button className="text-white mt-5 shadow-md bg-text-primery rounded-md border-none outline-none px-4 py-1 cursor-pointer transition-all hover:scale-95 flex gap-x-1 items-center">
                            <IPhoneIcon />
                            For iPhone
                        </button>,
                        <button className="text-white mt-5 shadow-md bg-text-primery rounded-md border-none outline-none px-4 py-1 cursor-pointer transition-all hover:scale-95 flex gap-x-1 items-center">
                            <AndroidIcon />
                            <span className="">
                                For android
                            </span>
                        </button>,
                    ]}
                    className="bg-[#EAD7DE] border border-pink-300"
                    desc="Understand your approach to building connections and engaging with new people."
                    img={Card2Img}
                    title="What's your friendship style?"
                    key={2}
                    label={
                        <div className="absolute top-2 right-2 bg-[#D8B5C2] text-[#86465E] text-lg font-[400] rounded-md px-2 py-[2px]">
                            App exclusive
                        </div>
                    }
                />

                <QuizCard
                    buttons={[
                        <button className="text-white mt-5 shadow-md bg-text-primery rounded-md border-none outline-none px-4 py-1 cursor-pointer transition-all hover:scale-95 flex gap-x-1 items-center">
                            <IPhoneIcon />
                            For iPhone
                        </button>,
                        <button className="text-white mt-5 shadow-md bg-text-primery rounded-md border-none outline-none px-4 py-1 cursor-pointer transition-all hover:scale-95 flex gap-x-1 items-center">
                            <AndroidIcon />
                            <span className="">
                                For android
                            </span>
                        </button>,
                    ]}
                    className="bg-[#DCE6ED] border border-blue-300"
                    desc="Understand your approach to building connections and engaging with new people."
                    img={Card2Img}
                    title="What are your core personality traits?"
                    key={3}
                    label={
                        <div className="absolute top-2 right-2 bg-[#B5CCD9]/40 text-[#466F86] text-lg font-[400] rounded-md px-2 py-[2px]">
                            App exclusive
                        </div>
                    }
                />
            </div>

            <QuizCaraousal />
        </section>
    )
}

export default Quiz