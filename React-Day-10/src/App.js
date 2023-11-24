import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestrauntMenu from "./components/RestrauntMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Help from "./components/pages/Help";
import Search from "./components/pages/Search";

const App = () => {
    return(
        <div className="">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    { 
        path: "/", 
        element: <App />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/help",
                element:<Help/>,
            },
            {
                path:"/search",
                element:<Search/>,
            },
            {
                path:"/restraunt/:resId",
                element: <RestrauntMenu/>,
            }
            
        ],
        errorElement: <Error/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)