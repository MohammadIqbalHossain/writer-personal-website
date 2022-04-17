import React from 'react';
import bannerImage from '../../images/banner-book.png'

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row order-2 md:order-1 justify-center items-center bg-[#60ECB6] py-10">
            <div className="md:w-[500px]">
                <img className="mt-9" src={bannerImage} alt="" />
            </div>
            <div className="md:w-[500px] m-5">
                <h1 className="uppercase text-3xl md:text-5xl text-center md:text-left font-extrabold">A Guide to the Good Life: The Complete Manual</h1>
                <p className="text-lg md:text-left mt-5 md:tracking-widest">
                    One of the great fears we face is that despite our efforts, we will discover that we have wasted our life. I hope my writings gives you the tools to overcome your fears and reach your dreams
                </p>
                <button 
                className="text-xl bg-white block mx-auto md:float-left py-4 px-9 mt-10 hover:bg-transparent hover:border-4
                border-black rounded-full">
                   Hire me, & get Inspired
                </button>
            </div>
        </div>
    );
};

export default Banner;