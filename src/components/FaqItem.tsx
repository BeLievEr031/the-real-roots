import clsx from "clsx";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Iprop {
    question: string;
    answer: string;
}
function FaqItem({ question, answer }: Iprop) {
    const [open, setOpen] = useState(false);

    return (
        <div className="max-w-4xl mx-auto pt-3 font-dm-sans">

            <div className="border border-gray-200 rounded-lg px-6 py-4 bg-white">

                <div className="flex justify-between">
                    <h2 className="text-lg text-gray-900">
                        {question}
                    </h2>
                    <button
                        onClick={() => setOpen(!open)}
                        className=" text-gray-500 hover:text-black"
                    >
                        <Plus size={20} className={clsx("transition-all duration-100", {
                            "rotate-45": open,
                            "rotate-0": open,
                        })} />
                    </button>
                </div>

                {/* Answer */}
                <div
                    className={clsx(
                        "overflow-hidden transition-all duration-200",
                        open ? "max-h-[500px]" : "max-h-0"
                    )}
                >
                    <p className="text-gray-700 leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>

    );
}

export default FaqItem