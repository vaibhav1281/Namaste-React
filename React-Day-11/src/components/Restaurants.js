import { Link } from "react-router-dom"
import RestaurantCard from "./RestaurantCard"
import ShimmerUI from "./ShimmerUI"
import userRestaurant from "./customHooks/userRestaurant"
import FilterButtons from "./filterButtons/FilterButtons"
import { useState, useEffect } from "react";


const Restaurants = () =>{
    
    const {resList} = userRestaurant()
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() => {
        setFilteredRes(resList);
    }, [resList]);

    return  resList.length === 0 ? <ShimmerUI/> : (
        <div className="w-full mt-9 justify-between items-center">
            <div className="w-9/12 flex flex-wrap mx-auto mb-20">
                <div className="text-[24px] text-[#0206CEB] tracking-[-0.4px] font-bold mb-4">Restaurants with online food delivery in Bangalore</div>
                <FilterButtons  resList={resList} setFilteredRes={setFilteredRes} />
                <div className="flex flex-wrap gap-4">
                {filteredRes && Array.isArray(filteredRes) && (
                    filteredRes.map((restaurant) => (
                        <Link
                            to={"/restraunt/" + restaurant.info.id}
                            key={restaurant.info.id}
                        >
                            <RestaurantCard  restData={restaurant} />
                        </Link>
                    ))
                )}
                </div>
              
            </div>
          </div>
    )
}

export default Restaurants