
const Help = () => {
    return(
        <div className="bg-[#37718e] h-screen w-full">

            <div className="text-white w-9/12 mx-auto pt-8 pb-8">
                <p className="text-2xl font-extrabold">Help & Support</p>
                <p className="text-lg">Let's take a step ahead and help you better.</p>
            </div>
            <div className="bg-white w-9/12 h-[600px] mx-auto">
                <img className="w-auto h-auto mx-auto" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_660/swiggy_one/my_account_super'}/>

                <button className="flex lg:hidden mx-auto border-orange-500 text-white text-xl font-bold bg-orange-500 p-4 rounded-lg mt-8">
                    <a href="/">Go Back Home</a>
                </button>
            </div>
        </div>
    )
}

export default Help