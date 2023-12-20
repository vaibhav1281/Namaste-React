import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WHATS_ON_MIND } from "../../utils/constant";
import useCarousel from "../customHooks/useCarousel";
import ShimmerUI from "../ShimmerUI";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3200 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3200, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


const WhatsOnMind = () => {

    const { imageIds1 } = useCarousel();

    return imageIds1.length === 0 ? <ShimmerUI/> : (
        <div className="w-full sticky mt-9">
            <div className="w-9/12 mx-auto border-b-2">
                <p className="text-[24px] text-[#0206CEB] tracking-[-0.4px] font-bold mb-4">What's on my mind?</p>
                {imageIds1 && Array.isArray(imageIds1) && (
                    <Carousel 
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        ssr={true}>
                        {
                            imageIds1.map((image,index) =>
                                <img
                                  className="w-full h-full md:w-auto md:h-auto pr-6 pb-10 cursor-pointer"
                                src={`${WHATS_ON_MIND}/${image}`} key={index}/>
                            )
                        }
                    </Carousel>
                )}
            </div>
        </div>
    )
}

export default WhatsOnMind