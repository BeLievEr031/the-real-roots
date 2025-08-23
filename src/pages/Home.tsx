import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import HowItWorks from "../sections/HowItWorks"
import MakeFriends from "../sections/MakeFriends"
import Review from "../sections/Review"

function Home() {
    return (
        <div className='font-dm-sans'>
            <Header />
            <Navbar />
            <Hero />
            <HowItWorks />
            <MakeFriends />
            <Review />
        </div>
    )
}

export default Home