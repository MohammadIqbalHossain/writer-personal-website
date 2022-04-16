import React, { useEffect, useState } from 'react';
import './Login.css';
import avatar from '../../images/login/avatar.svg'
import wave from "../../images/login/wave.png"
import bg from '../../images/login/bg.svg'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';



const Login = () => {

    const [userInfo, setUserInfo] = useState({
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


    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, emailError: "" })
        } else {
            setErrors({ ...errors, emailError: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }

    // console.log(userInfo);

    const handlePassword = e => {
        const passRegex = /.{6,}/;
        const validPassword = passRegex.test(e.target.value);
        console.log(validPassword);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, passwordError: "" })
        } else {
            setErrors({ ...errors, passwordError: "Password too short" })
            setUserInfo({ ...userInfo, password: "" });
        }

    }

    const handleOnSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }


    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    const handlePasswordReset = async () => {
        await sendPasswordResetEmail(userInfo.email);
        toast("Check your mail");
    }

    useEffect(() => {
        switch (error?.code) {
            case "auth/invalid-email":
                toast("Invalid email")
                break;
            case "auth/user-not-found":
                toast("Sign in first or reset password")
                break;
            default:
                console.log("This is from login js line:99");
                break;
        }

    }, [error]);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // const handleContinueWithGoogle = () => {
    //     signInWithGoogle(userInfo.email) 
    // }
    
    console.log(googleUser);

    // const location = useLocation();
    const navigate = useNavigate();
    // let from = location.state?.from?.pathname || "/";
    // if (user || googleUser) {
    //     navigate(from, { replace: true });
    // }
    if(user){
        navigate("/");
    }


    

    return (
        <div className="mb-30">
            <img class="wave" src={wave} />
            <div class="container">
                <div class="img">
                    <img src={bg} />
                </div>
                <div class="login-content">
                    <form onSubmit={handleOnSubmit}>
                        <img className="w-full mx-auto" src={avatar} />
                        <h2 class="title">Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <FaUserAlt />
                            </div>
                            <div class="div">
                                <h5>Email</h5>
                                <input
                                    onChange={handleEmail}
                                    className="outline-none"
                                    type="text"
                                    class="input" />
                            </div>

                        </div>
                        {errors?.emailError && <p className="text-red-500 text-xs">{errors.emailError}</p>}
                        <div class="input-div pass">
                            <div class="i">
                                <AiFillLock />
                            </div>
                            <div class="div">
                                <h5>Password</h5>
                                <input
                                    onChange={handlePassword}
                                    className="outline-none" type="password"
                                    class="input" />
                            </div>
                        </div>
                        {errors?.passwordError && <p className="text-red-500 text-xs">{errors.passwordError}</p>}

                        <a href="#" onClick={handlePasswordReset}>Forgot Password?</a>
                        <input type="submit" class="login-btn" value="Login" />

                        <hr />

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
                                className="flex justify-center items-center border-2 border-green-100 mx-auto py-3 px-8  rounded-3xl hover:bg-green-400">
                                <BsGithub className="mr-4" />
                                Continue with Github
                            </button>
                        </div>
                    </form>
                    <hr />
                    <ToastContainer />
                </div>
            </div>
        </div>


    );
};

export default Login;