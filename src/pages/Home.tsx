import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import HowItWorks from "../sections/HowItWorks"
import MakeFriends from "../sections/MakeFriends"

function Home() {
    return (
        <div className='font-dm-sans'>
            <Header />
            <Navbar />
            <Hero />
            <HowItWorks />
            <MakeFriends />
        </div>
    )
}

export default Home