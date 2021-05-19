import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Mainheader from "../MainHeader";
import LoginBody from "./LoginBody";

export default function LoginPage(props) {
    return (
        <div>
            <Mainheader />
            <LoginBody props={props} />
        </div>
    );
}
