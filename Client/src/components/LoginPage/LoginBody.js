import dog from "../assets/images/23.png";
import { useState } from "react";
import axios from "axios";
import { pbkdf, genAllSubKeys, encrypt, decrypt } from "../../libs/aes";
import AlertBox from "../Alert Box/AlertBox";

function LoginBody({ props }) {
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");

    function login(e) {
        if (email === "" || pwd === "") {
            showAlert(
                "Fields Empty",
                "Email and Password field cannot be empty"
            );
            return;
        }

        var key = pbkdf(email, pwd);
        var subKeys = genAllSubKeys(key);
        var cipher = encrypt(subKeys, key);

        axios
            .get("http://localhost:5100/login", {
                params: {
                    username: email,
                },
            })
            .then((res) => {
                if (typeof res.data !== "undefined" || res.data.length === 0) {
                    var password = res.data[0].password;
                    if (password === cipher) {
                        window.sessionStorage.setItem("email", email);
                        window.sessionStorage.setItem(
                            "subKeys",
                            JSON.stringify(subKeys)
                        );
                        props.history.push("/dashboard");
                    } else {
                        showAlert(
                            "Incorrect Password",
                            "Please enter correct password"
                        );
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                showAlert(
                    "Incorrect Email",
                    "Please enter correct email address"
                );
            });
    }

    const [alertWindowVisible, setAlertWindowVisible] = useState(false);
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
        <>
            <body class="font-actor bg-lightgrey">
                {alertWindowVisible ? (
                    <AlertBox
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
                                    Login to your account!
                                </h3>
                                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div class="mb-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="mb-8">
                                        <div class="mb-4 md:mr-2 md:mb-0">
                                            <label class="block mb-2 text-sm font-bold text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="******************"
                                                value={pwd}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            <p class="text-xs italic text-red-500">
                                                Please enter your password.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-10 text-center">
                                        <button
                                            class="w-full px-4 py-2 font-bold text-white bg-lightgrey rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="button"
                                            onClick={(e) => login(e)}
                                        >
                                            Log in
                                        </button>
                                    </div>
                                    <hr class="mb-4 border-t" />

                                    <div class="text-center">
                                        <a
                                            class="inline-block text-sm text-blue-500 align-baseline hover:text-orange"
                                            onClick={(e) => {
                                                props.history.push("/register");
                                            }}
                                        >
                                            Don't have an account yet? Register!
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
export default LoginBody;
