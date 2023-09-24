import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./images/logo.png"

const Heading = () => {
  return(
    <div>
      <div className="flex justify-between w-full h-[80px]">

        <img className="w-[80px] h-[80px] ml-10" src={logo} alt="logo" />
        
        <div className="">
          <ul className="flex flex-row space-x-10 text-lg mt-5 mr-10 font-semibold">
            <li><a href="#">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#contactus">Contact us</a></li>
          </ul>
        </div>


      </div>

      <div className="w-full h-10 flex items-center justify-center">
        <input
            type="text" 
            name="" 
            id="" 
            placeholder="Search..." 
            className="border border-gray-300 rounded py-2 px-4 w-[45%] mt-4"
            
        />
      </div>


    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)