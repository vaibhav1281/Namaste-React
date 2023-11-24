import { useParams } from "react-router-dom";
import { BICYCLE } from "../utils/constant"
import useRestrauntMenu from "./customHooks/useRestrauntMenu";
import ShimmerUI from "./ShimmerUI";
import RestaurantCategory from "./RestaurantCategory";


const RestrauntMenu = () => {
    
    const {resId} = useParams()
    const resMenu = useRestrauntMenu(resId);
    
    if(resMenu === null){
        return(
            <div className=" w-full mt-9">
                <div className="w-6/12 mx-auto h-[550px]">
                    <ShimmerUI/>
                </div>
            </div>
        )
    }

    const { name, cuisines, areaName, avgRating, totalRatingsString,costForTwoMessage } = 
    resMenu?.data?.cards[0]?.card?.card?.info;

    const sla = resMenu?.data?.cards[0]?.card?.card?.info?.sla;
    const {lastMileTravelString} = sla ;

    const {offers} = resMenu?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ;
    
 
    const isMobile = window.innerWidth <= 768;
    const cardIndex = isMobile ? 3 : 2;
    const categories = resMenu?.data?.cards[cardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)


    return (
        <div className=" w-full mt-9">
           <div className="w-6/12 mx-auto">
                <div className="flex justify-between relative">
                    <div>
                        <p className="text-[#282c3f] text-[20px] font-semibold leading-tight">{name}</p>
                        <p className="text-[#7e808c] text-[12px] mt-2">{cuisines ? cuisines.join(", ") : ""}</p>
                        <div className="flex items-center">
                            <p className="text-[#7e808c] text-[12px]">{areaName},{lastMileTravelString}</p>
                            <span className="text-orange-400">▾</span>
                        </div>
                    </div>

                    {/* reating */}
                    <div className="border-[1px] box-border rounded-md sm:w-auto">
                        <div className="border-b m-1">
                            <p className="text-[14px] text-[#3d9b6d] font-bold flex py-[8px] justify-center items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#3d9b6d" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3d9b6d" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {avgRating}
                            </p>
                        </div>
                        
                        <p className="text-[#8b8d97] text-[11px] font-semibold py-[8px] m-1">{totalRatingsString}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <img className="w-[18px] h-[18px]" src={BICYCLE}/>
                    <span className="text-[#7e808c] text-[15px]">
                        {resMenu?.data?.cards[0]?.card?.card?.info?.feeDetails.message}
                    </span>  
                </div>

                <div className="border-b-2 border-dashed mt-4"></div>

                <div className="flex gap-4 mt-3 text-[#3e4152] text-[15px] font-bold">
                    <div className="flex items-center ">
                        <svg className="hidden sm:flex mr-[10px]" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle>
                            <path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path>
                        </svg>
                        <span className="mr-[24px] sm:mr-[12px]">{resMenu?.data?.cards[0]?.card?.card?.info?.sla?.slaString}</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="mr-[10px] hidden sm:flex" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" stroke-width="1.5"></circle>
                            <path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path>
                        </svg>
                        <span className=" sm:mr-[12px]">{costForTwoMessage}</span>
                    </div>
                </div>

                <div className="hidden md:flex gap-2 mt-4 overflow-x-auto justify-evenly">
                    {
                        Array.isArray(offers) && offers.map((item) => (
                            <div className="border-2 w-[200px] rounded-md text-[#686b78] text-center">
                                <span className="text-[14px] font-semibold">{item.info.header}</span> <br/>
                                <span className="text-[10px]">{item.info.couponCode}</span>
                            </div>
                        ))
                    }
                </div>

                <div className="border-b-2 mt-16"></div>

                {/* Category Accordion */}
                {
                    Array.isArray(categories) && categories.map((category) => <RestaurantCategory data ={category?.card?.card} />)
                }
                
           </div>
        </div>
    
    )
}

export default RestrauntMenu