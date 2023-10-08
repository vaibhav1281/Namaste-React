import React from 'react'
import { CDN_URL } from '../utils/constant'
import {CiStar} from "react-icons/ci"


const RestaurantCard = (props) => {
    const {restData} = props;
    const {name,costForTwo,cuisines,avgRating,areaName} = restData?.info;

    const aggregatedDiscountInfoV3 = restData?.info?.aggregatedDiscountInfoV3;
    // Check if aggregatedDiscountInfoV3 exists before destructuring
    const { header, subHeader } = aggregatedDiscountInfoV3 || {};
  return (
    <div className="w-[275px] group hover:shadow-lg rounded-xl hover:scale-90 transition-transform duration-200 ease-in-out cursor-pointer relative">
      <div className="relative">
        <img
          className="w-[275px] h-[275px] rounded-xl"
          src={CDN_URL + restData.info.cloudinaryImageId}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparen opacity-55 rounded-xl">
          <div className="absolute bottom-0 left-0 right-0 text-white text-center py-2 px-3">
            <p className=" text-start text-2xl font-bold leading-6 text-white">{header} {subHeader}</p>
          </div>
        </div>
      </div>
 
      <p className="p-3 py-1 text-lg font-bold leading-6 tracking-[-0.3px] text-[#02060CBF]">
        {name.length > 25 ? `${name.substr(0, 25)}...` : name}
      </p>
      <p className="px-3 py-1 flex items-center gap-1 text-[#02060CBF]">
        <CiStar className=" bg-green-400 rounded-full" /> {avgRating}
      </p>
      <p className="px-3 py-1 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
        {cuisines.length > 3 ? `${cuisines.slice(0, 3).join(", ")}...` : cuisines.join(", ")}
      </p>
      <p className="px-3 pb-2 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
        {areaName}
      </p>
    </div>

  )
}

export default RestaurantCard