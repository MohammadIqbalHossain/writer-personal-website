import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {

    const [userData, setUserData] = useState({
        email: "",
        name: "",
        password: "",
        address: "",
        phoneNumber: ""
    })

    console.log(userData);
    console.log(userData.email);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        const name = e.target.name.value;

        const password = e.target.password.value;
        const address = e.target.address.value;
        const phoneNumber = e.target.phoneNumber.value;


        if(/\S+@\S+\.\S+/.test(e.target.email.value)){
            setUserData({...userData, email: e.target.email.value})
        }

        // console.log(email, name, password, address, phoneNumber);


        if (email, name, password, address, phoneNumber) {
            toast("Thanks for Information,")
        }
        else{
            toast("you should fill inputs")
        }


    }
    return (


        <div className="flex flex-col  items-center justify-center text-left my-10">
            <h1 className="text-center uppercase font-bold text-4xl text-green-300 my-8">Give your information <br /> to book me for your reasearch!</h1>
            <form onSubmit={handleOnSubmit}>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div class="mb-6">
                    <label for="email" name="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" />
                </div>

                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div class="mb-6">
                    <label for="Address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                    <input type="text" name="address" id="addresss" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div class="mb-6">
                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                    <input type="number" name="phoneNumber" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>

                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>

                    <div class="ml-3 text-sm">
                        <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <ToastContainer />
        </div>


    );
};

export default Checkout;