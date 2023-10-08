import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import restaurantList from '../utils/mockData'
import RestaurantCard from './RestaurantCard'

const Body = () => {

    const[resList, setResList] = useState(restaurantList)

  return (
    <div className="flex flex-wrap w-full relative">
          <div className="w-full h-10 flex flex-wrap ">
            <div className="flex items-center justify-center mb-8 w-[1400px] mx-auto relative">
              <button className="relative w-[45%]">
                <input
                  type="text" 
                  name="" 
                  id="" 
                  placeholder="Search..." 
                  className="shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 w-full mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out"
                />
                <div className="absolute right-7 top-7">
                  <AiOutlineSearch  className="w-[22px] h-[22px]"/>
                </div>
              </button>
            </div>
              
          </div>

          {/* Filters */}
          <div>
            <button
            className="shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 w-full mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setResList(filteredList);
            }}
            >Ratings 4.0+</button>
          </div>

          <div className="w-full  mx-auto flex flex-wrap">
            <div className="w-[1200px] flex flex-wrap gap-5 mx-auto mt-14 justify-center items-center">
              {
                resList.map((restaurant) => (
                  <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))
              }
            </div>
          </div>
          
          
      </div>
  )
}

export default Body