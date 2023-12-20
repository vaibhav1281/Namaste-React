const FilterButtons = ({ resList, setFilteredRes }) => {
    return (
        <div className="w-full mx-auto  overflow-x-auto outline-none bg-white mb-8" >
            <ul className="flex gap-2">
                <li
                    className="cursor-pointer shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 inline-block mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out h-10  flex-shrink-0"
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.avgRating > 4.0
                        );
                        setFilteredRes(filteredList);
                    }}
                >
                    Ratings 4.0+
                </li>

                <li
                    className="cursor-pointer shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 inline-block mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out h-10  flex-shrink-0"
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.sla.deliveryTime <= 20
                        );
                        setFilteredRes(filteredList);
                    }}
                >Fast Delivery</li>

                <li
                    className="cursor-pointer shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 inline-block mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out h-10  flex-shrink-0"
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.avgRatingString = "NEW"
                        );
                        setFilteredRes(filteredList);
                    }}
                >New on Swigg</li>

                <li
                    className="h-10  flex-shrink-0 cursor-pointer shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 inline-block mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out"
                    onClick={() => {
                        const filteredList = resList.filter(
                            (res) => res.info.feeDetails.totalFee > 4.0
                        );
                        setFilteredRes(filteredList);
                    }}
                >Less than Rs. 300</li>

                

                <li
                    className="cursor-pointer shadow-lg border-2 border-gray-400 rounded-full py-2 px-4 inline-block mt-4 hover:border-black transition border-opacity-50 duration-300 ease-in-out h-10  flex-shrink-0"
                >Rs. 300-Rs. 600</li>
            
            </ul>
        </div>
    )
}

export default FilterButtons
