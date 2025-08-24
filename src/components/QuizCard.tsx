import clsx from "clsx";
import type { ReactNode } from "react";

interface IProp {
    className: string;
    img: string;
    title: string;
    desc: string;
    label?: ReactNode;
    buttons: ReactNode[]
}
function QuizCard({ buttons, className, desc, img, title, label }: IProp) {
    return (
        <div className={clsx("relative flex flex-col items-center py-10 px-15 rounded-xl  font-dm-sans mt-15", className)}>

            <img src={img} alt={img} className="text-center w-[140px] h-[140px]" />
            <p className="text-center mt-4 text-[18px] font-semibold">{title}</p>
            <p className="text-center text-text-primery text-sm mt-1">{desc}</p>
            <div className="flex gap-x-2">
                {
                    buttons.map((item) => {
                        return item
                    })
                }
            </div>

            {
                label
            }
        </div>
    )
}

export default QuizCard