import { useState, useEffect } from "react";
import userRestaurant from "../customHooks/userRestaurant";
import RestaurantCard from "../RestaurantCard";
import { Link } from "react-router-dom";
import FilterButtons from "../filterButtons/FilterButtons";
import ShimmerUI from "../ShimmerUI";
import Footer from "../Footer";

const Offers = () => {
    const { resList } = userRestaurant([]);
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() => {
        setFilteredRes(resList);
    }, [resList]);

    return resList.length === 0 ? <ShimmerUI/> :  (
        <div className="w-full select-none">

            <div className="w-9/12 mx-auto  mb-10">
                <h1 className="text-2xl font-bold mt-10">Restaurants With Great Offers Near Me</h1>
                <FilterButtons  resList={resList} setFilteredRes={setFilteredRes} />
            </div>

            <div className="w-9/12 flex flex-wrap mx-auto mb-20">
                <div className="flex flex-wrap gap-4">
                    {/* Map through the list of restaurants and display them */}
                    {filteredRes && Array.isArray(filteredRes) && (
                        filteredRes.map((restaurant) => (
                            <Link
                                to={"/restraunt/" + restaurant.info.id}
                                key={restaurant.info.id}
                            >
                                <RestaurantCard restData={restaurant} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    );
};

export default Offers;
