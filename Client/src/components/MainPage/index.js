import React from "react";
import Mainheader from "../MainHeader";
import { HashRouter as Router, Route } from "react-router-dom";
import Body3 from "./Body3";
import Body1 from "./Body1";
import Body2 from "./Body2";

export default function MainPage() {
    return (
        <div>
            <Mainheader />
            <Body1 />
            <Body2 />
            <Body3 />
        </div>
    );
}
