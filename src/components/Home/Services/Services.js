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
            <p id='services' className="my-10 text-2xl font-bold">Some of my articles</p>
            <h1>THis is test header</h1>

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