import Banner from "../components/Banner"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import HowItWorks from "../sections/HowItWorks"
import MakeFriends from "../sections/MakeFriends"
import Review from "../sections/Review"
import Banner1Img from "../assets/banner1img.avif"
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
        </div>
    )
}

export default Home