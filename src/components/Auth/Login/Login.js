import React, { useEffect, useState } from 'react';
import './Login.css';
import avatar from '../../images/login/avatar.svg'
import wave from "../../images/login/wave.png"
import bg from '../../images/login/bg.svg'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import Spinner from '../../Shared/Spinner/Spinner';



const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        general: ""

    })

    // console.log(userInfo.email)
    // console.log(errors.emailError);
    // console.log(errors);



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // console.log(error);


    // code for handle email and setting user data to the state.
    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserData({ ...userData, email: e.target.value })
            setErrors({ ...errors, emailError: "" })
        } else {
            setErrors({ ...errors, emailError: "Invalid email" })
            setUserData({ ...userData, email: "" })
        }

    }

    // console.log(userData);
    // console.log(errors)

    // code for handle password and setting user data to the state.
    const handlePassword = e => {
        const passRegex = /.{6,}/;
        const validPassword = passRegex.test(e.target.value);
        console.log(validPassword);
        if (validPassword) {
            setUserData({ ...userData, password: e.target.value })
            setErrors({ ...errors, passwordError: "" })
        } else {
            setErrors({ ...errors, passwordError: "Password too short" })
            setUserData({ ...userData, password: "" });
        }

    }


    //function for submit the form.
    const handleOnSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userData.email, userData.password);
    }


    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);


    //Function for send user email reset.
    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(userData.email);
        toast("Check your mail");
    }


    //sign in with google state.
    const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError] = useSignInWithGoogle(auth);


    // const handleContinueWithGoogle = () => {
    //     signInWithGoogle(userInfo.email) 
    // }


    //sign in with github state.
    const [signInWithGithub,
        githubUser,
        githubLoading,
        GithubError] = useSignInWithGithub(auth);

    console.log(googleUser || githubUser);

    useEffect(() => {
        switch (error?.code) {
            case "auth/invalid-email":
                toast("Invalid email")
                break;
            case "auth/user-not-found":
                toast("Sign in first or reset password")
                break;
            case "auth/wrong-password":
                toast("Please enter right password");
                break;
            default:
                break;
        }

    }, [error, googleError, GithubError]);



    // let from = location.state?.from?.pathname || "/";
    // if (user || googleUser) {
    //     navigate(from, { replace: true });
    // }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || googleUser) {
        navigate(from, { from, replace: true });
    }


    // sorry, I can't used spiner becaue there is an error if I use spinner, my toast are not displaying because of spinner loads the page first, and functions cant't get data and spinners are also disappered. I don't know how to handle it.

    // if (loading || googleLoading || githubLoading) {
    //     return <Spinner />
    // }


    return (
        <div className="mb-30">
            <img className="wave" src={wave} />
            <div className="container">
                <div className="img">
                    <img src={bg} />
                </div>
                <div className="login-content">
                    <form onSubmit={handleOnSubmit}>
                        <img className="w-full mx-auto" src={avatar} />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <FaUserAlt />
                            </div>
                            <div className="div">
                                <h5>Email</h5>
                                <input
                                    onChange={handleEmail}
                                    type="text"
                                    className="input outline-none"
                                    required
                                />

                            </div>

                        </div>
                        {errors?.emailError && <p className="text-red-500 text-xs">{errors.emailError}</p>}
                        <div className="input-div pass">
                            <div className="i">
                                <AiFillLock />
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input
                                    onChange={handlePassword}
                                    className="outline-none input"
                                    type="password"
                                    required

                                />
                            </div>
                        </div>
                        {errors?.passwordError && <p className="text-red-500 text-xs">{errors.passwordError}</p>}

                        <Link to="#" onClick={handlePasswordReset}>Forgot Password?</Link>
                        <Link to="/signup">New in here?</Link>

                        <input type="submit" className="login-btn" value="Login" />

                        <hr />


                    </form>
                    <div>
                        <div className="felx flex-col justify-center mr-auto">
                            <button
                                onClick={() => signInWithGoogle()}
                                className="flex justify-center items-center border-2 border-green-100 mx-auto py-3 px-8  rounded-3xl hover:bg-green-400 my-4">
                                <BsGoogle className="mr-4" />
                                Continue with google
                            </button>
                        </div>

                        <div className="felx flex-col justify-center mr-auto">
                            <button
                                onClick={() => signInWithGithub()}
                                className="flex justify-center items-center border-2 border-green-100 mx-auto py-3 px-8  rounded-3xl hover:bg-green-400">
                                <BsGithub className="mr-4" />
                                Continue with Github
                            </button>
                        </div>
                    </div>
                    <hr />
                    <ToastContainer />
                </div>
            </div>
        </div>


    );
};

export default Login;