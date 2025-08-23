import { MoveLeft, MoveRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useRef } from "react";

function Review() {
    // Create refs for custom navigation
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    return (
        <section className="bg-pink-100 md:px-16 md:py-20 py-20 px-4">
            <div className="md:flex justify-between items-end">
                <div>
                    <h2 className="uppercase font-semibold">Made for women of all ages (21+)</h2>
                    <div className="text-[44px] text-text-primery ">
                        <h1 className="">What
                            <i className="font-playfair mx-3">RealRoots,</i>
                        </h1>
                        <h1 className="-translate-y-[15%]">
                            <i className="font-playfair mx-3">grads</i>
                            are saying.
                        </h1>
                    </div>
                </div>
                <div className="flex gap-4 pr-10">
                    <button className="w-18 h-18 border rounded-full flex justify-center items-center cursor-pointer" ref={prevRef}>
                        <MoveLeft />
                    </button>
                    <button className="w-18 h-18 border rounded-full flex justify-center items-center cursor-pointer" ref={nextRef}>
                        <MoveRight />
                    </button>
                </div>

            </div>
            <div className="mt-4 md:mt-10 pb-10">
                {/* <ReviewCarausal /> */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // @ts-ignore - because Swiper types don't know about refs yet
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // 👈 1 card on mobile
                        },
                        640: {
                            slidesPerView: 2, // 👈 optional tablet view
                        },
                        1024: {
                            slidesPerView: 4, // 👈 desktop view
                        },
                    }}
                    className="mySwiper"
                >
                    {/* Example slides */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <SwiperSlide
                            key={i}
                            className="px-4 md:px-10 py-5 md:py-12 border rounded-xl font-dm-sans bg-white/35"
                        >
                            <p>Paola H., {25 + i}</p>
                            <p>Brooklyn, NY</p>
                            <div className="text-5xl">”</div>
                            <p>
                                Uprooting my life and leaving my close friend group behind in
                                another state was hard. I don’t usually have trouble making
                                friends, but after more than a year in Brooklyn, I only had one
                                solid friend. Between working remotely and being chronically
                                “busy,” I was struggling. I’ve made some friends through Real
                                Roots that I really click with.
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Review