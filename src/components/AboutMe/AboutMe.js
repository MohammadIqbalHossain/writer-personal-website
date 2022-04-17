import React from 'react';
import iqbalImage from '../images/iqbal.jpg';
const AboutMe = () => {
    return (
        <div>
           
            <div className="flex flex-col md:flex-row justify-center items-center ">
                <div className="md:w-[500px] md:order-1 order-2">
                    <img className="rounded-full w-8/12 border-4 border-green-400 mx-auto" src={iqbalImage} alt="" />
                </div>
                <div className="text-left md:w-[500px] m-5 md:order-2 order-1">
                <h1 className="text-4xl font-bold">Hi, what's up? I'm Iqbal 👏 ✨</h1>
                    <h1 className="text-3xl text-gray-500 my-4">My goals in next five monts.</h1>
                    <p className="text-lg font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta quod nemo officia numquam doloribus, recusandae repellat fugit unde quaerat.</p>

                    <h1 className="text-3xl text-gray-500 my-4">Dedication.</h1>
                    <p className="text-lg font-serif">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore mollitia architecto laboriosam voluptatibus, veritatis voluptate?</p>

                    <h1 className="text-3xl text-gray-500 my-4">Skills</h1>
                    <p className="text-lg font-serif">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit et ullam, repellendus soluta neque iure </p>

                    <h1 className="text-3xl text-gray-500 my-4">Study.</h1>
                    <p className="text-lg font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ex.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;