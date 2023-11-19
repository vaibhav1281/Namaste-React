import { useEffect, useState } from "react"
import { SWIGGY_API } from "../../utils/constant";

const useCarousel = () => {

    // const[resCarousel, setResCarousel] = useState(null)
    const[imageIds, setImageIds] = useState([]);
    const[imageIds1, setImageIds1] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState([])
    const[title, setTitle] = useState([])

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch( SWIGGY_API );
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