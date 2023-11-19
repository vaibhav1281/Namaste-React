import { SWIGGY_API } from "../../utils/constant";
import { useState, useEffect } from "react";

const userRestaurant = () => {

    const[resList, setResList] = useState([]);
    

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        const ResListDet = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];    
        setResList(ResListDet);
    
    }

    return {resList};

}

export default userRestaurant;