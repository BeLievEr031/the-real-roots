import Banner from "../components/Banner"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import HowItWorks from "../sections/HowItWorks"
import MakeFriends from "../sections/MakeFriends"
import Review from "../sections/Review"
import Banner1Img from "../assets/banner1img.avif"
import Banner12Img from "../assets/banner2img.png"
import Countries from "../sections/Countries"

function Home() {
    return (
        <div className='font-dm-sans'>
            <Header />
            <Navbar />
            <Hero />
            <HowItWorks />
            <MakeFriends />
            <Review />
            <Banner
                img={Banner1Img}
                title="Friendship"
                cursiveTitle="100% Guaranteed"
                btntext="learn more"
            />
            <Countries />
            <Banner
                img={Banner12Img}
                title="Join a community of"
                cursiveTitle="thousands of women like you"
                desc1="After your 6 week series you’ll become a member of the entire RealRoots grad community in your city, and enjoy weekly members-only events, curated 1-1 friend matches, and an exclusive chat group."
                desc2="Once you join RealRoots, you’ll have a community of friends for life."
                btntext="join now"
            />
        </div>
    )
}

export default Home