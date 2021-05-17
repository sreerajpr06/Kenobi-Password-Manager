import React from "react";
import Mainheader from "../MainHeader";
import RegisterBody from "./RegisterBody";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function MainPage() {
    return (
        <div>
            <Mainheader />
            <RegisterBody />
        </div>
    );
}
