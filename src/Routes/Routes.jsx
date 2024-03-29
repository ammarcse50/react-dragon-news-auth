import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,

      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
        ,
        {
          path: "/register",

          element: <Register></Register>
        }
        
      ]
    },
  ]);



  export  default router