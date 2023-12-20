const SearchedRestaurentCard = ({data}) => {
    const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwoMessage, aggregatedDiscountInfoV3 } = data;
    return (
        <div className=' bg-white py-5 cursor-pointer'>
        
            <div className='float-left pl-4'>
                <div className='w-[88px] h-24 float-left rounded-lg'>
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' + cloudinaryImageId} alt="Food-Image" className='w-full h-full rounded-lg' />
                </div>
            </div>
            <div className='flex pl-4 flex-col justify-center min-h-[108px]'>
                <p className='text-[#3e4152] font-semibold text-ellipsis overflow-hidden whitespace-nowrap'>{name}</p>
                <div className='flex text-sm text-[#696b79] font-medium mt-[6px] items-center space-x-2'>
                    <div className="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#696b79" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-[20px] h-[15px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>

                        </span>
                        <p>{avgRating}</p>
                    </div> 
                    <div className="w-[2px] h-1 bg-[#696b79] rounded-full"></div>
                    <span>{sla.slaString}</span> 
                    <div className="w-[2px] h-1 bg-[#696b79] rounded-full"></div>
                    <span>{costForTwoMessage}</span>
                </div>
                <p className='mt-1 text-sm line-clamp-1 text-[#93959f]'>{cuisines.join(", ")}</p>
            </div>
        </div>
  )
}

export default SearchedRestaurentCard