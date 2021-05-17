import React from "react";
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
