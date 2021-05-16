import dog from "../assets/images/23.png";
import { useState } from "react";
import { pbkdf, genAllSubKeys, encrypt, decrypt } from "../../libs/aes";

function LoginBody() {
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");

    function login(e) {
        var key = pbkdf(email, pwd);
        var subKey = genAllSubKeys(key);

        var cipher = encrypt(subKey, pwd);
        console.log(cipher);
        var plain = decrypt(subKey, cipher);
        console.log(plain);
    }

    return (
        <body class="font-actor bg-lightgrey">
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
                                    <label
                                        class="block mb-2 text-sm font-bold text-gray-700"
                                        for="email"
                                    >
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
                                        <label
                                            class="block mb-2 text-sm font-bold text-gray-700"
                                            for="password"
                                        >
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
                                        href="./index.html"
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
    );
}
export default LoginBody;
