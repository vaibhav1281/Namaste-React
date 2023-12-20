
const Profile = ({ showProfile, closeProfile }) => {
    return (
        <div className={`fixed top-0 right-0 lg:w-[560px] sm:w-auto h-screen border bg-white drop-shadow-2xl transform transition-transform duration-300 ease-out z-10 ${showProfile ? '' : 'translate-x-full'}`}>
            <button  className="mt-4 flex items-start ml-4" onClick={closeProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div>
                {/* <button  className="mt-4 flex items-start ml-4" onClick={closeProfile}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button> */}

                <div className="ml-10 space-y-8">
                    {/* I will different things */}
                    <div className="flex w-[365px] justify-between mt-6">
                        <div className="text-left space-y-4">
                            <p className="text-2xl text-black">Login</p>
                            <p className="space-x-2">
                                <span className="text-black">or</span>
                                <span className="text-orange-500">create an account</span>
                            </p>
                            <div className="w-8 h-[2px] bg-black"></div>
                        </div>
                        {/* img */}
                        <div className="w-24 h-24">
                            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'}/>
                        </div>
                    </div>

                    <div className="w-[340px]">
                        <div className="flex items-start border-2 border-gray-400 p-5">
                            <input className="outline-none text-gray-600" placeholder="Phone number"></input>
                        </div>
                        <button className="w-[340px] bg-orange-500 text-white p-4 mt-4">LOGIN</button>
                        <p className="text-xs text-gray-500">By clicking on Login, I accept the
                            <span className="text-black">Terms & Conditions</span>&
                            <span className="text-left text-black"> Privacy <p>Policy</p></span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile;
