import React from 'react';
import { BsJournalAlbum } from 'react-icons/bs'
import { IoDocumentAttach } from 'react-icons/io5'
import { SiPurescript } from 'react-icons/si'
import { HiDocumentReport } from 'react-icons/hi'
const ServicesTopics = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div style={{ height: "5px" }} className='w-50 bg-green-200'></div>
                <p className='mt-10 mx-10 text-4xl font-extrabold'>My writing Topics.</p>
                <div style={{ height: "5px" }} className='w-50 bg-green-200'></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 bg-gray-100">
                <div className="flex flex-col items-center my-10 ">
                    <div className="text-[50px] bg-[#60ECB6] p-5">
                        <BsJournalAlbum />
                    </div>
                    <h1 className="text-xl mt-5 font-bold">Life Journal</h1>
                    <p className="text-sm text-gray-400 font-light font-serif tracking-widest">I write Journal, you can hire me for write your journal.</p>
                </div>

                <div className="flex flex-col items-center my-10 ">
                    <div className="text-[50px] bg-[#60ECB6] p-5">
                        <HiDocumentReport />
                    </div>
                    <h1 className="text-xl mt-5 font-bold">Case Studies</h1>
                    <p className="text-sm text-gray-400 font-light font-serif tracking-widest">I also work in case study. let me study about your complex issues.</p>
                </div>

                <div className="flex flex-col items-center my-10 ">
                    <div className="text-[50px] bg-[#60ECB6] p-5">
                        <SiPurescript />
                    </div>
                    <h1 className="text-xl mt-5 font-bold">Script Writing</h1>
                    <p className="text-sm text-gray-400 font-light font-serif tracking-widest">If you wanna make tutotial about case study, I will write a script for you, </p>
                </div>

                <div className="flex flex-col items-center my-10 ">
                    <div className="text-[50px] bg-[#60ECB6] p-5">
                        <IoDocumentAttach />
                    </div>
                    <h1 className="text-xl mt-5 font-bold">Documentations</h1>
                    <p className="text-sm text-gray-400 font-light font-serif tracking-widest">I write to give people relief from theire anxiety and frustrations.</p>
                </div>

            </div>
        </div>
    );
};

export default ServicesTopics;