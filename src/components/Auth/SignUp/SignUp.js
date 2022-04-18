import React, { useEffect, useState } from 'react';
import avatar from '../../images/login/avatar.svg'
import wave from "../../images/login/wave.png"
import bg from '../../images/login/bg.svg'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        randomErrors: ""

    })

    // console.log(userInfo.email)
    // console.log(errors.emailError);
    // console.log(errors);



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // console.log(error);
    // console.log(user);


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

    // console.log(userInfo);

    const handlePassword = e => {
        const passRegex = /.{6,}/;
        const validPassword = passRegex.test(e.target.value);
        if (validPassword) {
            setUserData({ ...userData, password: e.target.value })
            setErrors({ ...errors, passwordError: "" })
        } else {
            setErrors({ ...errors, passwordError: "Password too short" })
            setUserData({ ...userData, password: "" });
        }

    }

    const handleConfirmPassword = e => {
        if (e.target.value === userData.password) {
            setUserData({ ...userData, confirmPassword: e.target.value })
            setErrors({ ...errors, passwordError: "" })
        } else {
            setErrors({ ...errors, passwordError: "Passord Mismatched" });
            setUserData({ ...userData, confirmPassword: "" });
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(userData.email, userData.password);
    }

    useEffect(() => {
        switch (error?.code) {
            case "auth/email-already-in-use":
                toast("Your email is already exists")
                break;
            case "auth/insufficient-permission":
                toast("Please sign in with just one account")
                break;
            default:
                break;
        }
    }, [error]);



    const navigate = useNavigate();
    if (user) {
        navigate("/")
    }

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
                                    type="email"
                                    className="input"
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
                                    type="password"
                                    className="input"
                                    required
                                />
                            </div>
                        </div>
                        {errors?.passwordError && <p className="text-red-500 text-xs">{errors.passwordError}</p>}

                        <div className="input-div pass">
                            <div className="i">
                                <AiFillLock />
                            </div>
                            <div className="div">
                                <h5>Confirm Password</h5>
                                <input
                                    onChange={handleConfirmPassword}
                                    type="password"
                                    className="input"
                                    required
                                />

                            </div>
                        </div>
                        {errors.passwordError && <p className="text-red-500 text-xs">{errors.passwordError}</p>}
                        <Link to='/login'>Login.</Link>

                        <input type="submit" className="login-btn" value="Sign Up" />

                        <hr />
                    </form>
                    <ToastContainer />
                </div>
            </div>

        </div>


    );
};

export default SignUp;