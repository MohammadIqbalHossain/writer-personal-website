import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import DisplayServices from '../../DisplayServices/DisplayServices';

const Services = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div >

            <div className="my-10">
                <div className="w-[600px] mx-auto h-2 bg-[#60ECB6] my-3"></div>
                <p id='services' className=" text-2xl font-bold">Hire me after reading <br /> Some of my articles</p>
                <div className="w-[600px] mx-auto h-2 bg-[#60ECB6] my-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
                {
                    blogs.map(blog => <DisplayServices
                        key={blog._id}
                        blogs={blog}
                    ></DisplayServices>)
                }
            </div>

        </div>
    );
};

export default Services;