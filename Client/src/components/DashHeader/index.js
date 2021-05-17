import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/orangelogo4.png";

function DashHeader() {
    return (
        <div className="px-0.0 bg-orange font-actor">
            <nav className="flex items-center justify-between flex-wrap bg-darkgrey p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <img
                        src={logo}
                        alt="logo"
                        width="50"
                        className="mr-3"
                    ></img>
                    <Link
                        to="/"
                        className="font-normal text-white text-3xl font-actor"
                    >
                        KENOBI
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link
                            to="/dashboard"
                            className="block mt-4 lg:inline-block lg:mt-3 text-white hover:text-orange font-light mr-4"
                        >
                            DASHBOARD
                        </Link>
                        <Link
                            to="/team"
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange font-light mr-4"
                        >
                            TEAM
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/login"
                            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange font-light mr-4"
                        >
                            LOG OUT
                        </Link>
                        {/* <Link to="/register" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-orange hover:border-transparent bg-orange hover:text-teal mt-4 lg:mt-0">REGISTER</Link> */}
                    </div>
                </div>
            </nav>
            <div className="bg-lightgrey"></div>
        </div>
    );
}
export default DashHeader;
