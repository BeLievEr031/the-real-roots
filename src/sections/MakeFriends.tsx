import GroupImg from "../assets/groupimg.png"
import GatheringImg from "../assets/gathring.avif"
function MakeFriends() {
    return (
        <section className="mt-16">
            <div className="min-h-screen relative ">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <img src={GroupImg} alt="group-img" className="w-full h-full object-cover" />
                </div>

                <div className="sticky top-0 bg-pink-50 z-10 h-screen py-20 px-16">
                    <div className="grid grid-cols-2">
                        <div>

                            <h2 className="uppercase font-semibold">The easy way to make friends</h2>
                            <div className="text-[44px] text-text-primery">
                                <h1 className="">No
                                    <i className="font-playfair mx-3">swiping,</i>
                                </h1>
                                <h1>
                                    no
                                    <i className="font-playfair mx-3">small</i>
                                    talks.
                                </h1>
                            </div>
                        </div>
                        <div className="mt-8">
                            Every RealRoots experience is led by an amazing guide who facilitates deep conversation and fun activities with your group. It's the fast-track way to make a new group of friends, without any of the awkwardness.
                        </div>
                    </div>
                    <img src={GatheringImg} alt="" className="h-[500px] w-full object-cover mt-10 rounded-3xl" />
                </div>
            </div>
        </section>
    )
}

export default MakeFriends