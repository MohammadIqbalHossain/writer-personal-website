import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Logo from '../../images/book.webp'
import auth from '../../../firebase.init'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth)

    const userSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="flex justify-center md:justify-between items-center p-5 md:px-20">
            <div className="hidden md:block">
                <img className="h-20" src={Logo} alt="" />
            </div>
            <div className="flex gap-4 items-center text-lg">

                <NavLink to='/ '>Home</NavLink>
                <NavLink to="/services">
                    services
                </NavLink>
                {user ? <button onClick={userSignOut}>Sign out</button> :<NavLink to='/login '>Login</NavLink>}

                <NavLink to='/blogs '>Blogs</NavLink>
                <NavLink to='/about-me '>About me</NavLink>

                <NavLink className="bg-green-400 py-2 text-white px-4 rounded-xl" to='/signup'>Sign Up</NavLink>


            </div>

        </div>
    );
};

export default Header;