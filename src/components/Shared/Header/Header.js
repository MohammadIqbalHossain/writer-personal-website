import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../images/book.webp'
import auth from '../../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth)
    const [navbarOpen, setNavbarOpen] = useState(false);

   
    return (
        <>

            <nav className="relative  flex-wrap justify-between px-2 py-3">
                <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            to="/"
                        >
                            <img className="h-10" src={Logo} alt="" />
                        </Link>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-green-200 block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <AiOutlineMenu color="red" />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row  list-none lg:ml-auto">

                            <li className="md:mr-5">
                                <NavLink to='/' className={({ isActive }) => isActive ? "text-green-400 underline underline-offset-4" : ""} >
                                    Home
                                </NavLink>
                            </li>

                            <li className="md:mr-5">
                                <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-green-400 underline underline-offset-4" : ""}>
                                    Blogs
                                </NavLink>
                            </li>

                            <li className="md:mr-5">
                                <NavLink to='/about-me' className={({ isActive }) => isActive ? "text-green-400 underline underline-offset-4" : ""}>
                                    About
                                </NavLink>
                            </li>


                            <li className="nav-item  md:mr-5">
                                {user ? <button onClick={() => signOut(auth)}
                                    className=""
                                >Sign Out
                                </button>
                                    : <Link
                                        className=""
                                        to="/login"
                                    >
                                        <span className="ml-2">Login</span>
                                    </Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;