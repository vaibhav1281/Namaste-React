import React from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai"

const Header = () => {
  return (
    <div className="w-full relative flex flex-wrap">
            <div className="flex  relative justify-between w-[1333px] h-[70px] mx-auto">
                {/* logo */}
                <div className="h-[70px] w-[70px] ml-5 cursor-pointer">
                    <img src={logo}/>
                </div>

                {/* nav Items -Home , About, contact US, Cart */}
                <div className=" ">
                    <ul className="flex items-center space-x-6 m-5">
                        <li className=" font-normal text-lg ">
                            <a className="hover:bg-gray-400 hover:text-white px-3 py-1 rounded-full font-semibold"
                             href="#">Home</a>
                        </li>
                        <li className=" font-normal text-lg ">
                            <a className="hover:bg-gray-400 hover:text-white px-3 py-1 rounded-full font-semibold"
                             href="#">About</a>
                        </li>
                        <li className=" font-normal text-lg ">
                            <a className="hover:bg-gray-400 hover:text-white px-3 py-1 rounded-full font-semibold"
                             href="#">Contact Us</a>
                        </li>
                        {/* cart icon */}
                        
                        <li className="">
                            <a className="group relative"
                            href="#"><AiOutlineShoppingCart className="w-[24px] h-[24px]"/>
                            <div className="absolute w-full h-1 bg-gray-400 -bottom-1 hidden group-hover:block  transition-all duration-200 "></div>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
  )
}

export default Header