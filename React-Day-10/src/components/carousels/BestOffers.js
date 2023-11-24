import useCarousel from "../customHooks/useCarousel";
import { BEST_SLIDER } from "../../utils/constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselShimmerUI from "../CarouselShimmerUI";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3200 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3200, min: 1024 },
    items: 2.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BestOffers = () => {
  const { imageIds } = useCarousel();

  return imageIds.length === 0 ? <CarouselShimmerUI/> : (
    <div className="w-full sticky mt-9">
      <div className="w-9/12 mx-auto">
            <div className="text-[24px] text-[#0206CEB] tracking-[-0.4px] font-bold mb-4">Best offers for you</div>   
            
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                ssr={true}>
                {
                imageIds.map((items, index) => {
                    return (
                    
                        <img
                        className="w-full h-full md:w-auto md:h-auto rounded-3xl pr-4 cursor-pointer"
                        alt="Vaibhav Saroj"
                        src={`${BEST_SLIDER}/${items}`} key={index} />
                    
                    )
                })
                }
            </Carousel>
      </div>
      
    </div>
    
  )
}

export default BestOffers;
