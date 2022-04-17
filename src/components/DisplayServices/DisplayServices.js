import React from 'react';
import { Link } from 'react-router-dom';

const DisplayServices = ({ blogs }) => {
    const { des, name, picture, price } = blogs;
    
    return (

        <div>
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={picture} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-left">{name}</h5>
                   
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{des}
                        <button
                            className="btn btn-link">
                            Read more..
                        </button>
                    </p>
                    <p className="text-left mb-5">Support me to continue: {price}</p>
                    
                    <button className="btn btn-accent block md:mx-auto ">
                        <Link className="text-center" to="/checkout">
                            Checkout
                        </Link>
                    </button>
                </div>

            </div>
        </div>

    );
};

export default DisplayServices; <h1>Display services</h1>