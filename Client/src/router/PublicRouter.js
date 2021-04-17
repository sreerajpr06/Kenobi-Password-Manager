import React from "react";
import MainPage from "../components/MainPage";
import Register from "../components/Register";
import { useRoutes } from "hookrouter";



const routes={
    "/mainpage": () => <MainPage />,
    "/register": () => <Register />
};

export default function PublicRouter() {
    const pages = useRoutes(routes);
    return (
        <div className="w-screen flex flex-col min-h-screen pb-20">
            {pages}
            
        </div>
    );
}