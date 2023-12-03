import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import About from "../components/About/About";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/service/:id",
                element: <PrivateRoutes>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoutes>,
                loader: ({params})=> fetch('/data.json')
                .then(res => res.json())
                .then(data => data.filter((value)=> value.id == params.id))
            },
            {
                path: "/contact",
                element: <PrivateRoutes>
                    <Contact></Contact>
                </PrivateRoutes>
            }
        ]

    }
])

export default routes;