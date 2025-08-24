import QuizImg1 from "../assets/howitimg2.png"
import QuizImg2 from "../assets/quiz2.png"
import QuizImg3 from "../assets/quiz3.png"
import QuizImg4 from "../assets/quiz4.png"
import QuizImg5 from "../assets/quiz5.png"
import QuizImg6 from "../assets/quiz6.png"
import QuizImg7 from "../assets/quiz7.png"
import QuizImg8 from "../assets/quizz8.png"
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
function CommonCarausal() {
    return (
        <div className='mt-4 md:mt-10 flex gap-x-2 overflow-hidden'>
            <div className='flex gap-x-2 overflow-hidden animate shrink-0'>
                {
                    images.map((item) => {
                        return <div className='h-[600px] w-[400px] shrink-0 flex items-center'>
                            <img src={item} alt="" className=' transition-all cursor-pointer group-hover:scale-105 w-full rounded-2xl' />
                        </div>
                    })
                }
            </div>

            <div aria-hidden className='flex gap-x-2 overflow-hidden animate shrink-0'>
                {
                    images.map((item) => {
                        return <div className='h-[600px] w-[400px] shrink-0 flex items-center'>
                            <img src={item} alt="" className=' transition-all cursor-pointer group-hover:scale-105 w-full rounded-2xl' />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CommonCarausal