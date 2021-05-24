import React from "react";
import DashHeader from "../DashHeader";
import Dashboardbody from "./Dashboardbody";
import { HashRouter as Router, Route } from "react-router-dom";
import "./dashboardstyles.css";

export default function Dashboard(props) {
    return (
        <div className="main-wrapper">
            <DashHeader />
            <Dashboardbody props={props} />
        </div>
    );
}
