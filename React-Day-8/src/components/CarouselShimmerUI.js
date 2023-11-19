import React from "react"; 
import { useEffect, useState } from "react";

const CarouselShimmerUI = () => {
    const [showImage, setShowImage] = useState('first');

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage('second');
        }, 1000); // Change this to the number of milliseconds you want to wait

        return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);

    return(
        <div className='h-96 bg-[#171a29] flex flex-col items-center justify-center'>
            <div className='relative flex flex-col items-center'>
                <div className="absolute animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-500 mx-auto"></div>
                {showImage === 'first' && (
                    <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
                    alt="ice-cream"
                    className='w-11 mt-3'
                    />
                )}
                {showImage === 'first' && (
                    <div className='text-white text-xl font-bold mt-6'>Looking for great food near you...</div>
                )}
                {showImage === 'second' && (
                    <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/noodles_tsizbk"
                    alt="noodles"
                    className='w-11 mt-3'
                    />
                )}
                {showImage === 'second' && (
                    <div className='text-white text-xl font-bold mt-6'>Welcome To Vaibhav</div>
                )}
            </div>
            {/* <div className='text-white text-xl font-bold mt-6'>Looking for great food near you...</div> */}

            <div></div>
        </div>
    )
}

export default CarouselShimmerUI
