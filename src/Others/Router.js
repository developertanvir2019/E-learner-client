import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Course from "../component/Courses/Course";
import CourseDetails from "../component/Courses/CourseDetails";
import Courses from "../component/Courses/Courses";
import Premium from "../component/Courses/Premium";
import Error from "../component/Error/Error";
import Faq from "../component/Faq/Faq";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import Login from "../component/Login/Login";
import Register from "../component/Register'/Register";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://assignment-server-10-developertanvir2019.vercel.app/courses`),
                children: [
                    {
                        path: '/courses',
                        element: <Course></Course>,
                        loader: () => fetch(`https://assignment-server-10-developertanvir2019.vercel.app/courses`),
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`https://assignment-server-10-developertanvir2019.vercel.app/courses/${params.id}`)
                    },
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/premium/:id',
                element: <PrivateRouter> <Premium></Premium></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignment-server-10-developertanvir2019.vercel.app/courses/${params.id}`)
            }
        ]
    }
])