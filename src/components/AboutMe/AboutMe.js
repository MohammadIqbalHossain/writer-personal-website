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
                    <p className="text-lg font-serif">I have several goals in next five monts, first, I wanna flim an "arrora borenils", Second, get a development job, Third, Explore andromeda with powerful telscope. And work for free education. </p>

                    <h1 className="text-3xl text-gray-500 my-4">Dedication.</h1>
                    <p className="text-lg font-serif">I can't explain how much dedicated I am to accomplish this task, I tried many time to teach me coding, but I failed! I failed again and again, Now in this momnet, I can see hope, I think i have learned somethng, this course helped me a lot. off course I feel so tired in this ending, but I know I can do it. And I will make it.</p>

                    <h1 className="text-3xl text-gray-500 my-4">Skills</h1>
                    <p className="text-lg font-serif">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavsScript</li>
                            <li>React</li>
                        </ul>
                    </p>

                    <h1 className="text-3xl text-gray-500 my-4">Hobbies.</h1>
                    <p className="text-lg font-serif">I like reading books, some of my favourite book is Hooked, flow, The things you can see when you slow down, Man search for menaing. I also like watching movies ad TV shows, "Breaking bad" is my favourite TV show, "The shawshank redemtion" is my favourite movie</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;