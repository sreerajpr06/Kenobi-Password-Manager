import { Fragment, useEffect, useState } from "react";
import PasswordWindow from "./PasswordWindow";

export default function Dashboardbody(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [email, setEmail] = useState(
        props.props.history.location.state.email
    );
    const [pwdWindowClass, setPwdWindowClass] = useState(true);
    const [passwords, setPasswords] = useState([
        {
            site: "www.google.com",
            login: "sidhantunnithan",
            password: "uwjivji",
        },
        {
            site: "www.facebook.com",
            login: "itachiuchiha",
            password: "djkvnalksnd",
        },
        // More passwords...
    ]);

    useEffect(() => {}, []);

    function onShowPasswordWindow(e) {
        setPwdWindowClass(!pwdWindowClass);
    }

    function onAdd(site, login, pwd) {
        setPasswords([
            ...passwords,
            {
                site: site,
                login: login,
                password: pwd,
            },
        ]);
        setPwdWindowClass(!pwdWindowClass);
    }

    return (
        <>
            {pwdWindowClass ? (
                <div className={"password-window-wrapper"}>
                    <PasswordWindow
                        onCancel={onShowPasswordWindow}
                        onAdd={onAdd}
                    />
                </div>
            ) : null}
            <div className="dashboard-wrapper">
                <h1 className="heading">
                    <div className="button-add" onClick={onShowPasswordWindow}>
                        <span className="element-plus">+</span>ADD
                    </div>
                </h1>
                <div className="content-wrapper">
                    <div className="heading-wrapper">
                        <div className="heading-item">Name</div>
                        <div className="heading-item">Login</div>
                        <div className="heading-item">Password</div>
                        <div className="heading-item"></div>
                    </div>
                    <div className="password-body-wrapper">
                        {passwords.map((password) => {
                            return (
                                <div className="password-wrapper">
                                    <div className="password-item">
                                        {password.site}
                                    </div>
                                    <div className="password-item">
                                        {password.login}
                                    </div>
                                    <div className="password-item">
                                        {password.password}
                                    </div>
                                    <div className="password-item"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
