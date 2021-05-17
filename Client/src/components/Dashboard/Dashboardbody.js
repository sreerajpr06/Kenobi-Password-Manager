import { Fragment, useEffect, useState } from "react";
import PasswordWindow from "./PasswordWindow";

export default function Dashboardbody({ props }) {
    const [email, setEmail] = useState("");
    const [pwdWindowClass, setPwdWindowClass] = useState(false);
    const [showPasswordIndex, setShowPasswordIndex] = useState(-1);
    const [passwordWindowPackage, setPasswordWindowPackage] = useState({
        site: "",
        email: "",
        password: "",
        index: -1,
    });
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

    useEffect(() => {
        if (typeof props.location.state !== "undefined") {
            setEmail(props.location.state.email);
        }
        console.log(email);
    }, []);

    function onShowPasswordWindow(e) {
        setPwdWindowClass(!pwdWindowClass);
    }

    function onAdd(site, login, pwd, index) {
        if (site !== "" && login !== "" && pwd !== "") {
            if (index < 0) {
                setPasswords([
                    ...passwords,
                    {
                        site: site,
                        login: login,
                        password: pwd,
                    },
                ]);
            } else {
                setPasswords([
                    ...passwords.slice(0, index),
                    {
                        ...passwords[index],
                        site: site,
                        login: login,
                        password: pwd,
                    },
                    ...passwords.slice(index + 1),
                ]);
            }
            setPwdWindowClass(!pwdWindowClass);
        } else {
            alert("Fields cannot be empty!");
        }
    }

    function onDelete(index) {
        setPasswords([
            ...passwords.slice(0, index),
            ...passwords.slice(index + 1),
        ]);
    }

    return (
        <>
            {pwdWindowClass ? (
                <div className={"password-window-wrapper"}>
                    <PasswordWindow
                        onCancel={onShowPasswordWindow}
                        onAdd={onAdd}
                        values={passwordWindowPackage}
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
                        {passwords.map((password, index) => {
                            return (
                                <div key={index} className="password-wrapper">
                                    <div className="password-item">
                                        {password.site}
                                    </div>
                                    <div className="password-item">
                                        {password.login}
                                    </div>
                                    <div className="password-item">
                                        {showPasswordIndex !== index
                                            ? "*".repeat(
                                                  password.password.length
                                              )
                                            : password.password}
                                    </div>
                                    <div className="password-item password-options">
                                        <div
                                            className="far fa-eye"
                                            onClick={(e) => {
                                                showPasswordIndex === index
                                                    ? setShowPasswordIndex(-1)
                                                    : setShowPasswordIndex(
                                                          index
                                                      );
                                            }}
                                        ></div>
                                        <div
                                            className="far fa-edit"
                                            onClick={(e) => {
                                                setPasswordWindowPackage({
                                                    site: password.site,
                                                    email: password.login,
                                                    password: password.password,
                                                    index: index,
                                                });
                                                onShowPasswordWindow(e);
                                            }}
                                        ></div>
                                        <div
                                            className="far fa-trash-alt"
                                            onClick={(e) => {
                                                onDelete(index);
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
