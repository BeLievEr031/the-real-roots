import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import QuizImg1 from "../assets/howitimg2.png"
import QuizImg2 from "../assets/quiz2.png"
import QuizImg3 from "../assets/quiz3.png"
import QuizImg4 from "../assets/quiz4.png"
import QuizImg5 from "../assets/quiz5.png"
import QuizImg6 from "../assets/quiz6.png"
import QuizImg7 from "../assets/quiz7.png"
import QuizImg8 from "../assets/quizz8.png"
import QuizCarausalCard from './QuizCarausalCard';

const images = [
    QuizImg1,
    QuizImg2,
    QuizImg3,
    QuizImg4,
    QuizImg5,
    QuizImg6,
    QuizImg7,
    QuizImg8,
]
function QuizCaraousal() {
    return (
        <div className='mt-10'>
            <Swiper navigation={false} className="mySwiper"
                slidesPerView={4} // 👈 show 4 slides in view
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
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
            >

                {
                    images.map((item, index) => {
                        return <SwiperSlide key={index} className='overflow-hidden !w-[432px] !h-[400px] group pt-10'>
                            <QuizCarausalCard img={item} />
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    )
}

export default QuizCaraousal