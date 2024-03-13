import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Main from "../Components/Main/Main";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // TO DO : Error Element
      children: [
        {
          path: "/",
          elementL: <Home></Home>
        }
      ]
    },
  ]);  