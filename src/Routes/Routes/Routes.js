import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Contack from "../../Pages/Contack/Contack";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Others/Login";
import Register from "../../Pages/Others/Register";




export  const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact-us',
                element:<Contack></Contack>
            },
            {
                path:'/jobposter',
                element:<h1>Job Poster</h1>
            },
            {
                path:'/jobseeker',
                element:<h1>Job seeker</h1>
            }

            
        ]
    }

])