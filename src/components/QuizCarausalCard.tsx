
interface IProp {
    img: string;
}
function QuizCarausalCard({ img }: IProp) {
    return (
        <div className="h-full w-full ">
            <div className='text-xs flex group-hover:opacity-100 justify-between opacity-0 transition-all translate-y-1/2 group-hover:-translate-y-1/2'>
                <p>@REALROOTSGAL</p>
                <p>1 Day ago</p>
            </div>
            <div className='w-full h-full overflow-hidden'>
                <img src={img} alt="" className='transition-all cursor-pointer group-hover:scale-105 w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default QuizCarausalCard