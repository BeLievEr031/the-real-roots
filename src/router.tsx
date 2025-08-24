import { createBrowserRouter } from "react-router-dom"
import Root from "./layouts/Root"
import Home from "./pages/Home";
import RequestNewCity from "./pages/RequestNewCity";

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
        ]
    }
])

export default router;