import BestOffers from "../components/carousels/BestOffers"
import WhatsOnMind from "../components/carousels/WhatsOnMind"
import TopRestaurant from "../components/carousels/TopRestaurant"
import Restaurants from "./Restaurants"


const Body = () =>{
    
    return (
        <div >
            <BestOffers/>
            <WhatsOnMind/>
            <TopRestaurant/>
            <Restaurants/>
        </div>
    )
}

export default Body;