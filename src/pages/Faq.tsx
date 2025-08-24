import FaqItem from "../components/FaqItem";

const faqs = [
    {
        question: "Who is RealRoots for?",
        answer: "RealRoots is for anyone who identifies as a woman aged 21+, seeking meaningful new gal pals. The terms 'woman' or 'gal' are inclusive of all woman-identifying individuals. It’s perfect for those new to an area or looking to expand their social circle with openness and heart."
    },
    {
        question: "Is RealRoots for older women too?",
        answer: "Yes! RealRoots is for all women 21+. If you're over 45+, there are Meet & Greet groups specifically for the 45+ demographic. Group matching considers age to ensure you’re matched with peers."
    },
    {
        question: "How are gal groups matched?",
        answer: "After signing up, you’ll complete a detailed survey. RealRoots uses your responses—such as life stage, approximate age, lifestyle, and proximity—to match you thoughtfully into a compatible gal group."
    },
    {
        question: "How long does a series last?",
        answer: "A series includes 7 experiences over 6 weeks, typically held on the same weekday (Tue, Wed, or Thu). Each session features intentional activities and conversations."
    },
    {
        question: "How long does each experience last?",
        answer: "Each experience runs from 6:30 PM – 9 PM. You’re welcome to socialize with the group afterward. The fee covers activities and facilitation by a RealRoots Guide; food and drinks are additional."
    },
    {
        question: "When does the next series start?",
        answer: "Series dates vary by city. You can view them by selecting your city from the 'Join In Your City' dropdown. New cohorts begin every two weeks. Sample activities include mini-golf, scavenger hunts, arcade nights, happy hour games, and guided conversations."
    },
    {
        question: "When do I need to commit to the full series?",
        answer: "You first attend a Meet & Greet for $25, where you meet your gal group and Guide. At the end of that session, you may choose to commit to the full 7-session series for an additional $289, which includes all activities and facilitation. Food and drinks are purchased separately."
    },
    {
        question: "What happens if I need to miss an experience?",
        answer: "While attendance is encouraged for all sessions, you can miss one or two. Just inform your Guide promptly so they can adjust planning accordingly."
    },
    {
        question: "Is it still worth it if I need to miss 1–2 experiences?",
        answer: "Absolutely! Most women miss 1–2 sessions yet still benefit greatly as long as they attend at least 5 out of 7. If you know you'll miss 3 or more, consider joining a later series for a better experience."
    },
    {
        question: "What’s your refund policy?",
        answer: "Refunds are not offered for Meet & Greets. Series refunds are rare and only considered under serious, extenuating circumstances on a case-by-case basis. If you’re dissatisfied, RealRoots can rematch you under their Guarantee."
    },
    {
        question: "How does the RealRoots Guarantee work?",
        answer: "If at the end of the Meet & Greet or series you haven't met at least one gal pal you’re excited about, RealRoots will rematch you for free—either to a new Meet & Greet or new series, depending on attendance."
    },
    {
        question: "What’s included in the series fee?",
        answer: "The series covers event planning, activity costs, and facilitation by a trained RealRoots Guide. Food and beverages are extra and available for purchase."
    }
];

function Faq() {
    return (
        <section className="px-16 py-20">
            <h1 className="text-5xl text-center">FAQ</h1>
            <div className="mt-10">
                {
                    faqs.map(({ answer, question }) => {
                        return <FaqItem answer={answer} question={question} />
                    })
                }
            </div>
        </section>
    )
}

export default Faq