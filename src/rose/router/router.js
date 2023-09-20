// import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Home from "../home";
import Contact from "../contacts";
import Setting from "../settlings";
import About from "../about";
import Count from "../cont/count";
import ErrorPage from "../error-page";

export const Hello= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element:<Home />},
            {
                path: "/contacts",
                element: <Contact/>
            },

            { 
                path: "/settlings", 
                element:<Setting />},
            { 
                path: "/about", 
                element:<About />},
            { 
                path: "/count", element:<Count />}
        ]
    },
])
