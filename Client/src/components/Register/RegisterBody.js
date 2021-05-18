import React, { useState } from "react";
import dog from "../assets/images/23.png";
import axios from "axios";
import { pbkdf, genAllSubKeys, encrypt } from "../../libs/aes";
import AlertBox from "../Alert Box/AlertBox";

function RegisterBody({ props }) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [repwd, setRePwd] = useState("");

    function onChangeUsername(e) {
        setEmail(e.target.value);
    }

    function onChangePassword(e) {
        setPwd(e.target.value);
    }

    function onReChangePassword(e) {
        setRePwd(e.target.value);
    }

    function addUser(e) {
        if (email === "" || pwd === "") {
            showAlert(
                "Fields Empty",
                "Email and Password field cannot be empty"
            );
            return;
        }

        if (pwd !== repwd) {
            showAlert(
                "Passwords Don't Match",
                "Please check passwords and try again"
            );
            return;
        }

        var key = pbkdf(email, pwd);
        var subKey = genAllSubKeys(key);
        var cipher = encrypt(subKey, key);

        const details = [
            {
                site: "kenobi",
                username: email,
                password: cipher,
            },
        ];

        const user = {
            username: email,
            details: details,
        };

        axios
            .post("http://localhost:5000/users/add", user)
            .then((res) => {
                if (res.status === 200) {
                    setAlertWindowIcon("info");
                    showAlert(
                        "Account successfully made!",
                        "Please log in to continue"
                    );
                }
            })
            .catch((err) => {
                console.log(err);
                showAlert(
                    "Error",
                    "Some error occured. Please try again later"
                );
            });
    }

    const [alertWindowVisible, setAlertWindowVisible] = useState(false);
    const [alertWindowIcon, setAlertWindowIcon] = useState("alert");
    const [title, setTitle] = useState("Test Title");
    const [message, setMessage] = useState(
        "test message to check message lol ol olol"
    );
    function showAlert(title, message) {
        setTitle(title);
        setMessage(message);
        setAlertWindowVisible(!alertWindowVisible);
    }

    return (
        <body class="font-actor bg-lightgrey">
            {alertWindowVisible ? (
                <AlertBox
                    icon={alertWindowIcon}
                    title={title}
                    message={message}
                    onButtonClick={showAlert}
                />
            ) : null}
            <div class="container mx-auto">
                <div class="flex justify-center p-20 my-0">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex my-3">
                        <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                            <img src={dog} alt="dog"></img>
                        </div>

                        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">
                                Create an Account!
                            </h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            First Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            Last Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        onChange={onChangeUsername}
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="mb-8 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            onChange={onChangePassword}
                                        />
                                        <p class="text-xs italic text-red-500">
                                            Please choose a password.
                                        </p>
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                            onChange={onReChangePassword}
                                        />
                                    </div>
                                </div>
                                <div class="mb-10 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-lightgrey rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={addUser}
                                    >
                                        Register Account
                                    </button>
                                    {/* <input type="submit" value="Register account " className="w-full px-4 py-2 font-bold text-white bg-lightgrey rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button" /> */}
                                </div>
                                <hr class="mb-4 border-t" />

                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-orange"
                                        href="#"
                                        onClick={(e) => {
                                            props.history.push("/login");
                                        }}
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default RegisterBody;
