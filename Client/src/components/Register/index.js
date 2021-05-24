import React from "react";
import Mainheader from "../MainHeader";
import RegisterBody from "./RegisterBody";
import { HashRouter as Router, Route } from "react-router-dom";

export default function Register(props) {
    return (
        <div>
            <Mainheader />
            <RegisterBody props={props} />
        </div>
    );
}
