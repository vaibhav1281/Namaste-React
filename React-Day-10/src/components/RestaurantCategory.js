
const RestaurantCategory = (data) =>{
    console.log(data)
    return(
        <div>
            <div className="flex justify-between">
                <span>{data.data.title}({data.data.itemCards.length})</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default RestaurantCategory