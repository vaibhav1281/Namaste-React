import { SWIGGY_API, SWIGGY_MAPI } from "../../utils/constant";
import { useState, useEffect } from "react";

const userRestaurant = () => {

    const[resList, setResList] = useState([]);
    
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const isMobile = window.innerWidth <= 768;
        const API = isMobile ? SWIGGY_MAPI : SWIGGY_API;
        const data = await fetch(API);
        const json = await data.json();
        const ResListDet = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];    
        setResList(ResListDet);
    }

    return {resList};

}

export default userRestaurant;