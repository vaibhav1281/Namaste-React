import BestOffers from "../components/carousels/BestOffers"
import WhatsOnMind from "../components/carousels/WhatsOnMind"
import TopRestaurant from "../components/carousels/TopRestaurant"
import Restaurants from "./Restaurants"
import Footer from "./Footer"


const Body = () =>{
    
    return (
        <div >
            <BestOffers/>
            <WhatsOnMind/>
            <TopRestaurant/>
            <Restaurants/>
            <Footer/>
        </div>
    )
}

export default Body;