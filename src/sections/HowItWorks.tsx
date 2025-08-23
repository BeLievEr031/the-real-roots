import Img1 from "../assets/howitimg1.png"
import Img2 from "../assets/howitimg2.png"
import Img3 from "../assets/howitimg3.png"
import Img4 from "../assets/howitimg4.png"
import MaskCard from "../components/MaskCard"

function HowItWorks() {
    return (
        <section className="px-20 font-dm-sans">
            <h2 className="uppercase font-semibold">How it works</h2>
            <div className="text-[44px] text-text-primery">
                <h1 className="">Make
                    <i className="font-playfair mx-3">real</i>
                    connections,
                </h1>
                <h1>
                    build
                    <i className="font-playfair mx-3">lasting</i>
                    friendships.
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-10 pt-10">
                <MaskCard img={Img1} description="Fill out a short survey and get matched with a group of like-minded women in your city." heading="Tell us about yourself" />
                <MaskCard img={Img2} description="An amazing RealRoots guide will lead your group through guided conversations over a glass of wine or non-alcoholic bev." heading="Meet your group in person" />
                <MaskCard img={Img3} description="Fill out a short survey and get matched with a group of like-minded women in your city." heading="Tell us about yourself" />
                <MaskCard img={Img4} description="Fill out a short survey and get matched with a group of like-minded women in your city." heading="Tell us about yourself" />
            </div>

        </section>
    )
}

export default HowItWorks