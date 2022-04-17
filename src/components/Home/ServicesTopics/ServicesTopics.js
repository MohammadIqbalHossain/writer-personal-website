import React from 'react';
import { BsJournalAlbum } from 'react-icons/bs'
const ServicesTopics = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-10">
            <div className="flex flex-col items-center my-10 ">
                <div className="text-[50px] bg-[#60ECB6] p-5">
                    <BsJournalAlbum />
                </div>
                <h1 className="text-xl mt-5 font-bold">Life Journal</h1>
                <p className="text-sm text-gray-400 font-light font-serif tracking-widest">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="flex flex-col items-center my-10 ">
                <div className="text-[50px] bg-[#60ECB6] p-5">
                    <BsJournalAlbum />
                </div>
                <h1 className="text-xl mt-5 font-bold">Life Journal</h1>
                <p className="text-sm text-gray-400 font-light font-serif tracking-widest">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="flex flex-col items-center my-10 ">
                <div className="text-[50px] bg-[#60ECB6] p-5">
                    <BsJournalAlbum />
                </div>
                <h1 className="text-xl mt-5 font-bold">Life Journal</h1>
                <p className="text-sm text-gray-400 font-light font-serif tracking-widest">Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="flex flex-col items-center my-10 ">
                <div className="text-[50px] bg-[#60ECB6] p-5">
                    <BsJournalAlbum />
                </div>
                <h1 className="text-xl mt-5 font-bold">Life Journal</h1>
                <p className="text-sm text-gray-400 font-light font-serif tracking-widest">Lorem ipsum dolor sit amet consectetur</p>
            </div>
           
        </div>
    );
};

export default ServicesTopics;