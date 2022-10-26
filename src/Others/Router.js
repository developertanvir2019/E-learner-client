import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Faq from "../component/Faq/Faq";
import Home from "../component/Home/Home";
import Main from "../component/Layout/Main";
import Login from "../component/Login/Login";
import Register from "../component/Register'/Register";
import SingleCourse from "../component/SingleCourses/SingleCourse";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({ params }) => fetch(`https://assignment-server-10-developertanvir2019.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://assignment-server-10-developertanvir2019.vercel.app/courses`)
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
        ]
    }
])