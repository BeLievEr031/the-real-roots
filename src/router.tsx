import { createBrowserRouter } from "react-router-dom"
import Root from "./layouts/Root"
import Home from "./pages/Home";
import RequestNewCity from "./pages/RequestNewCity";
import About from "./pages/About";
import BecomeGuide from "./pages/BecomeGuide";
import Partner from "./pages/Partner";
import Faq from "./pages/Faq";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "request-new-city",
                element: <RequestNewCity />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "become-a-guide",
                element: <BecomeGuide />
            },
            {
                path: "partners",
                element: <Partner />
            },
            {
                path: "faq",
                element: <Faq />
            },
        ]
    }
])

export default router;