import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestrauntMenu from "./components/RestrauntMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Help from "./components/pages/Help";
import Search from "./components/pages/Search";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/pages/Cart";
import Offers from "./components/pages/Offers";
import Profile from "./components/pages/Profile";
// import Footer from "./components/Footer";

const App = () => {
    return(
        <Provider store={appStore}>
            <div className="">
                <Header/>
                <Outlet/>
                {/* <Footer/> */}
            </div>
        </Provider>
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
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/offers",
                element:<Offers/>,
            },
            {
                path:'/vaibhav/profile',
                element:<Profile/>
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