import { IMAGE_CDN } from "../../utils/constant"

const SearchCards = ({resInfo}) => {
    console.log(resInfo)
    const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwoMessage, aggregatedDiscountInfoV3 } = resInfo;
    return (
        <div>
            <div>
                <img 
                    src={IMAGE_CDN + cloudinaryImageId}
                />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default SearchCards