import { useEffect, useState } from "react"
import { SWIGGY_API,SWIGGY_MAPI } from "../../utils/constant";

const useCarousel = () => {

    const[imageIds, setImageIds] = useState([]);
    const[imageIds1, setImageIds1] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState([])
    const[title, setTitle] = useState([])

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const isMobile = window.innerWidth <= 768;
        const API = isMobile ? SWIGGY_MAPI : SWIGGY_API;
        const data = await fetch(API);
        const json = await data.json();

        const info = json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
        setImageIds(info.map((item) => item.imageId));
        

        const info1 = json?.data?.cards[1]?.card?.card?.imageGridCards?.info || []
        setImageIds1(info1.map((item) => item.imageId));

        const card = json?.data?.cards[2]?.card?.card?.header || []
        setTitle(card);

        const topRestaurentInfo = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        setRestaurantInfo(topRestaurentInfo);
    }

    return {  imageIds, imageIds1, restaurantInfo, title };
   
}

export default useCarousel;