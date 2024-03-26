import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../Components/Main/Main";
import AllCategoris from "../Components/Allcategoris/AllCategoris/AllCategoris";
import Book from "../Components/Book/Book/Book";
import Food from "../Components/Food/Food/Food";
import Cloth from "../Components/Cloth/Cloth/Cloth";
import Mobile from "../Components/Mobile/Mobile/Mobile";
import Watch from "../Components/Watch/Watch/Watch";
import Register from "../Components/AuthVerify/Register/Register";
import Login from "../Components/AuthVerify/Login/Login";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // TO DO : Error Element
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/allCategoris",
          element: <AllCategoris></AllCategoris>
        },
        {
          path: "/book",
          element: <Book></Book>
        },
        {
          path: "/food",
          element: <Food></Food>
        },
        {
          path: "/cloth",
          element: <Cloth></Cloth>
        },
        {
          path: "/watch",
          element: <Watch></Watch>
        },
        {
          path: "/mobile",
          element: <Mobile></Mobile>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
        
      ]
    },
  ]);  