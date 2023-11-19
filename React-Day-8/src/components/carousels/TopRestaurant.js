import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopRestaurantCard from "./TopRestaurantCard";
import useCarousel from "../customHooks/useCarousel";
import ShimmerUI from "../ShimmerUI";
import { Link } from "react-router-dom";

const TopRestaurant = () => {
    const { restaurantInfo, title } = useCarousel();
    
    
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 2000 },
          items: 5
        },
        desktop2:{
          breakpoint: { max: 2000, min: 1400 },
          items: 3.8
        },
        iPadPro:{
          breakpoint: { max: 1400, min: 1200 },
          items: 3
        },
        NestHubMax:{
          breakpoint: { max: 1200, min: 1000 },
          items: 2.5
        },
        
        iPadMini:{
          breakpoint: { max: 850, min: 600 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 600, min: 460 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };
    

    return restaurantInfo.length === 0 ? <ShimmerUI/> : (
        <div className="w-full sticky mt-9">
            <div className="w-9/12 mx-auto">
              <div className="text-[24px] text-[#0206CEB] tracking-[-0.4px] font-bold mb-4">{title.title}</div>
              <Carousel 
                responsive={responsive}  
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  {
                      restaurantInfo.map((restaurant) => (
                          <Link className="pr-3"
                           to={"/restraunt/" + restaurant.info.id}
                            key={restaurant.info.id}>
                            <TopRestaurantCard  
                            resData={restaurant}/>
                          </Link>
                      ))
                  }
              </Carousel>
              <div className="border-b-2 pt-8 pd-2"></div>
            </div>
        </div>
    )
}

export default TopRestaurant;

